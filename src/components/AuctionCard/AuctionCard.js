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

// Icon
import { FaThumbsUp } from "react-icons/fa";

import CountDownBoard from "../CountDownBoard/CountDownBoard";

import { add } from "date-fns";

import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

import styles from "./AuctionCard.module.css";

// This should come from the backend API
const futureDate = add(new Date(), {
  days: 7,
  hours: 12,
  minutes: 21,
});

const AuctionCard = ({ la, darkMode, handleDetails }) => {
  const {
    id,
    artworkImage,
    artworkTitle,
    creator,
    creatorImage,
    owner,
    ownerImage,
    highestBid,
    currentBid,
    basePrice,
    boughtAt,
    auctionStatus,
  } = la; // Getting the data from the props

  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const parsedId = parseInt(id) * 100;
  let parsedId = 0;
  if (auctionStatus === "live") {
    parsedId = parseInt(id) * 100;
  } else {
    parsedId = parseInt(id) * 60;
  }

  // Have to work on auction cards
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 + parsedId } : {})}
    >
      <Grid
        className={styles.auctionCardAuction}
        sx={{ zIndex: 600 }}
        item
        xs={1}
        sm={6}
        md={4}
      >
        <div className={styles.auctionCardAuction}>
          <Box
            onClick={auctionStatus === "past" ? () => handleDetails(id) : null}
            className={styles.auctionCardGradientBorder}
            p="1px"
            borderRadius="20px"
          >
            <Box
              className={styles.auctionInnerBox}
              bgcolor={darkMode ? "#121212" : "#ffffff"}
              style={{
                boxShadow: `${!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}`,
              }}
            >
              <Box>
                <img
                  className={styles.displayImage}
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
                <Box className={styles.auctionCardInfoBox}>
                  <Box>
                    <Typography
                      color="secondary"
                      variant="caption"
                      fontSize="10px"
                      fontWeight={500}
                    >
                      {auctionStatus === "live"
                        ? `${t("CURRENT_BID")}`
                        : `${t("BASE_PRICE")}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary"
                      fontWeight={500}
                    >
                      {auctionStatus === "live" ? currentBid : basePrice}
                    </Typography>
                  </Box>
                  <Box textAlign="right" my={3}>
                    <Typography
                      color="secondary"
                      variant="caption"
                      fontSize="10px"
                      fontWeight={500}
                    >
                      {auctionStatus === "live"
                        ? `${t("HIGHEST_BID")}`
                        : `${t("BOUGHT_AT")}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary"
                      fontWeight={500}
                    >
                      {auctionStatus === "live" ? highestBid : boughtAt}
                    </Typography>
                  </Box>
                </Box>
                {auctionStatus === "live" ? (
                  <Box>
                    {!isMobile ? (
                      <Box>
                        <CountDownBoard
                          darkMode={darkMode}
                          futureDate={futureDate}
                          isCard={true}
                        />
                      </Box>
                    ) : (
                      <Box className={styles.countDownBoxMobile}>
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
                <Divider sx={{ my: 2 }} className={styles.dividerStyle} />
                <Box className={styles.avatarBox}>
                  <Box className={styles.creatorBox}>
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
                    <Stack direction="column">
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
                  <Box className={styles.creatorBox}>
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
                    <Stack direction="column">
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
              </Box>
            </Box>
          </Box>
        </div>
        {auctionStatus === "live" && (
          <div className={styles.auctionCardButton}>
            <Box className={styles.auctionCardButtonBox}>
              <GradientButtonPrimary
                onClick={() => handleDetails(id)}
                className={styles.gradientButton}
              >
                <Typography component="span" color="#ffffff" mt={0.5}>
                  <FaThumbsUp />
                </Typography>
                {!isMobile ? (
                  <Typography variant="body1" component="span">
                    {t("PLACE_YOUR_BID")}
                  </Typography>
                ) : (
                  <Typography variant="body2" component="span" fontSize="14px">
                    {t("PLACE_YOUR_BID")}
                  </Typography>
                )}
              </GradientButtonPrimary>
            </Box>
          </div>
        )}
      </Grid>
    </Grow>
  );
};

export default AuctionCard;
