import React from "react";
import { Typography, Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import NftBookmarks from "./NftBookmarks";
import AuctionBookmark from "./AuctionBookmark";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const Favourites = ({ darkMode }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let query = useQuery();

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "fixed",
          height: "100vh",
        }}
      >
        <img
          src={darkMode ? BackgroundWrinkles1 : BackgroundWrinklesLight}
          alt="Wrinkles"
        />
      </Box>
      {!isMobile ? (
        <Box sx={{ width: "100%", mt: 11.5 }}>
          <Box
            bgcolor={darkMode ? "#171c26" : "#fff2f8"}
            sx={{
              borderRadius: "10px",
              pl: 5,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Button
              color="secondary"
              onClick={() => navigate("/favourites?type=nft-bookmark")}
              sx={{ textTransform: "capitalize" }}
            >
              <Typography
                sx={
                  location.search === "?type=nft-bookmark"
                    ? {
                        borderBottom: `1px solid ${
                          darkMode ? "#ffffff" : "#171c26"
                        }`,
                      }
                    : {}
                }
                variant="body2"
                component="span"
              >
                {t("NFT_BOOKMARK")}
              </Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => navigate("/favourites?type=auction-bookmark")}
              sx={{ textTransform: "capitalize" }}
            >
              <Typography
                sx={
                  location.search === "?type=auction-bookmark"
                    ? {
                        borderBottom: `1px solid ${
                          darkMode ? "#ffffff" : "#171c26"
                        }`,
                      }
                    : {}
                }
                variant="body2"
                component="span"
              >
                {t("AUCTION_BOOKMARK")}
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", mt: 3 }}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                top: "3%",
                zIndex: "10000",
                width: "75%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box pb={2} ml={7}>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  component="div"
                  sx={{
                    borderBottom: `${
                      darkMode ? "2px solid #ffffff" : "1px solid #171c26"
                    }`,
                  }}
                >
                  {t("FAVOURITES")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              bgcolor={
                location.search === "?type=nft-bookmark"
                  ? {
                      backgroundColor: `#01D4FA`,
                    }
                  : {
                      backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                    }
              }
              onClick={() => navigate("/favourites?type=nft-bookmark")}
              sx={{
                color: `#ffffff`,
                py: 1,
                px: 2,
                borderRadius: "4px",
                zIndex: 1000,
              }}
            >
              <Typography
                variant="body2"
                color="secondary"
                sx={{ fontSize: "12px" }}
              >
                {t("NFT_BOOKMARK")}
              </Typography>
            </Box>
            <Box
              bgcolor={
                location.search === "?type=auction-bookmark"
                  ? {
                      backgroundColor: `#01D4FA`,
                    }
                  : {
                      backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                    }
              }
              onClick={() => navigate("/favourites?type=auction-bookmark")}
              sx={{
                color: `#ffffff`,
                py: 1,
                px: 2,
                borderRadius: "4px",
                zIndex: 1000,
              }}
            >
              <Typography
                variant="body2"
                color="secondary"
                sx={{ fontSize: "12px" }}
              >
                {t("AUCTION_BOOKMARK")}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <Box sx={{ mt: 5, pb: 3 }}>
          <NftBookmarks darkMode={darkMode} queryName={query.get("type")} />
          <AuctionBookmark darkMode={darkMode} queryName={query.get("type")} />
        </Box>
      </div>
    </Box>
  );
};

export default Favourites;
