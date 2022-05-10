import React from "react";
import { IProfileProps } from "./types";
import "../../styles/variables.scss";
import "../../styles/global.scss";
import "./style.scss";
import kos from '../../assets/images/kos.svg'
import Typography from '../Typography'

const Profile: React.FC<IProfileProps> = ({
  label,
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <div className={"Profile" + ` ${className}`}>
      <img src={kos} alt="profile"/>
      <h5>Owned by</h5>
      <Typography type="heading2" label="Rihana Martin"/>
    </div>
  );
};

export default Profile;
