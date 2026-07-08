import React from "react";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";

function LeftSection({ productImg, title, description, productLink }) {
  return (
    <div className="container ps-5">
      <div className="row">
        <div className="col-4 leftSection">
          <h3>{title}</h3>
          <p className="mt-3 lh-lg">{description}</p>
          <p>
            <a href="">Learn more →</a>
          </p>
        </div>
        <div className="col-8">
          <img src={productImg} alt="" className="ms-5 leftSectionImg" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
