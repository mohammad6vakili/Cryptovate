import React, { ReactNode } from "react";
import { useSelectContext } from "./SelectContext";

const Option: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
}> = ({ children, value }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li className="select-option" onClick={() => changeSelectedOption(value)}>
      {children}
    </li>
  );
};

export default Option;
