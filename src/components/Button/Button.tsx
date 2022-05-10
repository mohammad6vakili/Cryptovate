import React from "react";
import { IButtonProps } from "./types";
import "../../styles/variables.scss";
import "../../styles/global.scss";
import "./style.scss";

const Button: React.FC<IButtonProps> = ({
  label,
  variant,
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={
        "button" +
        (variant === "secondary" ? " button--secondary" : " button--primary") +
        (variant === "tertiary" ? " button--tertiary" : "") + ` ${className}`
      }
      onClick={onClick}
      {...props}
    >
      {label && <span>{label}</span>}
      {children && children}
    </button>
  );
};

export default Button;
