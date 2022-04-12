import React, { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import axios from "axios";

import { useParams } from "react-router-dom";

// Single Artwork components
import SingleArtWork from "./SingleArtWork";

// Styles
import styles from "./ArtCardDetails.module.css";

const ArtCardDetails = ({ darkMode }) => {
  const { id } = useParams(); // Read from url

  const [artWorks, setArtWorks] = useState([]);

  useEffect(() => {
    axios.get("/artWorkData.json").then((res) => {
      setArtWorks(res.data);
    });
  }, [id]);

  // Filtering artwork by IDs
  const filteredArtWork = artWorks.filter((artWork) => artWork.id === id);

  return (
    <Container className={styles.artCardDetailsContainer}>
      <Typography variant="h3" color="secondary.main">
        {filteredArtWork.map((fa) => (
          <SingleArtWork darkMode={darkMode} key={fa.id} fa={fa} />
        ))}
      </Typography>
    </Container>
  );
};

export default ArtCardDetails;
