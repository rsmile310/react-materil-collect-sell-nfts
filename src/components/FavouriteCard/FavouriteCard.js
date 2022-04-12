import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  Grow,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { HiOutlineClock } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";

import CountDownBoard from "../CountDownBoard/CountDownBoard";
import { add } from "date-fns";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

import "./FavouriteCard.css";

const futureDate = add(new Date(), {
  days: 7,
  hours: 12,
  minutes: 21,
});

const FavouriteCard = ({ fb, darkMode }) => {
  const {
    id,
    artworkImage,
    artworkTitle,
    artworkPrice,
    creator,
    creatorImage,
    owner,
    ownerImage,
    highestBid,
    currentBid,
    auctionStatus,
    likes,
    uploaded,
  } = fb; // Getting the data from the props

  const parsedId = parseInt(id) * 100;
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Grow animation in favourite card needs working
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 + parsedId } : {})}
    >
      <Grid className="auctionCardFav" item xs={1} sm={6} md={4}>
        <div className="auctionCardFav">
          <Box
            className="auctionCardFavGradient"
            sx={{
              padding: "1px",
              // padding: `${darkMode ? "1px" : "0"}`,
              borderRadius: "20px",
            }}
          >
            <Box
              bgcolor={darkMode ? "#121212" : "#ffffff"}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                padding: "1rem",
                zIndex: "10",
                cursor: "pointer",
                position: "relative",
                boxShadow: `${!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}`,
                // border: "1px solid red",
              }}
            >
              <Box>
                <img
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: "20px",
                  }}
                  src={artworkImage}
                  alt={artworkTitle}
                />
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  color="secondary.main"
                  fontWeight={500}
                >
                  {artworkTitle}
                </Typography>
                {auctionStatus === "live" ? (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="gray"
                      fontWeight={500}
                    >
                      {t("PRICE")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color="secondary.main"
                      fontWeight={500}
                    >
                      {artworkPrice}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: -2,
                    }}
                  >
                    <Box>
                      <Typography
                        color="secondary"
                        variant="caption"
                        sx={{ fontSize: "10px", fontWeight: 500 }}
                      >
                        {t("CURRENT_BID")}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="secondary"
                        fontWeight={500}
                      >
                        {currentBid}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right", my: 3 }}>
                      <Typography
                        color="secondary"
                        variant="caption"
                        style={{
                          fontSize: "10px",
                          fontWeight: 500,
                        }}
                      >
                        {t("HIGHEST_BID")}
                      </Typography>
                      <Typography
                        color="secondary"
                        variant="body2"
                        fontWeight={500}
                      >
                        {highestBid}
                      </Typography>
                    </Box>
                  </Box>
                )}
                {auctionStatus === "past" ? (
                  <Box>
                    {!isMobile ? (
                      <Box>
                        <CountDownBoard
                          isCard={true}
                          darkMode={darkMode}
                          futureDate={futureDate}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{ position: "absolute", top: "45%", left: "26%" }}
                      >
                        <Box>
                          <CountDownBoard
                            darkMode={darkMode}
                            futureDate={futureDate}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                ) : null}

                <Divider
                  style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box>
                      <Avatar
                        sx={{
                          border: `2px solid ${
                            darkMode ? "#ffffff" : "#01D4FA"
                          }`,
                        }}
                        src={creatorImage}
                        alt={creator}
                      />
                    </Box>
                    <Stack direction="column" alignItems="center">
                      <Typography variant="caption" gutterBottom color="gray">
                        {t("CREATOR")}
                      </Typography>
                      <Typography
                        variant="caption"
                        gutterBottom
                        color="secondary.main"
                      >
                        {creator}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box>
                      <Avatar
                        sx={{
                          border: `2px solid ${
                            darkMode ? "#ffffff" : "#01D4FA"
                          }`,
                        }}
                        src={ownerImage}
                        alt={owner}
                      />
                    </Box>
                    <Stack direction="column" alignItems="center">
                      <Typography variant="caption" gutterBottom color="gray">
                        {t("OWNER")}
                      </Typography>
                      <Typography
                        variant="caption"
                        gutterBottom
                        color="secondary.main"
                      >
                        {owner}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
                {auctionStatus === "live" ? (
                  <>
                    <Divider
                      style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }}
                    />
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction="row" gap={2} alignItems="center">
                        <Typography component="span" color="secondary">
                          <HiOutlineClock />
                        </Typography>
                        <Typography
                          variant="caption"
                          component="span"
                          color="gray"
                        >
                          {uploaded} {t("HOURS_AGO")}
                        </Typography>
                      </Stack>
                      <Stack direction="row" gap={2} alignItems="center">
                        <Typography component="span" color="secondary">
                          <AiOutlineHeart />
                        </Typography>
                        <Typography
                          variant="caption"
                          component="span"
                          color="gray"
                        >
                          {likes}
                        </Typography>
                      </Stack>
                    </Box>
                  </>
                ) : null}
              </Box>
            </Box>
          </Box>
        </div>
        {auctionStatus === "past" && (
          <div className="favouriteCardButton">
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <GradientButtonPrimary
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography component="span" color="#ffffff">
                  <FaThumbsUp />
                </Typography>
                <Typography variant="body1" component="span">
                  {t("PLACE_YOUR_BID")}
                </Typography>
              </GradientButtonPrimary>
            </Box>
          </div>
        )}
      </Grid>
    </Grow>
  );
};

export default FavouriteCard;
