import React from "react";
import { MouseEventHandler } from "react";

export const Button = ({
  name,
  type = "button",
  onClick,
}: {
  name: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler;
}) => {
  return (
    <button type={type} onClick={onClick}>
      {name}
    </button>
  );
};
