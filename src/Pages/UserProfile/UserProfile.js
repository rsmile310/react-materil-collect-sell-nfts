import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";

import { useTranslation } from "react-i18next";

import { useTheme } from "@emotion/react";

const UserProfile = ({ darkMode }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Box>
      <Box
        sx={
          !isMobile
            ? {
                color: `${darkMode ? "#ffffff" : "#040404"}`,
                mt: 10.5,
                mb: 10,
                position: "relative",
              }
            : { mt: 2 }
        }
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
        {/* Navigation */}
        {!isMobile && (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: 2,
              alignItems: "center",
              my: 5,
              ml: 2,
              // zIndex: 1000,
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
                onClick={handleBack}
                variant="h6"
                component="p"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {t(
                  "SETTINGS_" +
                    location.pathname
                      .slice(9)
                      ?.split("-")
                      .join("_")
                      .toUpperCase()
                )}
              </Typography>
              {darkMode && (
                <Typography
                  variant="h1"
                  component="p"
                  sx={{
                    background:
                      "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                    borderRadius: "4px",
                    width: "25px",
                    height: "20px",
                    ml: -2,
                    my: 1,
                  }}
                ></Typography>
              )}
            </Typography>
          </Box>
        )}
        {!isMobile ? (
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
              borderRadius: "16px",
              display: "flex",
              p: 5,
              justifyContent: "center",
              alignItems: "center",
              width: "85%",
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, md: 4 }}
              columns={{ xs: 1, md: 12 }}
            >
              <Grid zIndex={10000} item xs={1} md={3.5}>
                <ProfileSideBar darkMode={darkMode} />
              </Grid>
              <Grid zIndex={10000} item xs={1} md={8.5}>
                <Outlet />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              color: `${darkMode ? "#ffffff" : "#040404"}`,
              overflowY: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // zIndex: 10000,
              }}
            >
              <Grid
                // zIndex={10000}
                container
                spacing={{ xs: 1, md: 4 }}
                columns={{ xs: 1, md: 12 }}
              >
                <Grid item xs={1} md={8.5}>
                  <Outlet />
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserProfile;
