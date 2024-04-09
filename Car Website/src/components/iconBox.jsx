import React from "react";
import "./iconBox.css";
import CarRatnig from './carRating'

const IconBox = ({icon, title, description}) => {
  return (
    <div>
      <div className="icon-box">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4 className="title">
          <a href="#">{title}</a>
        </h4>
        <p className="description">
          {description? description: undefined}
        </p>
      </div>
    </div>
  );
};

export default IconBox;
