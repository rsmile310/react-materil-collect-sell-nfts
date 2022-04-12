import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtCard from "../ArtCard/ArtCard";
import ArtCardFB from "../Skeletons/ArtCardFB";

const AllArtCards = ({ queryName, darkMode }) => {
  const [artWorks, setArtWorks] = useState([]);

  const navigate = useNavigate(); // navigation

  // Loading data from API
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/artWorkData.json");
      const artWorkData = res.data;
      setArtWorks(artWorkData);
    }
    fetchData();
  }, []);

  // Handler for navigating to the details
  const handleDetails = (id) => {
    navigate(`/explore/${id}`);
  };

  return (
    <>
      {queryName === "all" ? (
        <Box>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            columns={{ xs: 1, sm: 12, md: 12 }}
          >
            {artWorks.length === 0 ? (
              [1, 2, 3, 4, 5, 6].map((n) => (
                <ArtCardFB darkMode={darkMode} key={n} />
              ))
            ) : (
              <>
                {artWorks.map((artWork) => (
                  <ArtCard
                    darkMode={darkMode}
                    key={artWork.id}
                    artWork={artWork}
                    handleDetails={handleDetails}
                  />
                ))}
              </>
            )}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default AllArtCards;
