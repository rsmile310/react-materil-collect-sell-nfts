import { useTheme } from "@emotion/react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useCountDown } from "../../hooks/useCountDown";

import MinuteDotIcon from "../../assets/Icons/darkUIIcons/minuteDotIcon.svg";

const CountDownBoard = ({ futureDate, darkMode, isCard }) => {
  const { days, hours, minutes, seconds } = useCountDown(futureDate);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();
  return (
    // have to add isTimeup
    <>
      {!isMobile ? (
        <Box>
          <Grid
            container
            columns={{ xs: 12, md: 12 }}
            sx={{
              mb: 3,
              py: 1,
              backgroundColor: `${
                darkMode ? "#040404" : `${isCard ? "#fff2f8" : "#ffffff"}`
              }`,
              borderRadius: "6px",
            }}
          >
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                borderRight: `${
                  darkMode ? "1px solid #ffffff" : "1px solid #040404"
                }`,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                0{days}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "10px",
                }}
                variant="body2"
                fontWeight="300"
              >
                {t("DAYS")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                borderRight: `${
                  darkMode ? "1px solid #ffffff" : "1px solid #040404"
                }`,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {hours}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "10px",
                }}
                variant="body2"
                fontWeight="300"
              >
                {t("HOURS")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                borderRight: `${
                  darkMode ? "1px solid #ffffff" : "1px solid #040404"
                }`,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {minutes}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "10px",
                }}
                variant="body2"
                fontWeight="300"
              >
                {t("MINUTES")}
              </Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {seconds}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  fontSize: "10px",
                }}
                variant="body2"
                fontWeight="300"
              >
                {t("SECONDS")}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ width: "200px" }}>
          <Grid
            container
            columns={{ xs: 6, md: 20 }}
            columnGap={{ xs: 1 }}
            sx={{
              mb: 3,
              borderRadius: "6px",
            }}
          >
            <Grid
              item
              xs={0.8}
              md={3}
              sx={{
                backgroundColor: `${darkMode ? "#ffffff" : "#040404"}`,
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#040404" : "#ffffff"}`,
                  fontSize: "16px",
                  fontWeight: "bold",
                  pt: 0.5,
                }}
                variant="body1"
              >
                0{days}
              </Typography>
            </Grid>
            <Grid item xs={0.1}>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                }}
                variant="body1"
                component="div"
              >
                <img
                  style={{ marginTop: "10px" }}
                  src={MinuteDotIcon}
                  alt="Minute Icon"
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={0.8}
              md={3}
              sx={{
                backgroundColor: `${darkMode ? "#ffffff" : "#040404"}`,
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#040404" : "#ffffff"}`,
                  fontSize: "16px",
                  fontWeight: "bold",
                  pt: 0.5,
                }}
                variant="body1"
              >
                {hours}
              </Typography>
            </Grid>
            <Grid item xs={0.1}>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                }}
                variant="body1"
                component="div"
              >
                <img
                  style={{ marginTop: "10px" }}
                  src={MinuteDotIcon}
                  alt="Minute Icon"
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={0.8}
              md={3}
              sx={{
                backgroundColor: `${darkMode ? "#ffffff" : "#040404"}`,
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#040404" : "#ffffff"}`,
                  fontSize: "16px",
                  pt: 0.5,
                  fontWeight: "bold",
                }}
                variant="body1"
              >
                {minutes}
              </Typography>
            </Grid>
            <Grid item xs={0.1}>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                }}
                variant="body1"
                component="div"
              >
                <img
                  style={{ marginTop: "10px" }}
                  src={MinuteDotIcon}
                  alt="Minute Icon"
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={0.8}
              md={3}
              sx={{
                backgroundColor: `${darkMode ? "#ffffff" : "#040404"}`,
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: `${darkMode ? "#040404" : "#ffffff"}`,
                  fontSize: "16px",
                  pt: 0.5,
                  fontWeight: "bold",
                }}
                variant="body1"
              >
                {seconds}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default CountDownBoard;
