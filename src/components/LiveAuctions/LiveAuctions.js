import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";
import AuctionCardFB from "../Skeletons/AuctionCardFB";

import Backdrop from "../../assets/exploreBackDropCircle.svg";
import BackdropMobile from "../../assets/backdropMobile.svg";
import { useTheme } from "@emotion/react";

const LiveAuctions = ({ queryName, darkMode, handleDetails }) => {
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

  const liveAuctions = auctionCards.filter((la) => la.auctionStatus === "live");

  return (
    <Box>
      {queryName === "live" ? (
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
            {liveAuctions.length === 0 ? (
              [1, 2, 3, 4, 5, 6].map((n) => (
                <AuctionCardFB darkMode={darkMode} isPast={false} key={n} />
              ))
            ) : (
              <>
                {liveAuctions.map((la) => (
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

export default LiveAuctions;
