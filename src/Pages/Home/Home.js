import React from "react";
import { Box, useMediaQuery } from "@mui/material";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";

import LiveAuctionContainer from "./LiveAuctionContainer";
import TrendingNFTContainer from "./TrendingNFTContainer";
import TrendingSellerContainer from "./TrendingSellersContainer";
import { useTheme } from "@emotion/react";
import HeroBanner from "./HeroBanner";
import StatsComponent from "../../Utils/StatsComponent/StatsComponent";

const Home = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!isMobile ? (
        <Box>
          <Box sx={{ position: "relative" }}>
            <Box
              style={{
                position: "fixed",
                height: "100vh",
              }}
            >
              <img
                src={darkMode ? BackgroundWrinkles1 : BackgroundWrinklesLight}
                alt="Wrinkles"
              />
            </Box>
            <Box sx={{ mt: 10 }}>
              <HeroBanner isMobile={false} darkMode={darkMode} />
            </Box>
            {/* Stats */}
            <Box sx={{ mt: 10, mb: 20 }}>
              <StatsComponent darkMode={darkMode} />
            </Box>
            {/* Live Auctions */}
            <LiveAuctionContainer darkMode={darkMode} />

            {/* Trending NFTs */}
            <TrendingNFTContainer darkMode={darkMode} />

            {/* Trending Sellers */}
            <TrendingSellerContainer darkMode={darkMode} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ overflowX: "hidden" }}>
          <Box
            style={{
              position: "relative",
            }}
          >
            <Box
              style={{
                position: "fixed",
                height: "100vh",
              }}
            >
              <img
                src={darkMode ? BackgroundWrinkles1 : BackgroundWrinklesLight}
                alt="Wrinkles"
              />
            </Box>
            {/* Hero Banner */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HeroBanner isMobile={true} darkMode={darkMode} />
            </Box>
            {/* Stats */}
            <StatsComponent darkMode={darkMode} isMobile={true} />
            {/* Live Auctions */}
            <LiveAuctionContainer darkMode={darkMode} />

            {/* Trending NFTs */}
            <TrendingNFTContainer darkMode={darkMode} />

            {/* Trending Sellers */}
            <TrendingSellerContainer darkMode={darkMode} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
