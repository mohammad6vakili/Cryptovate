import react, { useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./Signup.css";
import circleBg from "./Assets/circle-vector.svg";
import { Input, Button, message } from "antd";
import { Option, Select } from "../../components/Select";
import { useNavigate } from "react-router";
import Poster from "../../assets/images/poster.jpeg";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import rightArrow from "./Assets/right-arrow.svg";
import profileImage from "./Assets/profile.png";
import { generateKeyRandom } from "../../utils/RandomKeygenerator";
import { authentication } from "../../services/firebase";
const { TextArea } = Input;

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const Signup = ({ theme }: { theme: string }) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const key = generateKeyRandom(7);
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const checkCatcha = () => {
    const captcha_input = (
      document.getElementById("captcha_input") as HTMLInputElement
    ).value;
    if (captcha_input == key) {
      generateRecapthca();
      signin();
      setStep(1);
    } else {
      alert("Captcha not valid");
    }
  };

  const generateRecapthca = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      authentication
    );
  };

  // Sent OTP
  const signin = () => {
    let verfiy = window.recaptchaVerifier;
    const number = (document.getElementById("phoneNumber") as HTMLInputElement)
      .value;

    signInWithPhoneNumber(authentication, number, verfiy)
      .then((result: any) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err: any) => {
        console.log(err);
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    // final.confirm(otp).then((result: any) => {
    //     // success
    // }).catch((err: any) => {
    //     alert("Wrong code");
    // })
  };

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <div
        className={`mv-page-search ${
          theme === "dark" && "mv-page-search-dark"
        }`}
      >
        <Input placeholder="Search" />
      </div>
      <div className="mv-page-title text-colorfull">
        {step === 0 && "Welcome"}
        {step === 1 && "Thank you for Verifying"}
        {step === 2 && "Creator your Custom Profile Below"}
      </div>
      <div className="mv-signup-video-wrapper">
        <img src={circleBg} alt="bg" />
        <img src={leftBg} alt="bg" />
        <img src={rightBg} alt="bg" />
        <video
          controls
          className="avatar-project-video"
          src={"https://www.w3schools.com/html/mov_bbb.mp4"}
          poster={Poster}
        ></video>
      </div>
      {step === 0 && (
        <form
          className={`signup-form ${theme === "dark" && "signup-form-dark"}`}
        >
          <div>
            <span>Name:</span>
            <Input />
          </div>
          <div>
            <span>Phone Number:</span>
            <Input id="phoneNumber" />
          </div>
          {/* <div>
                        <span>Email:</span>
                        <Input />
                    </div> */}
          <div>
            <span>Password:</span>
            <Input />
          </div>
          <div>
            <span>Password Confirm:</span>
            <Input />
          </div>
          <div
            className={`signup-form-auth ${
              theme === "dark" && "form-auth-dark"
            }`}
          >
            <span>Please enter a security code to continue</span>
            <div>
              <Input id="keygenerator" disabled value={key} />
              <img src={rightArrow} alt="arrow" />
              <Input id="captcha_input" />
            </div>
          </div>
          <Button onClick={(e) => checkCatcha()}>Submit</Button>
        </form>
      )}
      {step === 1 && (
        <div className="signup-step-two-btns">
          <Button>
            <span style={{ zIndex: "9999999999999", position: "absolute" }}>
              Meta Mask
            </span>
          </Button>
          <Button onClick={() => setStep(2)}>
            Create Profile
            <span
              style={{
                zIndex: "9999999999999",
                position: "absolute",
                left: "-110px",
                color: "#c739ea",
              }}
            >
              Meta Mask
            </span>
          </Button>
        </div>
      )}
      {step === 2 && (
        <div className="signup-create-profile">
          <div>
            <span>Profile Elements to set</span>
            <Button>Preview</Button>
            <span
              style={{
                position: "absolute",
                right: "90px",
                cursor: "pointer",
                color: "#c739ea",
                zIndex: "99999999",
              }}
            >
              Preview
            </span>
          </div>
          <div>
            <div>
              <div>
                <span className={theme === "light" ? "text-light-signup" : ""}>
                  Profile Name:
                </span>
                <div>
                  <Input />
                  <Button>Apply</Button>
                </div>
              </div>
              <div>
                <span className={theme === "light" ? "text-light-signup" : ""}>
                  Edit Banner:
                </span>
                <div>
                  <Select>
                    <Option value="1">item 1</Option>
                    <Option value="1">item 1</Option>
                    <Option value="1">item 1</Option>
                    <Option value="1">item 1</Option>
                  </Select>
                  <Button>Apply</Button>
                </div>
              </div>
              <div>
                <span className={theme === "light" ? "text-light-signup" : ""}>
                  Profile Border Color:
                </span>
                <div>
                  <Select defaultValue="#C739EA">
                    <Option value="#C739EA">#C739EA</Option>
                    <Option value="#C739EA">#C739EA</Option>
                    <Option value="#C739EA">#C739EA</Option>
                    <Option value="#C739EA">#C739EA</Option>
                  </Select>
                  <Button>Apply</Button>
                </div>
              </div>
              <div style={{ marginBottom: "5px" }}>
                {/* <Select  placeholder="Select Which NFT to use ">
                                    <Option value="item 1">item 1</Option>
                                    <Option value="item 1">item 1</Option>
                                    <Option value="item 1">item 1</Option>
                                    <Option value="item 1">item 1</Option>
                                </Select> */}
                <span className={theme === "light" ? "text-light-signup" : ""}>
                  Profile Picture:
                </span>
                <div>
                  <Select defaultValue="#David jobs 3256478">
                    <Option value="#David jobs 3256478">
                      #David jobs 3256478
                    </Option>
                    <Option value="#David jobs 3256478">
                      #David jobs 3256478
                    </Option>
                    <Option value="#David jobs 3256478">
                      #David jobs 3256478
                    </Option>
                    <Option value="#David jobs 3256478">
                      #David jobs 3256478
                    </Option>
                  </Select>
                  <Button>Apply</Button>
                </div>
              </div>
              <a
                href="#"
                style={{ color: "#C739EA", textDecoration: "underline" }}
              >
                Crop/Arrange Pic
              </a>
              <div style={{ marginTop: "20px" }}>
                <span className={theme === "light" ? "text-light-signup" : ""}>
                  Bio:
                </span>
                <div>
                  <TextArea
                    autoSize
                    placeholder="Enter your Bio or write a short story poem."
                  />
                  <Button>Apply</Button>
                </div>
              </div>
              <Button
                onClick={() => navigate("/home")}
                className="signup-profile-save-changes"
              >
                Save Changes
              </Button>
            </div>
            <div>
              <div>
                <img src={profileImage} alt="profile" />
                <div>George Karatasha</div>
                <div className={theme === "light" ? "text-light-signup" : ""}>
                  A non-fungible token is a non-interchangeable unit of data
                  stored on a blockchain, a form of digital ledger, that can be
                  sold and traded. Types of NFT data units may be associated
                  with digital files such as photos, videos, and audio A
                  non-fungible token is a non-interchangeable unit of data
                  stored on a blockchain, a form of digital ledger, that can be
                  sold and traded. Types of NFT data units may be associated
                  with digital files such as photos, videos, and audioA
                  non-fungible token is a non-interchangeable unit of data
                  stored on a blockchain, a form of digital ledger,
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Signup;
