import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container text-center mt-5">
      <h2>404- Page Not Found</h2>
      <Link to={"/"} className="btn btn-primary mt-4">Return to Home</Link>
    </div>
  );
}

export default PageNotFound;
