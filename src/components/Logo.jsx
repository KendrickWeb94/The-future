import React from "react";
import { Link } from "react-router-dom";
import {siteLogo} from "../static/images"

export const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src={siteLogo}
        className="max-w-36 min-w-20"
        alt="Logo"
      />
     
    </Link>
  );
};
