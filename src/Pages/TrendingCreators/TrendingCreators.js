import React, { useState, useEffect } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import TrendingSellersFB from "../../components/Skeletons/TrendingSellersFB";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import CreatorCard from "../../components/CreatorCard/CreatorCard";

const TrendingCreators = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [trendingCreators, setTrendingCreators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/creatorData.json").then((res) => {
      setTrendingCreators(res.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSellerDetails = (id) => {
    navigate(`/trending-creators/${id}`);
  };

  return (
    <Box
      color={darkMode ? "#ffffff" : "#121212"}
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
      <Box sx={!isMobile ? { mt: 11 } : { mt: 2 }}>
        {!isMobile ? (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              sx={{
                borderBottom: `2px solid ${darkMode ? "#ffffff" : "#121212"}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component="p"
                sx={{ zIndex: 2, cursor: "pointer" }}
              >
                {t("TRENDING_CREATORS")}
              </Typography>
              {darkMode && (
                <Typography
                  variant="h1"
                  component="p"
                  sx={{
                    background:
                      "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                    borderRadius: "4px",
                    width: "35px",
                    height: "24px",
                    ml: -4,
                  }}
                ></Typography>
              )}
            </Typography>
          </Box>
        ) : (
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
              <Box pb={2} ml={6}>
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
                  {t("TRENDING_CREATORS")}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={{ mt: 5, width: "100%" }}>
          <Grid
            container
            columns={{ xs: 1, sm: 12, md: 12 }}
            spacing={{ xs: 4, md: 6 }}
          >
            {trendingCreators.length === 0 ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <TrendingSellersFB darkMode={darkMode} key={n} />
              ))
            ) : (
              <>
                {trendingCreators.map((ts) => (
                  <CreatorCard
                    darkMode={darkMode}
                    key={ts.id}
                    ts={ts}
                    handleSellerDetails={handleSellerDetails}
                  />
                ))}
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingCreators;
