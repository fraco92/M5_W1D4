import React from "react";
import NotFoundImg from "../assets/404_error_img.jpg";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <img className="size-1/3" src={NotFoundImg} alt="notFound_img" />
    </div>
  );
};
