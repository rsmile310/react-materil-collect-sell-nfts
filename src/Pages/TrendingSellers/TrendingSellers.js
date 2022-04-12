import React, { useState, useEffect } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import SellersCard from "../../components/SellersCard/SellersCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TrendingSellersFB from "../../components/Skeletons/TrendingSellersFB";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const TrendingSellers = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [trendingSellers, setTrendingSellers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/sellerData.json").then((res) => {
      setTrendingSellers(res.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSellerDetails = (id) => {
    navigate(`/trending-sellers/${id}`);
  };

  return (
    <>
      <Box
        color={darkMode ? "#ffffff" : "#171c26"}
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
                  borderBottom: `2px solid ${darkMode ? "#ffffff" : "#171c26"}`,
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
                  {t("TRENDING_SELLERS")}
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
                    {t("TRENDING_SELLERS")}
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
              {trendingSellers.length === 0 ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <TrendingSellersFB darkMode={darkMode} key={n} />
                ))
              ) : (
                <>
                  {trendingSellers.map((ts) => (
                    <SellersCard
                      darkMode={darkMode}
                      key={ts.id}
                      ts={ts}
                      handleSellerDetails={handleSellerDetails}
                      t={t}
                    />
                  ))}
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TrendingSellers;
