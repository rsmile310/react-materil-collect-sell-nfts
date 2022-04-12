import React from "react";
import { Typography, Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import LiveAuctions from "../../components/LiveAuctions/LiveAuctions";
import PastAuctions from "../../components/PastAuctions/PastAuctions";
import useQuery from "../../hooks/useQuery";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const Auction = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let query = useQuery();

  const location = useLocation();
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/auction/${id}`);
  };

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
      <Box sx={{ width: "100%", mt: 11.5 }}>
        {!isMobile ? (
          <Box
            bgcolor={darkMode ? "#171c26" : "#fff2F8"}
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
              onClick={() => navigate("/auction?type=live")}
              sx={{ textTransform: "capitalize" }}
            >
              <Typography
                sx={
                  location.search === "?type=live"
                    ? {
                        borderBottom: `1px solid ${
                          darkMode ? "#ffffff" : "#171C26"
                        }`,
                      }
                    : {}
                }
                variant="body2"
                component="span"
              >
                {t("LIVE_AUCTIONS")}
              </Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => navigate("/auction?type=past")}
              sx={{ textTransform: "capitalize" }}
            >
              <Typography
                sx={
                  location.search === "?type=past"
                    ? {
                        borderBottom: `1px solid ${
                          darkMode ? "#ffffff" : "#171C26"
                        }`,
                      }
                    : {}
                }
                variant="body2"
                component="span"
              >
                {t("PAST_AUCTIONS")}
              </Typography>
            </Button>
          </Box>
        ) : (
          <Box sx={{ mt: -8 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                bgcolor={
                  location.search === "?type=live"
                    ? {
                        backgroundColor: `#01D4FA`,
                      }
                    : {
                        backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                      }
                }
                onClick={() => navigate("/auction?type=live")}
                sx={{
                  color: `#ffffff`,
                  py: 1,
                  px: 3,
                  borderRadius: "4px",
                  zIndex: 1000,
                }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  sx={{ fontSize: "12px" }}
                >
                  Live Auctions
                </Typography>
              </Box>
              <Box
                bgcolor={
                  location.search === "?type=past"
                    ? {
                        backgroundColor: `#01D4FA`,
                      }
                    : {
                        backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                      }
                }
                onClick={() => navigate("/auction?type=past")}
                sx={{
                  color: `#ffffff`,
                  py: 1,
                  px: 3,
                  borderRadius: "4px",
                  zIndex: 1000,
                }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  sx={{ fontSize: "12px" }}
                >
                  Past Auctions
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        <Box sx={{ mt: "3rem" }}>
          <LiveAuctions
            handleDetails={handleDetails}
            darkMode={darkMode}
            queryName={query.get("type")}
          />
          <PastAuctions
            handleDetails={handleDetails}
            darkMode={darkMode}
            queryName={query.get("type")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Auction;
