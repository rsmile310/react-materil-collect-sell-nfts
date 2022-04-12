import { useState } from "react";
import { useEffect } from "react";

// Material UI
import { ThemeProvider } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";

// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Modules
import ArtCardDetails from "./components/ArtCardDetails/ArtCardDetails";
import Layout from "./components/Layout/Layout";
import useCustomTheme from "./hooks/useCustomTheme";
import Auction from "./Pages/Auction/Auction";
import Explore from "./Pages/Explore/Explore";
import Favourites from "./Pages/Favourites/Favourites";
import TrendingSellers from "./Pages/TrendingSellers/TrendingSellers";
import Home from "./Pages/Home/Home";
import SellersDetails from "./Pages/SellerDetails/SellersDetails";
import Footer from "./components/Footer/Footer";
import UserProfile from "./Pages/UserProfile/UserProfile";
import TrendingCreators from "./Pages/TrendingCreators/TrendingCreators";
import ProfileInterface from "./components/ProfileInterface/ProfileInterface";
import KYCInterface from "./components/KYCInterface/KYCInterface";
import LanguageInterface from "./components/LanguageInterface/LanguageInterface";
import ThemeInterface from "./components/ThemeInterface/ThemeInterface";
import EditProfile from "./components/ProfileInterface/EditProfile";
import KYCPending from "./components/KYCInterface/KYCPending";
import KYCApproved from "./components/KYCInterface/KYCApproved";
import TermsAndCondition from "./Pages/Terms&Condition/TermsAndCondition";
import FAQ from "./Pages/FAQ/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import CreateAssets from "./Pages/CreateAssets/CreateAssets";
import DummyUserProfile from "./Pages/DummyUser/DummyUserProfile";
import AuctionCardDetails from "./components/AuctionCardDetails/AuctionCardDetails";
import CreatorsDetails from "./Pages/CreatorsDetails/CreatorsDetails";
import AnimatedLoader from "./Utils/AnimatedLoader/AnimatedLoader";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { customTheme } = useCustomTheme(darkMode);

  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const appLoader = setTimeout(() => setShowApp(true), 2000);
    return () => clearTimeout(appLoader);
  }, []);

  const isMobile = useMediaQuery("(max-width:966px)");

  const handleDarkThemeSwitch = () => {
    localStorage.setItem("theme", "dark");
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleLightThemeSwitch = () => {
    localStorage.setItem("theme", "light");
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  }, [customTheme]);

  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
          height: "100vh",
        }}
      >
        {showApp ? (
          <Box bgcolor={darkMode ? "#040404" : "#ffffff"}>
            <BrowserRouter>
              <Layout darkMode={darkMode}>
                <Routes>
                  <Route path="/" element={<Home darkMode={darkMode} />} />
                  <Route path="/home" element={<Home darkMode={darkMode} />} />
                  <Route
                    path="/explore"
                    element={<Explore darkMode={darkMode} />}
                  />
                  <Route
                    path="/auction"
                    element={<Auction darkMode={darkMode} />}
                  />
                  <Route
                    path="/explore/:id"
                    element={<ArtCardDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/auction/:id"
                    element={<AuctionCardDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/favourites"
                    element={<Favourites darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-sellers"
                    element={<TrendingSellers darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-sellers/:id"
                    element={<SellersDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/user/dummy"
                    element={<DummyUserProfile darkMode={darkMode} />}
                  />
                  <Route
                    path="/create-asset"
                    element={<CreateAssets darkMode={darkMode} />}
                  />
                  <Route
                    path="/profile"
                    element={<UserProfile darkMode={darkMode} />}
                  >
                    <Route
                      path="user-profile"
                      element={<ProfileInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="edit-profile"
                      element={<EditProfile darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc"
                      element={<KYCInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc-pending"
                      element={<KYCPending darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc-approved"
                      element={<KYCApproved darkMode={darkMode} />}
                    />
                    <Route
                      path="language"
                      element={<LanguageInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="theme"
                      element={
                        <ThemeInterface
                          darkMode={darkMode}
                          setDarkMode={setDarkMode}
                          handleDarkThemeSwitch={handleDarkThemeSwitch}
                          handleLightThemeSwitch={handleLightThemeSwitch}
                        />
                      }
                    />
                  </Route>
                  <Route
                    path="/trending-creators"
                    element={<TrendingCreators darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-creators/:id"
                    element={<CreatorsDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicy darkMode={darkMode} />}
                  />
                  <Route
                    path="/terms-and-condition"
                    element={<TermsAndCondition darkMode={darkMode} />}
                  />
                  <Route
                    path="/frequently-asked-questions"
                    element={<FAQ darkMode={darkMode} />}
                  />
                  <Route
                    path="/contact-us"
                    element={<ContactUs darkMode={darkMode} />}
                  />
                </Routes>
                {!isMobile && <Footer darkMode={darkMode} />}
              </Layout>
            </BrowserRouter>
          </Box>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <AnimatedLoader />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
