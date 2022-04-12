import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./AuctionCardDetails.module.css";
import SingleAuctionCard from "./SingleAuctionCard";

const AuctionCardDetails = ({ darkMode }) => {
  const { id } = useParams(); // Read from url

  const [auctionArtWorks, setAuctionArtWorks] = useState([]);

  useEffect(() => {
    axios.get("/auctionData.json").then((res) => {
      setAuctionArtWorks(res.data);
    });
  }, [id]);

  // Filtering artwork by IDs
  const filteredArtWork = auctionArtWorks.filter(
    (artWork) => artWork.id === id
  );

  return (
    <Container className={styles.auctionCardContainer}>
      <Typography variant="h3" color="secondary.main">
        {filteredArtWork.map((fa) => (
          <SingleAuctionCard darkMode={darkMode} key={fa.id} fa={fa} />
        ))}
      </Typography>
    </Container>
  );
};

export default AuctionCardDetails;
