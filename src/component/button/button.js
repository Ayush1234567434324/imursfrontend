import PropTypes from "prop-types";
import React from "react";
import "./button.css";
import { NavLink } from "react-router-dom";

export const ButtonSecondary = ({ className, customStyle, text, direction, to }) => {
  return (
    <NavLink to={direction ? to : ''} className={`button-secondary ${className}`}>
      <div className="text-wrapper" >{text || "order now"}</div>
    </NavLink>
  );
};

export const ButtonPrimary = ({ className, customStyle, text, direction, to }) => {
  return (
    <NavLink to={direction ? to : ''} className={`button-primary ${className}`} style={customStyle}>
      <div className="text-wrapper">{text || "order now"}</div>
    </NavLink>
  );
};



ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
