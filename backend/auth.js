// Simple auth helpers using only Node's built-in crypto (no extra packages).
const crypto = require('crypto');

const COOKIE_NAME = 'tradepilot_token';
const ONE_DAY = 24 * 60 * 60 * 1000;

// ---- Password hashing (scrypt + random salt) ----
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':');
  const check = crypto.scryptSync(password, salt, 64);
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), check);
}

// ---- Login token: "userId.expiry.signature" signed with AUTH_SECRET ----
function sign(data) {
  return crypto.createHmac('sha256', process.env.AUTH_SECRET).update(data).digest('hex');
}

function createToken(userId) {
  const data = `${userId}.${Date.now() + ONE_DAY}`;
  return `${data}.${sign(data)}`;
}

// Returns the userId if the token is valid and not expired, otherwise null.
function readToken(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [userId, expiry, signature] = parts;
  const expected = sign(`${userId}.${expiry}`);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  if (Date.now() > Number(expiry)) return null;
  return userId;
}

// ---- Cookie helpers ----
function getTokenFromRequest(req) {
  const header = req.headers.cookie || '';
  const match = header.split(';').map((c) => c.trim()).find((c) => c.startsWith(COOKIE_NAME + '='));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
}

function setLoginCookie(res, token) {
  res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax', maxAge: ONE_DAY });
}

function clearLoginCookie(res) {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: 'lax' });
}

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  readToken,
  getTokenFromRequest,
  setLoginCookie,
  clearLoginCookie,
};
