import React from "react";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";

function RightSection({productImg, title, description, productLink}) {
  return (
    <div className="container rightSection">
      <div className="row">
        <div className="col-8">
          <img src={productImg} alt="" className="ms-5" />
        </div>
        <div className="col-4 mt-5">
          <h3>{title}</h3>
          <p className="mt-3 lh-lg">
            {description}
          </p>
          <p>
            <a href="" className="me-5">
              Try demo →
            </a>{" "}
            <a href="" className="ms-3">
              Learn more →
            </a>
          </p>
          <img src={googlePlayBadge} alt="" className="me-4 badges mt-2" />
          <img src={appstoreBadge} alt="" className="badges mt-2" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
