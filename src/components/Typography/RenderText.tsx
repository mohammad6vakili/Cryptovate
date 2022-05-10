import React from "react";
import { ITextProps } from "./types";
import "./style.scss";

const RenderText: React.FC<ITextProps> = (props: ITextProps) => {
  const renderContent = ({ type, children, label, className }: ITextProps) => {
    switch (type) {
      case "heading":
        return (
          <h1 className={"heading" + (className ? ` ${className}` : "")}>
            {label || children}
          </h1>
        );

      case "heading2":
        return (
          <h1 className={"heading heading2" + (className ? ` ${className}` : "")}>
            {label || children}
          </h1>
        );

      case "title":
        return (
          <h1 className={"title" + (className ? ` ${className}` : "")}>
            {label || children}
          </h1>
        );

      case "title2":
        return (
          <h1 className={"title2" + (className ? ` ${className}` : "")}>
            {label || children}
          </h1>
        );

      case "paragraph":
        return (
          <p className={"paragraph" + (className ? ` ${className}` : "")}>
            {label || children}
          </p>
        );

      case "paragraph2":
        return (
          <p className={"paragraph2" + (className ? ` ${className}` : "")}>
            {label || children}
          </p>
        );

      case "label":
        return (
          <p className={"label" + (className ? ` ${className}` : "")}>
            {label || children}
          </p>
        );

      default:
        return (
          <p className={"paragraph" + (className ? ` ${className}` : "")}>
            {label || children}
          </p>
        );
    }
  };

  return <>{renderContent({ ...props })}</>;
};

export default RenderText;
