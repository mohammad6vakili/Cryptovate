import React, { ReactNode, useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SelectContext } from "./SelectContext";
import selectArrowBlack from "../../assets/icons/select-arrow-black.svg";
import selectArrowWhite from "../../assets/icons/select-arrow-white.svg";

const Select: React.FC<{
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  placeholder?: string;
  theme?: string;
  color?:string;
}> = ({ children, defaultValue, placeholder, theme , color}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="select-container" ref={selectContainerRef}>
        <div
          style={color ? {color:color} : {color:"white"}}
          className={showDropdown ? "selected-text active" : "selected-text"}
          id={theme==="light" ? "mv-select-light-content" : ""}
          onClick={showDropdownHandler}
        >
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
          {theme === "light" ? (
            <img src={selectArrowBlack} alt="arrow" />
          ) : (
            <img src={selectArrowWhite} alt="arrow" />
          )}
        </div>
        <ul
          className={
            showDropdown
              ? "select-options show-dropdown-options"
              : "select-options hide-dropdown-options"
          }
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
