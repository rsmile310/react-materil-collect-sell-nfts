import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import useQuery from "../../hooks/useQuery";
import AllArtCards from "./AllArtCards";
import ArtArtCards from "./ArtArtCards";
import MemesArtCards from "./MemesArtCards";
import MusicArtCards from "./MusicArtCards";

import Backdrop from "../../assets/exploreBackDropCircle.svg";
import BackdropMobile from "../../assets/backdropMobile.svg";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useTheme } from "@emotion/react";
import PosterArtCards from "./PosterArtCards";
import SignatureArtCards from "./SignatureArtCards";

const ArtCardContainer = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let query = useQuery();

  return (
    <div
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
      <div style={{ position: "fixed", left: "25%" }}>
        {darkMode && <img src={Backdrop} alt="Bakcdrop" />}
        {isMobile && <img src={BackdropMobile} alt="Bakcdrop" />}
      </div>
      <Box
        sx={{
          my: 1,
          width: "100%",
        }}
      >
        <AllArtCards darkMode={darkMode} queryName={query.get("type")} />
        <ArtArtCards darkMode={darkMode} queryName={query.get("type")} />
        <MusicArtCards darkMode={darkMode} queryName={query.get("type")} />
        <PosterArtCards darkMode={darkMode} queryName={query.get("type")} />
        <SignatureArtCards darkMode={darkMode} queryName={query.get("type")} />
        <MemesArtCards darkMode={darkMode} queryName={query.get("type")} />
      </Box>
    </div>
  );
};

export default ArtCardContainer;
