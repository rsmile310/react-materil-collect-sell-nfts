import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { HiOutlineClock } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

import "./FavouriteCardPrev.css";

const FavoriteCardPrev = ({ tnft, darkMode, handleDetails }) => {
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
  } = tnft; // Getting the data from the props

  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    // Main art card container
    <div
      onClick={() => handleDetails(id)}
      className="auctionCardAuction"
      style={{
        marginRight: `${isMobile ? "1rem" : "3rem"}`,
        marginBottom: "1rem",
        marginTop: "2rem",
      }}
    >
      <Box
        className="auctionCardGradientBorder"
        sx={{
          // padding: `${darkMode ? "1px" : "0"}`,
          padding: "1px",
          borderRadius: "20px",
        }}
      >
        <Box
          style={{
            backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            padding: "1rem",
            zIndex: "10",
            cursor: "pointer",
            boxShadow: `${!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}`,
            // marginBottom: "2rem",
          }}
        >
          <Box>
            <img
              style={{ width: "100%", height: "250px", borderRadius: "20px" }}
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
              sx={{ fontSize: "14px" }}
              fontWeight={500}
            >
              {artworkTitle}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              color="gray"
              sx={{ fontSize: "12px" }}
              fontWeight={500}
            >
              {t("PRICE")}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              sx={{ fontSize: "14px" }}
              fontWeight={500}
            >
              {artworkPrice}
            </Typography>
            <Divider style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box>
                  <Avatar
                    sx={{
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                      height: "30px",
                      width: "30px",
                    }}
                    src={creatorImage}
                    alt={creator}
                  />
                </Box>
                <Stack direction="column" alignItems="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="gray"
                    sx={{ fontSize: "10px" }}
                  >
                    {t("CREATOR")}
                  </Typography>
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="secondary"
                    sx={{ fontSize: "10px" }}
                  >
                    {creator}
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box>
                  <Avatar
                    sx={{
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                      height: "30px",
                      width: "30px",
                    }}
                    src={ownerImage}
                    alt={owner}
                  />
                </Box>
                <Stack direction="column" alignItems="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="gray"
                    sx={{ fontSize: "10px" }}
                  >
                    {t("OWNER")}
                  </Typography>
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="secondary"
                    sx={{ fontSize: "10px" }}
                  >
                    {owner}
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Divider style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }} />
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
                <Typography
                  variant="caption"
                  component="span"
                  color="gray"
                  sx={{ fontSize: "10px" }}
                >
                  {uploaded} {t("HOURS_AGO")}
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center">
                <AiOutlineHeart
                  style={{ color: `${darkMode ? "#ffffff" : "#121212"}` }}
                />
                <Typography
                  variant="caption"
                  component="span"
                  color="gray"
                  sx={{ fontSize: "10px" }}
                >
                  {likes}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FavoriteCardPrev;
