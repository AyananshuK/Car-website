import React from "react";
import "./serviceBox.css";

const ServiceBox = ({icon, title, description}) => {
  return (
    <div className="service-box">
      <div className="icon-box">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4 className="title">
          <a href="#">{title}</a>
        </h4>
        <p className="description">
          {description? description: 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
