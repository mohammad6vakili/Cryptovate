import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { walletConnectionController } from "./utils/walletConnectionController";

import "./styles/global.scss";
import "./styles/variables.scss";
import useLocalStorage from "use-local-storage";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import HomePage from "./pages/Home";
import ProjectsViewAll from "./pages/Projects/ViewAll";
import ProjectsLanding from "./pages/Projects/Landing";
import SelectedProject from "./pages/Projects/Selected";
import SelectedNFT from "./pages/SelectedNFT";
import ViewAll from "./pages/Collections/ViewAll";
import CollectionsLanding from "./pages/Collections/Landing";
import SelectedCollection from "./pages/Collections/Selected";
import navAvatar from "./assets/images/navAvatar.svg";
import Signup from "./pages/Auth/Signup";
import Roadmap from "./pages/Roadmap/Roadmap";
import Creators from "./pages/Creators/Creators";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Info from "./pages/Info/Info";
import ApplyCreator from "./pages/ApplyCreator/ApplyCreator";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import Mint from "./pages/Mint/Mint";
import Sell from "./pages/Sell/Sell";

const dummyProfile = navAvatar;

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const web3react = useWeb3React();
  const walletconnection = new walletConnectionController(web3react);

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const initWallet = async () => {
      await walletconnection.intialize()
    }
    initWallet()
  }, [])


  return (
    <div className="App" data-theme={theme}>
      <Header
        theme={theme}
        profileImg={dummyProfile}
        toggleTheme={switchTheme}
      />
      <Routes>
        <Route path="/" element={<Landing theme={theme} />} />
        <Route path="/signup" element={<Signup theme={theme} />} />
        <Route path="/profile" element={<Profile theme={theme} />} />
        <Route path="/creators/apply" element={<ApplyCreator theme={theme} />} />
        <Route path="/road-map" element={<Roadmap theme={theme} />} />
        <Route path="/creators" element={<Creators theme={theme} />} />
        <Route path="/marketplace" element={<MarketPlace theme={theme} />} />
        <Route path="/info" element={<Info theme={theme} />} />
        <Route path="/home" element={<HomePage theme={theme} />} />
        <Route path="/mint" element={<Mint theme={theme} />} />
        <Route path="/sell" element={<Sell theme={theme} />} />
        <Route path="/projects" element={<ProjectsLanding theme={theme} />} />
        <Route path="/profile/edit" element={<EditProfile theme={theme} />} />
        <Route
          path="/projects/viewAll"
          element={<ProjectsViewAll theme={theme} />}
        />
        <Route
          path="/projects/selected"
          element={<SelectedProject theme={theme} />}
        />
        <Route
          path="/selectedNFT/:type"
          element={<SelectedNFT theme={theme} />}
        />
        <Route
          path="/collections"
          element={<CollectionsLanding theme={theme} />}
        />
        <Route
          path="/collections/viewAll"
          element={<ViewAll theme={theme} />}
        />
        <Route
          path="/collections/selected"
          element={<SelectedCollection theme={theme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
