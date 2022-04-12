import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";
import AuctionCardFB from "../Skeletons/AuctionCardFB";
import { useTheme } from "@emotion/react";

import Backdrop from "../../assets/exploreBackDropCircle.svg";
import BackdropMobile from "../../assets/backdropMobile.svg";

const PastAuctions = ({ queryName, darkMode, handleDetails }) => {
  const [auctionCards, setAuctionCards] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Loading data from API
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/auctionData.json");
      const auctionCardData = res.data;
      setAuctionCards(auctionCardData);
    }
    fetchData();
  }, []);

  const pastAuctions = auctionCards.filter((la) => la.auctionStatus === "past");

  return (
    <Box>
      {queryName === "past" ? (
        <>
          <div style={{ position: "fixed", left: "25%" }}>
            {darkMode && <img src={Backdrop} alt="Bakcdrop" />}
            {isMobile && <img src={BackdropMobile} alt="Bakcdrop" />}
          </div>
          <Grid
            container
            spacing={{ xs: 6, md: 6 }}
            columns={{ xs: 1, sm: 12, md: 12 }}
          >
            {pastAuctions.length === 0 ? (
              [1, 2, 3, 4, 5, 6].map((n) => (
                <AuctionCardFB darkMode={darkMode} isPast={true} key={n} />
              ))
            ) : (
              <>
                {pastAuctions.map((la) => (
                  <AuctionCard
                    handleDetails={handleDetails}
                    darkMode={darkMode}
                    key={la.id}
                    la={la}
                  />
                ))}
              </>
            )}
          </Grid>
        </>
      ) : null}
    </Box>
  );
};

export default PastAuctions;
