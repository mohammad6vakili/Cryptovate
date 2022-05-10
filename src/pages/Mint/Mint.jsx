import react, { useState, useEffect } from "react";
import "./Mint.css";
import {
  Input,
  Button,
  Select,
  Switch,
  Modal,
  Calendar,
  TimePicker,
} from "antd";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import ethIcon from "./Assets/eth.svg";
import { walletConnectionController } from "../../utils/walletConnectionController";
import { useWeb3React } from "@web3-react/core";
import moment from "moment";
import { toast } from "react-toastify";
import Lottie from "react-lottie-player";
import successWhite from "../../assets/videos/success-white.json";
import successBlack from "../../assets/videos/success-black.json";
const { Option } = Select;
const { TextArea } = Input;

const Mint = ({ theme }) => {
  const data = [1, 2, 3, 4];
  const [tab, setTab] = useState(0);
  const [errorStyles, setErrorStyles] = useState(true);
  // web3 states--------------------------------
  const web3react = useWeb3React();
  const connected = web3react.active;
  const account = web3react.account;

  // basic states--------------------------------
  const [uploadRef, setUploadRef] = useState(null);
  const [collectionUploadRef, setCollectionUploadRef] = useState(null);
  const [imageList, setImageList] = useState("");
  const [collectionImageList, setCollectionImageList] = useState("");

  // controller states---------------------------
  const [putOnMarketPlace, setPutOnMarketPlace] = useState(true);
  const [unlock, setUnlock] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [freeMint, setFreeMint] = useState(false);
  const [advance, setAdvance] = useState(false);
  const [collectionModal, setCollectionModal] = useState(false);
  const [startPicker, setStartPicker] = useState(false);
  const [endPicker, setEndPicker] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // loadings and progresses states--------------------------------
  const [mintLoading, setMintLoading] = useState(false);
  const [mintProgress, setMintProgress] = useState({
    title: "",
    percent: 0,
  });
  const [collectionLoading, setCollectionLoading] = useState(false);
  const [collectionProgress, setCollectionProgress] = useState({
    title: "",
    percent: 0,
  });

  // loadings and progresses states--------------------------------
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedTimeStart, setSelectedTimeStart] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // form data and validation states-------------
  const [addCollectionValidList, setAddCollectionValidList] = useState({
    file: {
      error: false,
    },
    name: {
      error: false,
    },
    symbol: {
      error: false,
    },
    desc: {
      error: false,
    },
  });

  const [addCollectionData, setAddCollectionData] = useState({
    fileList: [],
    name: "",
    symbol: "",
    desc: "",
  });

  const [validList, setValidList] = useState({
    file: {
      error: false,
    },
    price: {
      error: false,
    },
    royality: {
      error: false,
      warning: false,
    },
    start: {
      error: false,
    },
    end: {
      error: false,
    },
  });

  const [mintData, setMintData] = useState({
    fileList: [],
    putOnMarketPlace: putOnMarketPlace,
    name: "",
    desc: "",
    price: "",
    royality: "",
    start: "",
    end: "",
  });

  // validations functions-----------------------------------
  const royalityValidation = (index) => {
    console.log(parseFloat(index));
    if (
      index.length === 0 ||
      parseFloat(index) === 0 ||
      parseFloat(index) > 99
    ) {
      validList.royality.error = true;
      validList.royality.warning = false;
    } else {
      validList.royality.error = false;
    }
    if (parseFloat(index) > 10 && parseFloat(index) < 90) {
      validList.royality.warning = true;
      validList.royality.error = false;
    } else {
      validList.royality.warning = false;
    }
  };

  const startValidation = () => {
    if (putOnMarketPlace === true) {
      if (tab === 0) {
        if (mintData.start.length === 0) {
          validList.start.error = true;
        } else if (mintData.start === 0) {
          validList.start.error = true;
        } else {
          validList.start.error = false;
        }
      } else {
        validList.start.error = false;
      }
    }
  };

  const endValidation = () => {
    if (putOnMarketPlace === true) {
      if (tab === 0) {
        if (mintData.end.length === 0) {
          validList.end.error = true;
        } else if (mintData.end === 0) {
          validList.end.error = true;
        } else {
          validList.end.error = false;
        }
      } else {
        validList.end.error = false;
      }
    }
  };

  // functions-----------------------------------
  const addCollectionValidChecker = () => {
    console.log("collection validation checker !");
    // file validation
    if (addCollectionData.fileList.length === 0) {
      addCollectionValidList.file.error = true;
    } else {
      addCollectionValidList.file.error = false;
    }
    // name validation
    if (addCollectionData.name.length === 0) {
      addCollectionValidList.name.error = true;
    } else {
      addCollectionValidList.name.error = false;
    }
    // symbol validation
    if (addCollectionData.symbol.length === 0) {
      addCollectionValidList.symbol.error = true;
    } else {
      addCollectionValidList.symbol.error = false;
    }
    // desc validation
    if (addCollectionData.desc.length === 0) {
      addCollectionValidList.desc.error = true;
    } else {
      addCollectionValidList.desc.error = false;
    }
  };

  const submitAddCollection = () => {
    const array = [];
    setErrorStyles(false);
    addCollectionValidChecker();
    Object.values(addCollectionValidList).forEach((fields) => {
      array.push(fields.error);
    });
    if (array.indexOf(true) !== -1) {
      console.log(validList);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCollectionLoading(true);
      setCollectionProgress({
        note: "Start Creating...",
        status: 25,
      });
      setTimeout(() => {
        setCollectionProgress({
          note: "Still Working on it...",
          status: 40,
        });
      }, 1500);
      setTimeout(() => {
        setCollectionProgress({
          note: "Done...",
          status: 100,
        });
      }, 3000);
      setTimeout(() => {
        setCollectionModal(false);
        toast.success("Successfully Created!", { position: "bottom-right" });
      }, 3500);
    }
  };

  const uploadCollection = async (e) => {
    let list = [];
    const base64 = await converter(e.target.files[0]);
    setCollectionImageList(base64);
    setAddCollectionData({
      ...addCollectionData,
      fileList: base64.split(",")[1],
    });
  };

  const upload = async (e) => {
    let list = [];
    const base64 = await converter(e.target.files[0]);
    setImageList(base64);
    setMintData({ ...mintData, fileList: base64.split(",")[1] });
  };

  const converter = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const submitMint = () => {
    setMintProgress({ note: "Start Minting...", status: 25 });
    setMintLoading(true);
    setTimeout(() => {
      setMintProgress({ note: "Working on it...", status: 60 });
    }, 1000);
    setTimeout(() => {
      setMintProgress({ note: "Almost done...", status: 90 });
    }, 2500);
    setTimeout(() => {
      setMintProgress({ note: "Done...", status: 100 });
      setSuccessModal(true);
    }, 3500);
  };

  // time and date functions---------------------
  const startDateChange = (value) => {
    setSelectedDateStart(value.format("YYYY-MM-DD"));
  };

  const startTimeChange = (value) => {
    setSelectedTimeStart(moment(value).format("HH:mm"));
  };

  const submitStartPickerHandler = () => {
    const now = moment(`${selectedDateStart} ${selectedTimeStart}`).format();
    setMintData({
      ...mintData,
      start: now,
    });
    setStart(now);
    setStartPicker(false);
  };

  const endDateChange = (value) => {
    setSelectedDateEnd(value.format("YYYY-MM-DD"));
  };

  const endTimeChange = (value) => {
    setSelectedTimeEnd(moment(value).format("HH:mm"));
  };

  const submitEndPickerHandler = () => {
    const now = moment(`${selectedDateEnd} ${selectedTimeEnd}`).format();
    setMintData({
      ...mintData,
      end: now,
    });
    setEnd(now);
    setEndPicker(false);
  };

  // use Effects---------------------------------
  useEffect(() => {
    if (errorStyles === false) {
      setErrorStyles(true);
    }
  }, [errorStyles]);

  useEffect(() => {
    if (startPicker === true) {
      setSelectedDateStart(moment().format("YYYY-MM-DD"));
      setSelectedTimeStart(moment().format("HH:mm"));
    }
  }, [startPicker]);

  useEffect(() => {
    if (endPicker === true) {
      setSelectedDateEnd(moment().format("YYYY-MM-DD"));
      setSelectedTimeEnd(moment().format("HH:mm"));
    }
  }, [endPicker]);

  useEffect(() => {
    const now = moment().format();
    if (mintData.start === "-1") {
      setMintData({
        ...mintData,
        start: now,
      });
      setStartPicker(true);
      setStart(now);
    } else {
      setStart(mintData.start);
    }
  }, [mintData.start]);

  useEffect(() => {
    const now = moment().format();
    if (mintData.end === "-1") {
      setMintData({
        ...mintData,
        end: now,
      });
      setEndPicker(true);
      setEnd(now);
    } else {
      setEnd(mintData.end);
    }
  }, [mintData.end]);

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <img className="left-blur-bg" src={leftBg} alt="bg" />
      <img className="right-blur-bg" src={rightBg} alt="bg" />
      {/* success modal */}
      <Modal
        visible={successModal}
        closable={false}
        className="mv-mint-add-collection-modal-body mv-success-modal-body"
        style={{
          padding: "0",
          top: "7vh",
          backgroundColor: "transparent",
        }}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        onCancel={() => setSuccessModal(false)}
      >
        <div
          className={`mv-mint-collection-modal mv-success-modal ${
            theme === "light"
              ? "mv-mint-collection-modal-light mv-success-modal-light"
              : ""
          }`}
        >
          {/* lottie animation */}
          {theme === "light" ? (
            <Lottie
              loop
              animationData={successWhite}
              play
              style={{ width: "160%", height: 250 }}
            />
          ) : (
            <Lottie
              loop
              animationData={successBlack}
              play
              style={{ width: "160%", height: 250 }}
            />
          )}
          {/* nft image */}
          <img src={imageList} alt="nft" />
          {/* nft desc */}
          <div>
            Your <span>{mintData.name}</span> NFT is successfully created. It
            will be minted in blockchain while purchasing or transferring
          </div>
          {/* actions */}
          <Button
            className="btn-colorfull"
            onClick={() => setSuccessModal(false)}
          >
            View NFT
          </Button>
          <Button onClick={() => setSuccessModal(false)}>Create another</Button>
        </div>
        <div
          className={`mv-close-modal-button ${
            theme === "light" ? "mv-close-modal-button-light" : ""
          }`}
          onClick={() => setSuccessModal(false)}
        >
          ✕
        </div>
      </Modal>
      {/* add Collection modal */}
      <Modal
        width={360}
        style={{ top: "10vh" }}
        closable={false}
        visible={collectionModal}
        onCancel={() => setCollectionModal(false)}
      >
        <div
          className={`mv-mint-collection-modal ${
            theme === "light" ? "mv-mint-collection-modal-light" : ""
          }`}
        >
          <div>Add a new collection</div>
          {/* file upload */}
          <div>
            <div>
              <div>
                We recommend an image of at least 300x300. Gifs work too. Max
                5mb.
              </div>
              <input
                onChange={uploadCollection}
                type="file"
                name="filefield"
                style={{ display: "none" }}
                ref={(fileInput) => setCollectionUploadRef(fileInput)}
              />
              <Button
                className="btn-colorfull"
                onClick={() => collectionUploadRef.click()}
              >
                <span>Choose file</span>
              </Button>
            </div>
            <div>
              {collectionImageList.length === 0 ? (
                <div
                  id={
                    errorStyles && addCollectionValidList.file.error
                      ? "mv-error-border-red"
                      : ""
                  }
                >
                  <span style={{ display: "none" }}>no image yet</span>
                </div>
              ) : (
                <div>
                  <img src={collectionImageList} alt="uploaded" />
                </div>
              )}
            </div>
          </div>
          {/* name */}
          <div>
            <div>
              <span>Display name (required)</span>
            </div>
            <Input
              id={
                errorStyles && addCollectionValidList.name.error
                  ? "mv-error-border-red"
                  : ""
              }
              onChange={(e) =>
                setAddCollectionData({
                  ...addCollectionData,
                  name: e.target.value,
                })
              }
              placeholder="Enter Collection Name"
            />
          </div>
          {/* symbol */}
          <div>
            <div>
              <span>Symbol (required)</span>
            </div>
            <Input
              id={
                errorStyles && addCollectionValidList.symbol.error
                  ? "mv-error-border-red"
                  : ""
              }
              onChange={(e) =>
                setAddCollectionData({
                  ...addCollectionData,
                  symbol: e.target.value,
                })
              }
              placeholder="Enter token symbo"
            />
          </div>
          {/* description */}
          <div>
            <div>
              <span>Description (optional)</span>
            </div>
            <TextArea
              id={
                errorStyles && addCollectionValidList.desc.error
                  ? "mv-error-border-red"
                  : ""
              }
              onChange={(e) =>
                setAddCollectionData({
                  ...addCollectionData,
                  desc: e.target.value,
                })
              }
              placeholder="Spread some words about your token collection"
            />
          </div>
          {/* submit button */}
          <Button
            className="btn-colorfull"
            disabled={collectionLoading}
            onClick={submitAddCollection}
          >
            <span>
              {collectionLoading === true
                ? "+ Creating..."
                : "Create Collection"}
            </span>
          </Button>
          {/* submit loading */}
          {collectionLoading && (
            <div className="mv-progress-bar">
              <div>{collectionProgress.note}</div>
              <div>
                <div style={{ width: `${collectionProgress.status}%` }} />
              </div>
            </div>
          )}
          {/* modal close button */}
          <div
            className={`mv-close-modal-button ${
              theme === "light" ? "mv-close-modal-button-light" : ""
            }`}
            onClick={() => setCollectionModal(false)}
          >
            ✕
          </div>
        </div>
      </Modal>
      {/* start picker modal*/}
      <Modal
        width={360}
        style={{ top: "10vh" }}
        closable={false}
        visible={startPicker}
        onCancel={() => setStartPicker(false)}
      >
        <div
          className={`mv-mint-picker-modal ${
            theme === "light" ? "mv-mint-picker-modal-light" : ""
          }`}
        >
          <div>
            <Calendar fullscreen={false} onChange={startDateChange} />
          </div>
          <div>
            <TimePicker defaultValue={moment()} onChange={startTimeChange} />
          </div>
          <Button className="btn-colorfull" onClick={submitStartPickerHandler}>
            Apply
          </Button>
        </div>
      </Modal>
      {/* end picker modal*/}
      <Modal
        width={360}
        style={{ top: "10vh" }}
        closable={false}
        visible={endPicker}
        onCancel={() => setEndPicker(false)}
      >
        <div
          className={`mv-mint-picker-modal ${
            theme === "light" ? "mv-mint-picker-modal-light" : ""
          }`}
        >
          <div>
            <Calendar fullscreen={false} onChange={endDateChange} />
          </div>
          <div>
            <TimePicker defaultValue={moment()} onChange={endTimeChange} />
          </div>
          <Button className="btn-colorfull" onClick={submitEndPickerHandler}>
            Apply
          </Button>
        </div>
      </Modal>
      {connected ? (
        // connected view
        <div className={`mv-mint ${theme === "light" ? "mv-mint-light" : ""}`}>
          <div
            className={`mv-page-search ${
              theme === "light" ? "mv-page-search-light" : ""
            }`}
          >
            <Input placeholder="Search" />
          </div>
          <div className="mv-mint-title">Create single item on Ethereum</div>
          <div
            className={`mv-page-body ${
              theme === "light" ? "mv-page-body-light" : ""
            }`}
          >
            <div>
              {/* choose wallet */}
              <div>
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                >
                  <div>Choose wallet</div>
                  <div>
                    <div className="mv-mint-choose-wallet">
                      <img
                        className="mv-mint-option-icon"
                        src={ethIcon}
                        alt="eth"
                      />
                      <div>
                        <span>odkjhvkxbvknlx.mv;</span>
                        <span>Ethereum</span>
                      </div>
                      <div>Connected</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* upload file */}
              <div
                className={`mv-mint-field ${
                  theme === "light" ? "mv-mint-field-light" : ""
                }`}
              >
                <div>Upload file</div>
                <div id="mv-mint-field-upload-box">
                  <span>
                    PNG, GIF, WEBP, MP4 or MP3.
                    <br /> Max 100mb.
                  </span>
                  <Button
                    onClick={() => uploadRef.click()}
                    className="btn-colorfull"
                  >
                    Choose File
                  </Button>
                </div>
              </div>
              <input
                onChange={upload}
                type="file"
                name="filefield"
                style={{ display: "none" }}
                ref={(fileInput) => setUploadRef(fileInput)}
              />
              {/* put on marketplace */}
              <div
                className={`mv-mint-field-desc ${
                  theme === "light" ? "mv-mint-field-desc-light" : ""
                }`}
              >
                <div>
                  <div>Put on marketplace</div>
                  <Switch
                    checked={putOnMarketPlace}
                    onChange={(val) => setPutOnMarketPlace(val)}
                  />
                </div>
                <div>Set a period of time for which buyers can place bids</div>
                <div>
                  <Button
                    onClick={() => setTab(0)}
                    id={tab === 0 ? "desc-filed-tab-selected" : ""}
                  >
                    Fixed Price
                  </Button>
                  {putOnMarketPlace && (
                    <Button
                      onClick={() => setTab(1)}
                      id={tab === 1 ? "desc-filed-tab-selected" : ""}
                    >
                      Open for Bids
                    </Button>
                  )}
                  {putOnMarketPlace && (
                    <Button
                      onClick={() => setTab(2)}
                      id={tab === 2 ? "desc-filed-tab-selected" : ""}
                    >
                      Timed Auction
                    </Button>
                  )}
                </div>
              </div>
              {/* price wallet */}
              {tab === 2 && putOnMarketPlace && (
                <div>
                  <div
                    className={`mv-mint-field ${
                      theme === "light" ? "mv-mint-field-light" : ""
                    }`}
                  >
                    <div>Price</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Input
                        className={`mv-mint-price-input ${
                          theme === "light" ? "mv-mint-price-input-light" : ""
                        }`}
                        onChange={(e) =>
                          setMintData({ ...mintData, price: e.target.value })
                        }
                        id="mv-mint-no-border"
                        placeholder="Enter Price for one piece"
                      />
                      <Select
                        defaultValue={"1"}
                        dropdownClassName="mv-option"
                        className="mv-select"
                        style={{
                          width: "25%",
                          maxWidth: "100px",
                          borderRadius: "0 20px 20px 0",
                          color: "white",
                        }}
                      >
                        <Option value="1">ETH</Option>
                        <Option value="2">BTC</Option>
                        <Option value="3">TTR</Option>
                      </Select>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      Service fee 2.5%
                      <br />
                      You will receive{" "}
                      {parseFloat(
                        mintData.price - (mintData.price / 100) * 2.5
                      )}{" "}
                      ETH
                    </div>
                  </div>
                </div>
              )}
              {/* start time */}
              {tab === 2 && putOnMarketPlace === true && (
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                  id={
                    errorStyles && validList.start.error === true
                      ? "mv-error-border-red-select"
                      : ""
                  }
                >
                  <div>Starting Bid</div>
                  <Select
                    value={
                      start.length > 0 && start !== "Right after listing"
                        ? moment(start).format("DD/MM/YYYY HH:mm")
                        : start
                    }
                    onChange={(value) =>
                      setMintData({ ...mintData, start: value })
                    }
                    className={`mv-mint-field-select-box ${
                      theme === "light" ? "mv-mint-field-select-box-light" : ""
                    }`}
                  >
                    <Option value="Right after listing">
                      Right after listing
                    </Option>
                    <Option value="-1">Pick specific date</Option>
                  </Select>
                </div>
              )}
              {/* end time */}
              {tab === 2 && putOnMarketPlace === true && (
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                  id={
                    errorStyles && validList.end.error === true
                      ? "mv-error-border-red-select"
                      : ""
                  }
                >
                  <div>Expire Bid</div>
                  <Select
                    value={
                      end.length > 0 &&
                      end !== "1" &&
                      end !== "3" &&
                      end !== "5" &&
                      end !== "7"
                        ? moment(end).format("DD/MM/YYYY HH:mm")
                        : end
                    }
                    onChange={(value) =>
                      setMintData({ ...mintData, end: value })
                    }
                    className={`mv-mint-field-select-box ${
                      theme === "light" ? "mv-mint-field-select-box-light" : ""
                    }`}
                  >
                    <Option value="1">1 Day</Option>
                    <Option value="3">3 Day</Option>
                    <Option value="5">5 Day</Option>
                    <Option value="7">7 Day</Option>
                    <Option value="-1">Pick specific date</Option>
                  </Select>
                </div>
              )}
              {/* unlock */}
              <div
                className={`mv-mint-field-desc ${
                  theme === "light" ? "mv-mint-field-desc-light" : ""
                }`}
              >
                <div>
                  <div>Unlock once purchased</div>
                  <Switch onChange={(val) => setUnlock(val)} checked={unlock} />
                </div>
                <div>Content will be unlocked after successful transaction</div>
              </div>
              {/* unlock input */}
              {unlock && (
                <div style={{ marginTop: "-10px" }}>
                  <div
                    className={`mv-mint-field ${
                      theme === "light" ? "mv-mint-field-light" : ""
                    }`}
                  >
                    <div></div>
                    <Input placeholder="Digital Key, code to redeem or link to a file..." />
                    <div>Markdown is supported</div>
                  </div>
                </div>
              )}
              {/* Collection */}
              <div
                className={`mv-mint-collection ${
                  theme === "light" ? "mv-mint-collection-light" : ""
                }`}
              >
                <div>Choose collection</div>
                <div className="mv-mint-collections">
                  <Button onClick={() => setCollectionModal(true)}>
                    + Create
                  </Button>
                </div>
              </div>
              {/* minting */}
              <div
                className={`mv-mint-field-desc ${
                  theme === "light" ? "mv-mint-field-desc-light" : ""
                }`}
              >
                <div>
                  <div>Free minting</div>
                  <Switch />
                </div>
                <div>Buyer will pay gas fees for minting</div>
              </div>
              {/* name */}
              <div>
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                >
                  <div>Name</div>
                  <Input
                    value={mintData.name}
                    onChange={(e) =>
                      setMintData({ ...mintData, name: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* Description (Optional) */}
              <div>
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                >
                  <div>
                    Description{" "}
                    <small style={{ color: "gray" }}>(Optional)</small>
                  </div>
                  <Input
                    value={mintData.desc}
                    onChange={(e) =>
                      setMintData({ ...mintData, desc: e.target.value })
                    }
                  />
                  <span>With preserved line-breaks</span>
                </div>
              </div>
              {/* Royalties */}
              <div>
                <div
                  className={`mv-mint-field ${
                    theme === "light" ? "mv-mint-field-light" : ""
                  }`}
                >
                  <div>Royalties</div>
                  <Input
                    onClick={() => console.log(validList, mintData.royality)}
                    value={mintData.royality}
                    onChange={(e) => {
                      royalityValidation(e.target.value);
                      setMintData({ ...mintData, royality: e.target.value });
                    }}
                    id={`${
                      validList.royality.error === true &&
                      validList.royality.warning === false
                        ? "mv-error-border-red"
                        : ""
                    }${
                      validList.royality.error === false &&
                      validList.royality.warning === true
                        ? "mv-error-border-warning"
                        : ""
                    }`}
                  />
                  <span>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</span>
                  <span className="mv-mint-input-suffix">%</span>
                </div>
              </div>
              {/* setting */}
              <div
                className={`mv-mint-field-desc ${
                  theme === "light" ? "mv-mint-field-desc-light" : ""
                }`}
              >
                <div>
                  <div>Advanced Setting</div>
                  <Switch
                    checked={advance}
                    onChange={(val) => setAdvance(val)}
                  />
                </div>
              </div>
              {/* Properties (Optional) */}
              {advance && (
                <div>
                  <div
                    className={`mv-mint-field ${
                      theme === "light" ? "mv-mint-field-light" : ""
                    }`}
                  >
                    <div>
                      Properties{" "}
                      <small style={{ color: "gray" }}>(Optional)</small>
                    </div>
                    <div id="mv-mint-flex-input-wrapper">
                      <Input placeholder="e.g. Size" />
                      <Input placeholder="e.g. M" />
                    </div>
                  </div>
                </div>
              )}
              {/* Alternative text for NFT (Optional) */}
              {advance && (
                <div>
                  <div
                    className={`mv-mint-field ${
                      theme === "light" ? "mv-mint-field-light" : ""
                    }`}
                  >
                    <div>
                      Alternative text for NFT
                      <small style={{ color: "gray" }}>(Optional)</small>
                    </div>
                    <Input />
                    <span>
                      Text that will be used in VoiceOver for people with
                      disabilities
                    </span>
                  </div>
                </div>
              )}
              {/* submit wrapper */}
              <div
                className={`mv-mint-submit ${
                  theme === "light" ? "mv-mint-submit-light" : ""
                }`}
              >
                <Button
                  onClick={submitMint}
                  disabled={mintLoading}
                  style={mintLoading ? { opacity: ".4" } : { opacity: "1" }}
                  className="btn-colorfull"
                >
                  Create Item
                </Button>
                <span>Unsaved changes</span>
              </div>
            </div>
            {/* upload section */}
            <div>
              <div>Preview</div>
              <div style={{ position: "relative" }}>
                {imageList.length === 0 ? (
                  <div style={{ padding: "0 50px" }}>
                    Upload file to preview your brand new NFT
                  </div>
                ) : (
                  <img src={imageList} alt="uploaded" />
                )}
                {mintData.fileList.length > 0 && (
                  <div
                    onClick={() => {
                      setImageList("");
                      setMintData({ ...mintData, fileList: [] });
                    }}
                    className={`mv-mint-upload-remove ${
                      theme === "light" ? "mv-mint-upload-remove-light" : ""
                    }`}
                  >
                    ✕
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* submit loading */}
          {mintLoading && (
            <div style={{ marginTop: "40px" }} className="mv-progress-bar">
              <div>{mintProgress.note}</div>
              <div>
                <div style={{ width: `${mintProgress.status}%` }} />
              </div>
            </div>
          )}
        </div>
      ) : (
        // not connected view
        <div
          className={`mv-mint-not-connected ${
            theme === "light" ? "mv-mint-not-connected-light" : ""
          }`}
        >
          <span className="text-colorfull">
            Please connect your wallet to mint NFT
          </span>
          <Button className="btn-colorfull">
            <span>Connect Wallet</span>
          </Button>
        </div>
      )}
    </div>
  );
};
export default Mint;
