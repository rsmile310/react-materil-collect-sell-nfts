import React from "react";
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
import { HiOutlineClock } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import CountDownBoard from "../CountDownBoard/CountDownBoard";
import { add } from "date-fns";

// Styles
import styles from "./SellerDetailsCard.module.css";

// This should come from the backend API
const futureDate = add(new Date(), {
  days: 7,
  hours: 12,
  minutes: 21,
});

const SellerDetailsCard = ({ sdc, darkMode }) => {
  const { t } = useTranslation();
  const {
    id,
    artworkImage,
    artworkTitle,
    artworkPrice,
    creator,
    creatorImage,
    owner,
    ownerImage,
    uploaded,
    likes,
    tag,
  } = sdc;

  const parsedId = parseInt(id) * 100;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    //
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 + parsedId } : {})}
    >
      <Grid
        className={styles.sellerCard}
        item
        xs={1}
        sm={6}
        md={4}
        sx={{ zIndex: 600 }}
      >
        <div className={styles.sellerCard}>
          <Box
            className={styles.sellerCardGradient}
            sx={{ padding: "1px", borderRadius: "20px" }}
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
              }}
            >
              <Box style={{ position: "relative" }}>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "10px",
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
                  mb={1}
                >
                  {artworkTitle}
                </Typography>
                <Typography variant="subtitle2" component="p" color="gray">
                  {t("PRICE")}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="secondary.main"
                  mb={2}
                >
                  {artworkPrice}
                </Typography>
                {tag === "auctionItems" ? (
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
                      <Box
                        sx={{ position: "absolute", top: "45%", left: "26%" }}
                      >
                        <CountDownBoard
                          darkMode={darkMode}
                          futureDate={futureDate}
                        />
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
                        sx={{ border: "2px solid #ffffff" }}
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
                        sx={{ border: "2px solid #ffffff" }}
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
                    <HiOutlineClock
                      style={{ color: `${darkMode ? "#ffffff" : "#121212"}` }}
                    />
                    <Typography variant="caption" component="span" color="gray">
                      {uploaded}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <AiOutlineHeart
                      style={{ color: `${darkMode ? "#ffffff" : "#121212"}` }}
                    />
                    <Typography variant="caption" component="span" color="gray">
                      {likes}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grow>
  );
};

export default SellerDetailsCard;
