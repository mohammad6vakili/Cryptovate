import React, { useState } from "react";
import "./style.scss";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Ham } from "../../assets/icons/ham.svg";
import { walletConnectionController } from "../../utils/walletConnectionController";
import Switch from "../Switch";
import { Button, Popover, Modal } from "antd";
import { IHeaderProps } from "./types";
import moment from "moment";
import profileAvatar from "../../assets/images/profile-avatar.png";
import openMenuDark from "./Assets/open-menu-dark.svg";
import openMenuLight from "./Assets/open-menu-light.svg";
import closeMenuDark from "./Assets/close-menu-dark.svg";
import closeMenuLight from "./Assets/close-menu-light.svg";
import { MetaMask } from "../../utils/connector/EthConnector";

const Header: React.FC<IHeaderProps> = ({
  theme,
  profileImg,
  toggleTheme,
  ...props
}) => {
  const [hamOpen, setHamOpen] = useState(false);
  const [isPrivate, setPrivate] = useState(true);
  const [fullMenu, setFullMenu] = useState(false);
  const [iconOne, setIconOne] = useState(false);
  const [iconTwo, setIconTwo] = useState(false);
  const [iconThree, setIconThree] = useState(false);
  const [iconFour, setIconFour] = useState(false);
  const [iconFive, setIconFive] = useState(false);
  const web3react = useWeb3React();
  const connected = web3react.active;
  const account = web3react.account;
  const walletconnection = new walletConnectionController(web3react);

  const handleconnectWallet = async (provider: any) => {
    await walletconnection.connect(provider);
  };

  const handleDisconnectWallet = async () => {
    await walletconnection.deactive();
  }

  // profile dropdown
  const menuContent = (
    <div
      className={`mv-header-menu-content ${
        theme === "light" ? "mv-header-menu-content-light" : ""
      }`}
      id={fullMenu === true ? "mv-header-menu-content-full" : ""}
      onMouseOver={() => setFullMenu(true)}
      onMouseLeave={() => setFullMenu(false)}
    >
      {theme === "dark" ? (
        <img style={{ marginBottom: "10px" }} src={closeMenuDark} alt="arrow" />
      ) : (
        <img
          style={{ marginBottom: "10px" }}
          src={closeMenuLight}
          alt="arrow"
        />
      )}
      <div
        onMouseOver={() => setIconOne(true)}
        onMouseLeave={() => setIconOne(false)}
        className={iconOne === true ? "mv-header-icon-hover" : ""}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9.5C19 4.275 14.725 0 9.5 0C4.275 0 0 4.275 0 9.5C0 12.1917 1.10833 14.5667 2.92917 16.3083C3.00833 16.3875 3.00833 16.3875 3.0875 16.4667C4.75 18.05 7.04583 19 9.5 19C11.9542 19 14.25 18.05 15.9125 16.4667C15.9917 16.4667 15.9917 16.3875 16.0708 16.3083C17.8917 14.5667 19 12.1917 19 9.5ZM9.5 1.1875C14.0917 1.1875 17.8125 4.90833 17.8125 9.5C17.8125 11.4792 17.1 13.2208 15.9917 14.6458C15.4375 12.9833 14.0125 11.7167 12.0333 11.0833C13.1417 10.2917 13.8542 9.025 13.8542 7.6C13.8542 5.225 11.875 3.24583 9.5 3.24583C7.125 3.24583 5.14583 5.225 5.14583 7.6C5.14583 9.025 5.85833 10.2917 6.96667 11.0833C4.9875 11.7167 3.48333 12.9833 3.00833 14.6458C1.9 13.2208 1.1875 11.4792 1.1875 9.5C1.1875 4.90833 4.90833 1.1875 9.5 1.1875ZM6.33333 7.6C6.33333 5.85833 7.75833 4.43333 9.5 4.43333C11.2417 4.43333 12.6667 5.85833 12.6667 7.6C12.6667 9.34167 11.2417 10.7667 9.5 10.7667C7.75833 10.7667 6.33333 9.34167 6.33333 7.6ZM3.95833 15.675C4.11667 13.5375 6.4125 11.875 9.5 11.875C12.5875 11.875 14.8042 13.4583 15.0417 15.675C13.5375 17.0208 11.6375 17.8125 9.5 17.8125C7.3625 17.8125 5.4625 17.0208 3.95833 15.675Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
        {fullMenu === true && <span>Profile</span>}
      </div>
      <div
        onMouseOver={() => setIconTwo(true)}
        onMouseLeave={() => setIconTwo(false)}
        className={iconTwo === true ? "mv-header-icon-hover" : ""}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4803 7.2373C8.71653 7.2373 7.27344 8.6804 7.27344 10.4442C7.27344 12.2079 8.71653 13.651 10.4803 13.651C12.2441 13.651 13.6872 12.2079 13.6872 10.4442C13.6872 8.6804 12.2441 7.2373 10.4803 7.2373ZM10.4803 12.3683C9.9191 12.3683 9.43807 12.1278 9.11739 11.8071C8.71653 11.4062 8.55618 10.9252 8.55618 10.4442C8.55618 9.32177 9.43807 8.43988 10.5605 8.43988C11.6829 8.43988 12.5648 9.32177 12.5648 10.4442C12.4044 11.4864 11.5225 12.3683 10.4803 12.3683Z"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            d="M18.5774 7.79836H17.6955L17.3748 7.15699L18.0162 6.51562C18.6576 5.87424 18.6576 4.83201 18.0162 4.19064L16.6533 2.82772C16.3326 2.50704 15.9317 2.34669 15.5309 2.34669C15.13 2.34669 14.649 2.50704 14.4085 2.82772L13.7671 3.46909L13.1257 3.14841V2.26652C13.1257 1.38463 12.4042 0.663086 11.5223 0.663086H9.67835C8.79647 0.663086 8.07492 1.38463 8.07492 2.26652V3.14841L7.19303 3.46909L6.55166 2.82772C5.91028 2.18635 4.86805 2.18635 4.22668 2.82772L2.86376 4.19064C2.22239 4.83201 2.22239 5.87424 2.86376 6.51562L3.50513 7.15699L3.18445 7.79836H2.38273C1.50084 7.79836 0.779297 8.51991 0.779297 9.4018V11.3259C0.779297 12.2078 1.50084 12.9294 2.38273 12.9294H3.26462L3.58531 13.5707L2.94393 14.2121C2.30256 14.8535 2.30256 15.8957 2.94393 16.5371L4.30685 17.9C4.94822 18.5414 5.99046 18.5414 6.63183 17.9L7.19303 17.3388L7.83441 17.6595V18.5414C7.83441 19.4233 8.55595 20.1448 9.43784 20.1448H11.2818C12.1637 20.1448 12.8852 19.4233 12.8852 18.5414V17.6595L13.5266 17.3388L14.168 17.9802C14.8093 18.6215 15.8516 18.6215 16.4929 17.9802L17.8559 16.6172C18.4972 15.9759 18.4972 14.9336 17.8559 14.2923L17.2145 13.6509L17.5352 13.0095H18.4171C19.299 13.0095 20.0205 12.288 20.0205 11.4061V9.56214C20.1808 8.60008 19.4593 7.79836 18.5774 7.79836ZM18.5774 11.7268H17.2947C17.0541 11.7268 16.8136 11.8871 16.7335 12.1276L16.1723 13.5707C16.0921 13.8112 16.0921 14.0518 16.3326 14.2121L17.2145 15.094C17.3748 15.2543 17.3748 15.4948 17.2145 15.6552L15.8516 17.0181C15.6912 17.1785 15.4507 17.1785 15.2904 17.0181L14.3283 16.1362C14.168 15.9759 13.9275 15.8957 13.6869 15.9759L12.2438 16.5371C12.0033 16.6172 11.843 16.8578 11.843 17.0983V18.381C11.843 18.6215 11.6826 18.7819 11.4421 18.7819H9.59818C9.35767 18.7819 9.19732 18.6215 9.19732 18.381V17.0983C9.19732 16.8578 9.03698 16.6172 8.79647 16.5371L7.35338 15.9759C7.2732 15.9759 7.19303 15.8957 7.11286 15.8957C6.95252 15.8957 6.79217 15.9759 6.712 16.056L5.83011 16.9379C5.66977 17.0983 5.42925 17.0983 5.26891 16.9379L3.90599 15.575C3.74565 15.4147 3.74565 15.1742 3.90599 15.0138L4.78788 14.1319C4.94822 13.9716 5.0284 13.7311 4.94822 13.4906L4.22668 12.1276C4.14651 11.8871 3.90599 11.7268 3.66548 11.7268H2.38273C2.14222 11.7268 1.98187 11.5664 1.98187 11.3259V9.48197C1.98187 9.24146 2.14222 9.08111 2.38273 9.08111H3.66548C3.90599 9.08111 4.14651 8.92077 4.22668 8.68025L4.78788 7.23716C4.86805 6.99665 4.86805 6.75613 4.62754 6.59579L3.74565 5.7139C3.58531 5.55356 3.58531 5.31304 3.74565 5.1527L5.10857 3.78978C5.26891 3.62944 5.50943 3.62944 5.66977 3.78978L6.55166 4.67167C6.712 4.83201 6.95252 4.91219 7.19303 4.83201L8.63612 4.27081C8.87664 4.19064 9.03698 3.95012 9.03698 3.70961V2.42686C9.03698 2.18635 9.19732 2.02601 9.43784 2.02601H11.2818C11.5223 2.02601 11.6826 2.18635 11.6826 2.42686V3.70961C11.6826 3.95012 11.843 4.19064 12.0835 4.27081L13.5266 4.83201C13.7671 4.91219 14.0076 4.91219 14.168 4.67167L15.0499 3.78978C15.2102 3.62944 15.4507 3.62944 15.6111 3.78978L16.974 5.1527C17.1343 5.31304 17.1343 5.55356 16.974 5.7139L16.0921 6.59579C15.9317 6.75613 15.8516 6.99665 15.9317 7.23716L16.4929 8.68025C16.5731 8.92077 16.8136 9.08111 17.0541 9.08111H18.3369C18.5774 9.08111 18.7378 9.24146 18.7378 9.48197V11.3259C18.9783 11.5664 18.7378 11.7268 18.5774 11.7268Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
        {fullMenu === true && <span>Setting</span>}
      </div>
      <div
        onMouseOver={() => setIconThree(true)}
        onMouseLeave={() => setIconThree(false)}
        onClick={() => handleconnectWallet(MetaMask)}
        className={iconThree === true ? "mv-header-icon-hover" : ""}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7717 4.59952V2.81645C15.7717 1.92491 15.4465 1.11442 14.7962 0.547081C14.1458 0.0607882 13.3328 -0.101311 12.5198 0.0607864L1.54465 2.5733C0.650381 2.81645 0 3.54589 0 4.51847C0 4.51847 0 4.51847 0 4.59952C0 4.59952 0 4.59953 0 4.68058V13.758C0 15.5411 1.46336 17 3.2519 17H13.7393C15.5278 17 16.9912 15.5411 16.9912 13.758V12.4613V8.57092V7.27414C17.0725 6.13945 16.5847 5.16686 15.7717 4.59952ZM12.845 1.35757C13.2515 1.27652 13.658 1.35757 13.9019 1.60072C14.2271 1.92491 14.471 2.33016 14.3897 2.81645V4.03218C14.1458 3.95113 13.9832 3.95113 13.7393 3.95113H1.54465C1.62595 3.95113 1.70725 3.87009 1.78855 3.87009L12.845 1.35757ZM13.8206 15.7032H3.2519C2.19504 15.7032 1.30076 14.8117 1.30076 13.758V5.24792H13.7393C14.7962 5.24792 15.6904 6.13945 15.6904 7.19309V7.84148H11.7882C10.3248 7.84148 9.18663 8.97616 9.18663 10.435C9.18663 11.8939 10.3248 13.0286 11.7882 13.0286H15.7717V13.758C15.7717 14.8117 14.8775 15.7032 13.8206 15.7032ZM15.7717 11.8129H11.8694C11.1378 11.8129 10.5687 11.2455 10.5687 10.5161C10.5687 9.78665 11.1378 9.21931 11.8694 9.21931H15.7717V11.8129Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
        {!connected && fullMenu === true && <span>Connect Wallet</span>}
        {connected && fullMenu === true && (
          <span>{account?.substring(0, 12) + "..."} </span>
        )}
      </div>
      {connected && (
        <div
          onMouseOver={() => setIconFive(true)}
          onMouseLeave={() => setIconFive(false)}
          onClick={() => handleDisconnectWallet()}
          className={iconFive === true ? "mv-header-icon-hover" : ""}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9878 0.602539H5.97492C3.08874 0.602539 0.683594 2.92752 0.683594 5.89387C0.683594 6.21456 1.00428 6.53524 1.32497 6.53524C1.64565 6.53524 1.96634 6.21456 1.96634 5.89387C1.96634 3.72924 3.73012 1.88529 5.97492 1.88529H11.9878C14.1524 1.88529 15.9964 3.64907 15.9964 5.89387V12.7085C15.9964 14.8731 14.2326 16.7171 11.9878 16.7171H5.97492C3.81029 16.7171 1.96634 14.9533 1.96634 12.7085C1.96634 12.3878 1.64565 12.0671 1.32497 12.0671C1.00428 12.0671 0.683594 12.3878 0.683594 12.7085C0.683594 15.5946 3.00857 17.9998 5.97492 17.9998H11.9878C14.874 17.9998 17.2791 15.6748 17.2791 12.7085V5.89387C17.2791 2.92752 14.874 0.602539 11.9878 0.602539Z"
              fill="#8A8A8A"
            />
            <path
              d="M11.1056 9.9029L8.37975 12.6287C8.13924 12.8692 8.13924 13.2701 8.37975 13.5106C8.5401 13.671 8.70044 13.671 8.86078 13.671C9.02113 13.671 9.18147 13.5908 9.34181 13.5106L13.5909 9.26152L9.34181 5.01242C9.1013 4.7719 8.70044 4.7719 8.45993 5.01242C8.21941 5.25293 8.21941 5.6538 8.45993 5.89431L11.1858 8.62014H0.763444C0.442757 8.62014 0.12207 8.94083 0.12207 9.26152C0.12207 9.58221 0.442757 9.9029 0.763444 9.9029H11.1056Z"
              fill="#8A8A8A"
            />
          </svg>
          {fullMenu === true && <span>Disconnect Wallet</span>}
        </div>
      )}
      <div
        onMouseOver={() => setIconFour(true)}
        onMouseLeave={() => setIconFour(false)}
        className={iconFour === true ? "mv-header-icon-hover" : ""}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9878 0.602539H5.97492C3.08874 0.602539 0.683594 2.92752 0.683594 5.89387C0.683594 6.21456 1.00428 6.53524 1.32497 6.53524C1.64565 6.53524 1.96634 6.21456 1.96634 5.89387C1.96634 3.72924 3.73012 1.88529 5.97492 1.88529H11.9878C14.1524 1.88529 15.9964 3.64907 15.9964 5.89387V12.7085C15.9964 14.8731 14.2326 16.7171 11.9878 16.7171H5.97492C3.81029 16.7171 1.96634 14.9533 1.96634 12.7085C1.96634 12.3878 1.64565 12.0671 1.32497 12.0671C1.00428 12.0671 0.683594 12.3878 0.683594 12.7085C0.683594 15.5946 3.00857 17.9998 5.97492 17.9998H11.9878C14.874 17.9998 17.2791 15.6748 17.2791 12.7085V5.89387C17.2791 2.92752 14.874 0.602539 11.9878 0.602539Z"
            fill="#8A8A8A"
          />
          <path
            d="M11.1056 9.9029L8.37975 12.6287C8.13924 12.8692 8.13924 13.2701 8.37975 13.5106C8.5401 13.671 8.70044 13.671 8.86078 13.671C9.02113 13.671 9.18147 13.5908 9.34181 13.5106L13.5909 9.26152L9.34181 5.01242C9.1013 4.7719 8.70044 4.7719 8.45993 5.01242C8.21941 5.25293 8.21941 5.6538 8.45993 5.89431L11.1858 8.62014H0.763444C0.442757 8.62014 0.12207 8.94083 0.12207 9.26152C0.12207 9.58221 0.442757 9.9029 0.763444 9.9029H11.1056Z"
            fill="#8A8A8A"
          />
        </svg>
        {fullMenu === true && <span>Sign out</span>}
      </div>
    </div>
  );

  return (
    <header className="header" {...props}>
      {/* header logo */}
      <div className="mv-header-logo-wrapper">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <Link to="/road-map" className="header__road-map">
          Road map
        </Link>
      </div>
      {/* header links  */}
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/collections">Collectors</NavLink>
          </li>
          <li>
            <NavLink to="/creators">Creators</NavLink>
          </li>
          <li>
            <NavLink to="/marketplace">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/mint">Mint</NavLink>
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
        </ul>
      </nav>
      {/* header btns  */}
      <div className="header__right">
        <Link to="/" className="header__date">
          {moment().format("D \xa0| \xa0 MMM \xa0| \xa0 YYYY")}
        </Link>
        {/* header buttons section */}
        <div
          onClick={toggleTheme}
          className={`mv-header-changer ${
            theme === "light" ? "mv-header-changer-light" : ""
          }`}
        >
          <Button className={theme === "light" ? "mv-header-change-btn" : ""}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4999 15.7497C13.3993 15.7497 15.7497 13.3993 15.7497 10.4999C15.7497 7.60044 13.3993 5.25 10.4999 5.25C7.60044 5.25 5.25 7.60044 5.25 10.4999C5.25 13.3993 7.60044 15.7497 10.4999 15.7497Z"
                fill="#656565"
              />
              <path
                d="M19.9496 11.5501H18.8996C18.6211 11.5501 18.354 11.4395 18.1571 11.2426C17.9602 11.0457 17.8496 10.7786 17.8496 10.5002C17.8496 10.2217 17.9602 9.95463 18.1571 9.75773C18.354 9.56082 18.6211 9.4502 18.8996 9.4502H19.9496C20.228 9.4502 20.4951 9.56082 20.692 9.75773C20.8889 9.95463 20.9995 10.2217 20.9995 10.5002C20.9995 10.7786 20.8889 11.0457 20.692 11.2426C20.4951 11.4395 20.228 11.5501 19.9496 11.5501Z"
                fill="#656565"
              />
              <path
                d="M2.09994 11.5501H1.04997C0.771502 11.5501 0.504437 11.4395 0.307529 11.2426C0.110622 11.0457 0 10.7786 0 10.5002C0 10.2217 0.110622 9.95463 0.307529 9.75773C0.504437 9.56082 0.771502 9.4502 1.04997 9.4502H2.09994C2.37841 9.4502 2.64548 9.56082 2.84238 9.75773C3.03929 9.95463 3.14991 10.2217 3.14991 10.5002C3.14991 10.7786 3.03929 11.0457 2.84238 11.2426C2.64548 11.4395 2.37841 11.5501 2.09994 11.5501Z"
                fill="#656565"
              />
              <path
                d="M16.4417 5.6074C16.1808 5.59559 15.9338 5.48704 15.7487 5.30291C15.5531 5.10619 15.4434 4.84007 15.4434 4.56268C15.4434 4.28529 15.5531 4.01918 15.7487 3.82245L16.4942 3.07697C16.5883 2.96706 16.7041 2.87779 16.8344 2.81477C16.9646 2.75174 17.1065 2.71633 17.2511 2.71074C17.3957 2.70516 17.5399 2.72952 17.6747 2.78231C17.8094 2.8351 17.9318 2.91517 18.0341 3.01749C18.1364 3.11982 18.2165 3.24219 18.2693 3.37692C18.3221 3.51166 18.3464 3.65586 18.3409 3.80046C18.3353 3.94506 18.2999 4.08695 18.2368 4.21721C18.1738 4.34747 18.0845 4.4633 17.9746 4.55743L17.2291 5.30291C17.1261 5.4054 17.0029 5.48538 16.8674 5.5378C16.7318 5.59021 16.5869 5.61391 16.4417 5.6074Z"
                fill="#656565"
              />
              <path
                d="M3.82326 18.2275C3.68508 18.2283 3.5481 18.2018 3.42017 18.1495C3.29225 18.0973 3.17589 18.0203 3.07778 17.923C2.88223 17.7263 2.77246 17.4601 2.77246 17.1828C2.77246 16.9054 2.88223 16.6392 3.07778 16.4425L3.82326 15.7495C4.02413 15.5775 4.2825 15.4876 4.54675 15.4979C4.811 15.5081 5.06167 15.6176 5.24867 15.8046C5.43566 15.9916 5.54521 16.2423 5.55541 16.5065C5.56562 16.7708 5.47574 17.0291 5.30372 17.23L4.55824 17.9755C4.35449 18.1504 4.09147 18.2406 3.82326 18.2275Z"
                fill="#656565"
              />
              <path
                d="M10.4992 3.14991C10.2207 3.14991 9.95366 3.03929 9.75675 2.84238C9.55984 2.64548 9.44922 2.37841 9.44922 2.09994V1.04997C9.44922 0.771502 9.55984 0.504437 9.75675 0.307529C9.95366 0.110622 10.2207 0 10.4992 0C10.7777 0 11.0447 0.110622 11.2416 0.307529C11.4385 0.504437 11.5492 0.771502 11.5492 1.04997V2.09994C11.5492 2.37841 11.4385 2.64548 11.2416 2.84238C11.0447 3.03929 10.7777 3.14991 10.4992 3.14991Z"
                fill="#656565"
              />
              <path
                d="M10.4992 20.9995C10.2207 20.9995 9.95366 20.8889 9.75675 20.692C9.55984 20.4951 9.44922 20.228 9.44922 19.9496V18.8996C9.44922 18.6211 9.55984 18.354 9.75675 18.1571C9.95366 17.9602 10.2207 17.8496 10.4992 17.8496C10.7777 17.8496 11.0447 17.9602 11.2416 18.1571C11.4385 18.354 11.5492 18.6211 11.5492 18.8996V19.9496C11.5492 20.228 11.4385 20.4951 11.2416 20.692C11.0447 20.8889 10.7777 20.9995 10.4992 20.9995Z"
                fill="#656565"
              />
              <path
                d="M4.55715 5.60615C4.2817 5.60499 4.01774 5.49563 3.82217 5.30166L3.07669 4.55618C2.90468 4.35531 2.81479 4.09694 2.825 3.83269C2.83521 3.56844 2.94475 3.31777 3.13175 3.13077C3.31874 2.94378 3.56941 2.83423 3.83367 2.82403C4.09792 2.81382 4.35629 2.9037 4.55715 3.07572L5.30263 3.8212C5.49819 4.01792 5.60796 4.28404 5.60796 4.56142C5.60796 4.83881 5.49819 5.10493 5.30263 5.30166C5.20452 5.39897 5.08817 5.47596 4.96024 5.52821C4.83232 5.58046 4.69533 5.60695 4.55715 5.60615Z"
                fill="#656565"
              />
              <path
                d="M17.1775 18.2275C16.9021 18.2264 16.6381 18.117 16.4426 17.923L15.7496 17.1775C15.6386 16.9781 15.5957 16.7479 15.6273 16.5218C15.6589 16.2957 15.7633 16.0861 15.9247 15.9247C16.0861 15.7633 16.2957 15.6589 16.5218 15.6273C16.7479 15.5957 16.9781 15.6386 17.1775 15.7496L17.923 16.4951C18.1186 16.6918 18.2283 16.9579 18.2283 17.2353C18.2283 17.5127 18.1186 17.7788 17.923 17.9755C17.7166 18.153 17.4493 18.2433 17.1775 18.2275Z"
                fill="#656565"
              />
            </svg>
          </Button>
          <Button className={theme === "dark" ? "mv-header-change-btn" : ""}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9732 11.0881C15.4063 12.3881 14.4947 13.5209 13.3302 14.3724C12.1657 15.2239 10.7895 15.764 9.34003 15.9384C7.8906 16.1128 6.41917 15.9153 5.07395 15.3657C3.72872 14.8162 2.55719 13.934 1.67734 12.808C0.797485 11.6821 0.240382 10.3521 0.0621324 8.95208C-0.116117 7.55204 0.0907802 6.13136 0.661988 4.83311C1.2332 3.53486 2.14855 2.40489 3.31585 1.55699C4.48316 0.709095 5.86121 0.173211 7.31121 0.00330877C7.41181 -0.00829322 7.51365 0.0107856 7.60246 0.0578727C7.69126 0.10496 7.7626 0.177696 7.80646 0.265893C7.85234 0.352461 7.86859 0.450852 7.85289 0.546908C7.83718 0.642964 7.79033 0.731732 7.71906 0.800438C7.12383 1.37072 6.65301 2.05044 6.33444 2.79944C6.01587 3.54845 5.85601 4.35152 5.86431 5.16121C5.87286 6.22547 6.16672 7.26945 6.71728 8.19142C7.26783 9.11339 8.0563 9.88192 9.00585 10.4221C9.95541 10.9623 11.0337 11.2558 12.1356 11.2739C13.2375 11.292 14.3254 11.0341 15.2935 10.5254C15.3834 10.4806 15.4851 10.4629 15.5855 10.4746C15.6859 10.4863 15.7804 10.5269 15.8567 10.5911C15.9217 10.6555 15.967 10.736 15.9875 10.8237C16.0081 10.9114 16.0031 11.0029 15.9732 11.0881V11.0881Z"
                fill="#656565"
              />
            </svg>
          </Button>
        </div>
        <div
          onClick={() => setPrivate(!isPrivate)}
          className={`mv-header-changer ${
            theme === "light" ? "mv-header-changer-light" : ""
          }`}
        >
          <Button
            className={isPrivate === false ? "mv-header-change-btn-eye" : ""}
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5C0.704994 5.14567 1.77861 4.00859 3.10219 3.21445C4.42576 2.4203 5.94777 2 7.5 2C9.05223 2 10.5742 2.4203 11.8978 3.21445C13.2214 4.00859 14.295 5.14567 15 6.5C14.295 7.85433 13.2214 8.99141 11.8978 9.78555C10.5742 10.5797 9.05223 11 7.5 11C5.94777 11 4.42576 10.5797 3.10219 9.78555C1.77861 8.99141 0.704994 7.85433 0 6.5V6.5ZM7.5 9.498C8.31189 9.498 9.09052 9.18214 9.66461 8.61991C10.2387 8.05767 10.5612 7.29512 10.5612 6.5C10.5612 5.70488 10.2387 4.94233 9.66461 4.38009C9.09052 3.81786 8.31189 3.502 7.5 3.502C6.68811 3.502 5.90948 3.81786 5.33539 4.38009C4.7613 4.94233 4.43878 5.70488 4.43878 6.5C4.43878 7.29512 4.7613 8.05767 5.33539 8.61991C5.90948 9.18214 6.68811 9.498 7.5 9.498V9.498ZM7.5 7.999C7.09406 7.999 6.70474 7.84107 6.41769 7.55995C6.13065 7.27884 5.96939 6.89756 5.96939 6.5C5.96939 6.10244 6.13065 5.72116 6.41769 5.44005C6.70474 5.15893 7.09406 5.001 7.5 5.001C7.90594 5.001 8.29526 5.15893 8.58231 5.44005C8.86935 5.72116 9.03061 6.10244 9.03061 6.5C9.03061 6.89756 8.86935 7.27884 8.58231 7.55995C8.29526 7.84107 7.90594 7.999 7.5 7.999Z"
                fill="#656565"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5302 0.530217C13.8231 0.82311 13.8231 1.29798 13.5302 1.59088L2.59088 12.5302C2.29798 12.8231 1.82311 12.8231 1.53022 12.5302C1.23732 12.2373 1.23732 11.7625 1.53022 11.4696L12.4696 0.530217C12.7624 0.237324 13.2373 0.237324 13.5302 0.530217Z"
                fill="#656565"
              />
            </svg>
          </Button>
          <Button
            className={isPrivate === true ? "mv-header-change-btn-eye" : ""}
          >
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.5C0.704994 3.14567 1.77861 2.00859 3.10219 1.21445C4.42576 0.420299 5.94777 0 7.5 0C9.05223 0 10.5742 0.420299 11.8978 1.21445C13.2214 2.00859 14.295 3.14567 15 4.5C14.295 5.85433 13.2214 6.99141 11.8978 7.78555C10.5742 8.5797 9.05223 9 7.5 9C5.94777 9 4.42576 8.5797 3.10219 7.78555C1.77861 6.99141 0.704994 5.85433 0 4.5ZM7.5 7.498C8.31189 7.498 9.09052 7.18214 9.66461 6.61991C10.2387 6.05767 10.5612 5.29512 10.5612 4.5C10.5612 3.70488 10.2387 2.94233 9.66461 2.38009C9.09052 1.81786 8.31189 1.502 7.5 1.502C6.68811 1.502 5.90948 1.81786 5.33539 2.38009C4.7613 2.94233 4.43878 3.70488 4.43878 4.5C4.43878 5.29512 4.7613 6.05767 5.33539 6.61991C5.90948 7.18214 6.68811 7.498 7.5 7.498ZM7.5 5.999C7.09406 5.999 6.70474 5.84107 6.41769 5.55995C6.13065 5.27884 5.96939 4.89756 5.96939 4.5C5.96939 4.10244 6.13065 3.72116 6.41769 3.44005C6.70474 3.15893 7.09406 3.001 7.5 3.001C7.90594 3.001 8.29526 3.15893 8.58231 3.44005C8.86935 3.72116 9.03061 4.10244 9.03061 4.5C9.03061 4.89756 8.86935 5.27884 8.58231 5.55995C8.29526 5.84107 7.90594 5.999 7.5 5.999Z"
                fill="#C739EA"
              />
            </svg>
          </Button>
        </div>
        <Popover
          trigger="hover"
          placement="bottomRight"
          title=""
          content={menuContent}
        >
          <div className="header__profile active">
            <div className="img">
              <img src={profileAvatar} alt="profile" />
            </div>
            <div className="after" />
          </div>
        </Popover>
      </div>
      {/* ham */}
      <div
        onClick={() => setHamOpen(true)}
        className={`header-ham-menu ${
          theme === "light" ? "header-ham-menu-light" : ""
        }`}
      >
        <Ham />
      </div>
      <Modal
        bodyStyle={{
          top: "0",
          right: "0",
        }}
        maskStyle={{ backgroundColor: "rgb(125,125,125,.5)" }}
        width={320}
        style={{
          top: "0",
          right: "0",
          marginLeft: "0",
        }}
        closable={false}
        visible={hamOpen}
        onCancel={() => setHamOpen(false)}
      >
        <div
          className={`ham-menu-modal ${
            theme === "light" ? "ham-menu-modal-light" : ""
          }`}
        >
          <div>
            <Logo />
          </div>
          <div>
            <div
              onClick={toggleTheme}
              className={`mv-header-changer ${
                theme === "light" ? "mv-header-changer-light" : ""
              }`}
            >
              <Button
                className={theme === "light" ? "mv-header-change-btn" : ""}
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4999 15.7497C13.3993 15.7497 15.7497 13.3993 15.7497 10.4999C15.7497 7.60044 13.3993 5.25 10.4999 5.25C7.60044 5.25 5.25 7.60044 5.25 10.4999C5.25 13.3993 7.60044 15.7497 10.4999 15.7497Z"
                    fill="#656565"
                  />
                  <path
                    d="M19.9496 11.5501H18.8996C18.6211 11.5501 18.354 11.4395 18.1571 11.2426C17.9602 11.0457 17.8496 10.7786 17.8496 10.5002C17.8496 10.2217 17.9602 9.95463 18.1571 9.75773C18.354 9.56082 18.6211 9.4502 18.8996 9.4502H19.9496C20.228 9.4502 20.4951 9.56082 20.692 9.75773C20.8889 9.95463 20.9995 10.2217 20.9995 10.5002C20.9995 10.7786 20.8889 11.0457 20.692 11.2426C20.4951 11.4395 20.228 11.5501 19.9496 11.5501Z"
                    fill="#656565"
                  />
                  <path
                    d="M2.09994 11.5501H1.04997C0.771502 11.5501 0.504437 11.4395 0.307529 11.2426C0.110622 11.0457 0 10.7786 0 10.5002C0 10.2217 0.110622 9.95463 0.307529 9.75773C0.504437 9.56082 0.771502 9.4502 1.04997 9.4502H2.09994C2.37841 9.4502 2.64548 9.56082 2.84238 9.75773C3.03929 9.95463 3.14991 10.2217 3.14991 10.5002C3.14991 10.7786 3.03929 11.0457 2.84238 11.2426C2.64548 11.4395 2.37841 11.5501 2.09994 11.5501Z"
                    fill="#656565"
                  />
                  <path
                    d="M16.4417 5.6074C16.1808 5.59559 15.9338 5.48704 15.7487 5.30291C15.5531 5.10619 15.4434 4.84007 15.4434 4.56268C15.4434 4.28529 15.5531 4.01918 15.7487 3.82245L16.4942 3.07697C16.5883 2.96706 16.7041 2.87779 16.8344 2.81477C16.9646 2.75174 17.1065 2.71633 17.2511 2.71074C17.3957 2.70516 17.5399 2.72952 17.6747 2.78231C17.8094 2.8351 17.9318 2.91517 18.0341 3.01749C18.1364 3.11982 18.2165 3.24219 18.2693 3.37692C18.3221 3.51166 18.3464 3.65586 18.3409 3.80046C18.3353 3.94506 18.2999 4.08695 18.2368 4.21721C18.1738 4.34747 18.0845 4.4633 17.9746 4.55743L17.2291 5.30291C17.1261 5.4054 17.0029 5.48538 16.8674 5.5378C16.7318 5.59021 16.5869 5.61391 16.4417 5.6074Z"
                    fill="#656565"
                  />
                  <path
                    d="M3.82326 18.2275C3.68508 18.2283 3.5481 18.2018 3.42017 18.1495C3.29225 18.0973 3.17589 18.0203 3.07778 17.923C2.88223 17.7263 2.77246 17.4601 2.77246 17.1828C2.77246 16.9054 2.88223 16.6392 3.07778 16.4425L3.82326 15.7495C4.02413 15.5775 4.2825 15.4876 4.54675 15.4979C4.811 15.5081 5.06167 15.6176 5.24867 15.8046C5.43566 15.9916 5.54521 16.2423 5.55541 16.5065C5.56562 16.7708 5.47574 17.0291 5.30372 17.23L4.55824 17.9755C4.35449 18.1504 4.09147 18.2406 3.82326 18.2275Z"
                    fill="#656565"
                  />
                  <path
                    d="M10.4992 3.14991C10.2207 3.14991 9.95366 3.03929 9.75675 2.84238C9.55984 2.64548 9.44922 2.37841 9.44922 2.09994V1.04997C9.44922 0.771502 9.55984 0.504437 9.75675 0.307529C9.95366 0.110622 10.2207 0 10.4992 0C10.7777 0 11.0447 0.110622 11.2416 0.307529C11.4385 0.504437 11.5492 0.771502 11.5492 1.04997V2.09994C11.5492 2.37841 11.4385 2.64548 11.2416 2.84238C11.0447 3.03929 10.7777 3.14991 10.4992 3.14991Z"
                    fill="#656565"
                  />
                  <path
                    d="M10.4992 20.9995C10.2207 20.9995 9.95366 20.8889 9.75675 20.692C9.55984 20.4951 9.44922 20.228 9.44922 19.9496V18.8996C9.44922 18.6211 9.55984 18.354 9.75675 18.1571C9.95366 17.9602 10.2207 17.8496 10.4992 17.8496C10.7777 17.8496 11.0447 17.9602 11.2416 18.1571C11.4385 18.354 11.5492 18.6211 11.5492 18.8996V19.9496C11.5492 20.228 11.4385 20.4951 11.2416 20.692C11.0447 20.8889 10.7777 20.9995 10.4992 20.9995Z"
                    fill="#656565"
                  />
                  <path
                    d="M4.55715 5.60615C4.2817 5.60499 4.01774 5.49563 3.82217 5.30166L3.07669 4.55618C2.90468 4.35531 2.81479 4.09694 2.825 3.83269C2.83521 3.56844 2.94475 3.31777 3.13175 3.13077C3.31874 2.94378 3.56941 2.83423 3.83367 2.82403C4.09792 2.81382 4.35629 2.9037 4.55715 3.07572L5.30263 3.8212C5.49819 4.01792 5.60796 4.28404 5.60796 4.56142C5.60796 4.83881 5.49819 5.10493 5.30263 5.30166C5.20452 5.39897 5.08817 5.47596 4.96024 5.52821C4.83232 5.58046 4.69533 5.60695 4.55715 5.60615Z"
                    fill="#656565"
                  />
                  <path
                    d="M17.1775 18.2275C16.9021 18.2264 16.6381 18.117 16.4426 17.923L15.7496 17.1775C15.6386 16.9781 15.5957 16.7479 15.6273 16.5218C15.6589 16.2957 15.7633 16.0861 15.9247 15.9247C16.0861 15.7633 16.2957 15.6589 16.5218 15.6273C16.7479 15.5957 16.9781 15.6386 17.1775 15.7496L17.923 16.4951C18.1186 16.6918 18.2283 16.9579 18.2283 17.2353C18.2283 17.5127 18.1186 17.7788 17.923 17.9755C17.7166 18.153 17.4493 18.2433 17.1775 18.2275Z"
                    fill="#656565"
                  />
                </svg>
              </Button>
              <Button
                className={theme === "dark" ? "mv-header-change-btn" : ""}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9732 11.0881C15.4063 12.3881 14.4947 13.5209 13.3302 14.3724C12.1657 15.2239 10.7895 15.764 9.34003 15.9384C7.8906 16.1128 6.41917 15.9153 5.07395 15.3657C3.72872 14.8162 2.55719 13.934 1.67734 12.808C0.797485 11.6821 0.240382 10.3521 0.0621324 8.95208C-0.116117 7.55204 0.0907802 6.13136 0.661988 4.83311C1.2332 3.53486 2.14855 2.40489 3.31585 1.55699C4.48316 0.709095 5.86121 0.173211 7.31121 0.00330877C7.41181 -0.00829322 7.51365 0.0107856 7.60246 0.0578727C7.69126 0.10496 7.7626 0.177696 7.80646 0.265893C7.85234 0.352461 7.86859 0.450852 7.85289 0.546908C7.83718 0.642964 7.79033 0.731732 7.71906 0.800438C7.12383 1.37072 6.65301 2.05044 6.33444 2.79944C6.01587 3.54845 5.85601 4.35152 5.86431 5.16121C5.87286 6.22547 6.16672 7.26945 6.71728 8.19142C7.26783 9.11339 8.0563 9.88192 9.00585 10.4221C9.95541 10.9623 11.0337 11.2558 12.1356 11.2739C13.2375 11.292 14.3254 11.0341 15.2935 10.5254C15.3834 10.4806 15.4851 10.4629 15.5855 10.4746C15.6859 10.4863 15.7804 10.5269 15.8567 10.5911C15.9217 10.6555 15.967 10.736 15.9875 10.8237C16.0081 10.9114 16.0031 11.0029 15.9732 11.0881V11.0881Z"
                    fill="#656565"
                  />
                </svg>
              </Button>
            </div>
            <Link to="/" className="header__date">
              {moment().format("D \xa0| \xa0 MMM \xa0| \xa0 YYYY")}
            </Link>
            <div
              onClick={() => setPrivate(!isPrivate)}
              className={`mv-header-changer ${
                theme === "light" ? "mv-header-changer-light" : ""
              }`}
            >
              <Button
                className={
                  isPrivate === false ? "mv-header-change-btn-eye" : ""
                }
              >
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.5C0.704994 5.14567 1.77861 4.00859 3.10219 3.21445C4.42576 2.4203 5.94777 2 7.5 2C9.05223 2 10.5742 2.4203 11.8978 3.21445C13.2214 4.00859 14.295 5.14567 15 6.5C14.295 7.85433 13.2214 8.99141 11.8978 9.78555C10.5742 10.5797 9.05223 11 7.5 11C5.94777 11 4.42576 10.5797 3.10219 9.78555C1.77861 8.99141 0.704994 7.85433 0 6.5V6.5ZM7.5 9.498C8.31189 9.498 9.09052 9.18214 9.66461 8.61991C10.2387 8.05767 10.5612 7.29512 10.5612 6.5C10.5612 5.70488 10.2387 4.94233 9.66461 4.38009C9.09052 3.81786 8.31189 3.502 7.5 3.502C6.68811 3.502 5.90948 3.81786 5.33539 4.38009C4.7613 4.94233 4.43878 5.70488 4.43878 6.5C4.43878 7.29512 4.7613 8.05767 5.33539 8.61991C5.90948 9.18214 6.68811 9.498 7.5 9.498V9.498ZM7.5 7.999C7.09406 7.999 6.70474 7.84107 6.41769 7.55995C6.13065 7.27884 5.96939 6.89756 5.96939 6.5C5.96939 6.10244 6.13065 5.72116 6.41769 5.44005C6.70474 5.15893 7.09406 5.001 7.5 5.001C7.90594 5.001 8.29526 5.15893 8.58231 5.44005C8.86935 5.72116 9.03061 6.10244 9.03061 6.5C9.03061 6.89756 8.86935 7.27884 8.58231 7.55995C8.29526 7.84107 7.90594 7.999 7.5 7.999Z"
                    fill="#656565"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5302 0.530217C13.8231 0.82311 13.8231 1.29798 13.5302 1.59088L2.59088 12.5302C2.29798 12.8231 1.82311 12.8231 1.53022 12.5302C1.23732 12.2373 1.23732 11.7625 1.53022 11.4696L12.4696 0.530217C12.7624 0.237324 13.2373 0.237324 13.5302 0.530217Z"
                    fill="#656565"
                  />
                </svg>
              </Button>
              <Button
                className={isPrivate === true ? "mv-header-change-btn-eye" : ""}
              >
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.5C0.704994 3.14567 1.77861 2.00859 3.10219 1.21445C4.42576 0.420299 5.94777 0 7.5 0C9.05223 0 10.5742 0.420299 11.8978 1.21445C13.2214 2.00859 14.295 3.14567 15 4.5C14.295 5.85433 13.2214 6.99141 11.8978 7.78555C10.5742 8.5797 9.05223 9 7.5 9C5.94777 9 4.42576 8.5797 3.10219 7.78555C1.77861 6.99141 0.704994 5.85433 0 4.5ZM7.5 7.498C8.31189 7.498 9.09052 7.18214 9.66461 6.61991C10.2387 6.05767 10.5612 5.29512 10.5612 4.5C10.5612 3.70488 10.2387 2.94233 9.66461 2.38009C9.09052 1.81786 8.31189 1.502 7.5 1.502C6.68811 1.502 5.90948 1.81786 5.33539 2.38009C4.7613 2.94233 4.43878 3.70488 4.43878 4.5C4.43878 5.29512 4.7613 6.05767 5.33539 6.61991C5.90948 7.18214 6.68811 7.498 7.5 7.498ZM7.5 5.999C7.09406 5.999 6.70474 5.84107 6.41769 5.55995C6.13065 5.27884 5.96939 4.89756 5.96939 4.5C5.96939 4.10244 6.13065 3.72116 6.41769 3.44005C6.70474 3.15893 7.09406 3.001 7.5 3.001C7.90594 3.001 8.29526 3.15893 8.58231 3.44005C8.86935 3.72116 9.03061 4.10244 9.03061 4.5C9.03061 4.89756 8.86935 5.27884 8.58231 5.55995C8.29526 5.84107 7.90594 5.999 7.5 5.999Z"
                    fill="#C739EA"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/collections">Collectors</NavLink>
            <NavLink to="/creators">Creators</NavLink>
            <NavLink to="/marketplace">Marketplace</NavLink>
            <NavLink to="/mint">Mint</NavLink>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/">Setting</NavLink>
            <NavLink to="/">Connect Wallet</NavLink>
            <NavLink to="/">Sign out</NavLink>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;