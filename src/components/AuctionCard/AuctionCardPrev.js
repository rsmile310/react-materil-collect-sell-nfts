import React from "react";
import {
  Avatar,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

import CountDownBoard from "../CountDownBoard/CountDownBoard";

import { add } from "date-fns";

import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";
import { useTheme } from "@emotion/react";

import { useTranslation } from "react-i18next";

// icon
import { FaThumbsUp } from "react-icons/fa";

// Styles
import styles from "./AuctionCardPrev.module.css";

// Data will come from the backend API
const futureDate = add(new Date(), {
  days: 7,
  hours: 12,
  minutes: 21,
});

const AuctionCardPrev = ({ la, darkMode, handleDetails }) => {
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

  return (
    <Box className={styles.auctionCardPrevHome} mr={isMobile ? "1rem" : "3rem"}>
      <Box className={styles.auctionCardPrevGradientBorder}>
        <Box
          className={styles.auctionCardInnerBox}
          bgcolor={darkMode ? "#121212" : "#ffffff"}
          boxShadow={!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
          <Box>
            <img
              className={styles.displayImage}
              src={artworkImage}
              alt={artworkTitle}
            />
          </Box>
          <Box mt={3}>
            <Typography
              variant="subtitle1"
              component="h2"
              color="secondary"
              fontSize={"14px"}
              fontWeight={500}
            >
              {artworkTitle}
            </Typography>
            <Box className={styles.auctionInfoBox}>
              <Box>
                <Typography
                  variant="caption"
                  fontSize={"9px"}
                  color={darkMode ? "#ffffff" : "#121212"}
                  fontWeight={500}
                >
                  {auctionStatus === "live"
                    ? `${t("CURRENT_BID")}`
                    : `${t("BASE_PRICE")}`}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"11px"}
                  color={darkMode ? "#ffffff" : "#121212"}
                  fontWeight={500}
                >
                  {auctionStatus === "live" ? currentBid : basePrice}
                </Typography>
              </Box>
              <Box textAlign="right" my={3}>
                <Typography
                  variant="caption"
                  fontSize={"9px"}
                  color={darkMode ? "#ffffff" : "#121212"}
                  fontWeight={500}
                >
                  {auctionStatus === "live"
                    ? `${t("HIGHEST_BID")}`
                    : `${t("BOUGHT_AT")}`}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"11px"}
                  color={darkMode ? "#ffffff" : "#121212"}
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
            <Divider className={styles.dividerStyles} />
            <Box className={styles.auctionFooterBox}>
              <Box className={styles.avatarBox}>
                <Box>
                  <Avatar
                    className={styles.avatarStyle}
                    sx={{
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                    }}
                    src={creatorImage}
                    alt={creator}
                  />
                </Box>
                <Stack direction="column">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="gray"
                    fontSize={"10px"}
                  >
                    {t("CREATOR")}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="secondary"
                    fontSize={"11px"}
                  >
                    {creator}
                  </Typography>
                </Stack>
              </Box>
              <Box className={styles.avatarBox}>
                <Box>
                  <Avatar
                    className={styles.avatarStyle}
                    sx={{
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                    }}
                    src={ownerImage}
                    alt={owner}
                  />
                </Box>
                <Stack direction="column">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="gray"
                    fontSize={"10px"}
                  >
                    {t("OWNER")}
                  </Typography>
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="secondary"
                    fontSize={"11px"}
                  >
                    {owner}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {auctionStatus === "live" && (
        <div className={styles.auctionCardButtonHome}>
          <Box className={styles.buttonBox}>
            <GradientButtonPrimary
              onClick={() => handleDetails(id)}
              className={styles.gradientButton}
            >
              <Typography component="span" color="#ffffff">
                <FaThumbsUp />
              </Typography>
              <Typography variant="body1" component="span" fontSize={"11px"}>
                {t("PLACE_YOUR_BID")}
              </Typography>
            </GradientButtonPrimary>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default AuctionCardPrev;
