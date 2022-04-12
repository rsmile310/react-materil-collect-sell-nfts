import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import AuctionCardFB from "../../components/Skeletons/AuctionCardFB";

const NftBookmarks = ({ queryName, darkMode }) => {
  const [favouriteCards, setFavouriteCards] = useState([]);

  useEffect(() => {
    axios.get("/auctionData.json").then((res) => {
      setFavouriteCards(res.data);
    });
  }, []);

  const nftBookmarks = favouriteCards.filter(
    (nb) => nb.auctionStatus === "live"
  );

  return (
    <>
      {queryName === "nft-bookmark" ? (
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 1, sm: 12, md: 12 }}
          >
            {nftBookmarks.length === 0 ? (
              [1, 2, 3, 4, 5, 6].map((n) => (
                <AuctionCardFB darkMode={darkMode} isPast={true} key={n} />
              ))
            ) : (
              <>
                {nftBookmarks.map((fb) => (
                  <FavouriteCard darkMode={darkMode} key={fb.id} fb={fb} />
                ))}
              </>
            )}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default NftBookmarks;
