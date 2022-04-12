import { useTheme } from "@emotion/react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TermsAndCondition = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isMobile ? (
        <Box>
          <Box
            color={darkMode ? "#ffffff" : "#121212"}
            sx={{
              position: "relative",
              display: "flex",
              gap: 4,
              alignItems: "center",
              mt: 11,
              mb: 5,
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
                // onClick={() => navigate("/explore?type=all")}
                variant="h6"
                component="p"
                sx={{ zIndex: 2, cursor: "pointer" }}
              >
                {t("FOOTER_LINK_TERMS_CONDITION")}
              </Typography>
              <Typography
                variant="h1"
                component="p"
                sx={{
                  background:
                    "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                  borderRadius: "4px",
                  width: "30px",
                  height: "24px",
                  ml: -3,
                }}
              ></Typography>
            </Typography>
          </Box>
          <Box
            bgcolor={darkMode ? "#171c26" : "#fff2f8"}
            color={darkMode ? "#ffffff" : "#121212"}
            sx={{
              borderRadius: "16px",
              p: 6,
            }}
          >
            <Typography variant="h6" component="h6" sx={{ mb: 3 }}>
              {t("LAST_UPDATED")}: 24 May 2021
            </Typography>
            <Divider sx={{ backgroundColor: "#8E8E8E", opacity: "0.7" }} />
            <Box>
              <Typography variant="h6" component="h6" sx={{ my: 2 }}>
                {t("ACCEPTING_THE_TERMS")}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  lineHeight: 2,
                  textAlign: "justify",
                  color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                }}
              >
                {t("TERMS_CONDITION_DESC")}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              position: "fixed",
              top: "3%",
              zIndex: "10000",
              left: "32%",
            }}
          >
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
              {t("FOOTER_LINK_TERMS_CONDITION")}
            </Typography>
          </Box>
          <Box
            color={darkMode ? "#ffffff" : "#121212"}
            sx={{
              borderRadius: "16px",
              mt: 5,
            }}
          >
            <Box>
              <Typography variant="h6" component="h6" sx={{ mb: 1 }}>
                {t("ACCEPTING_THE_TERMS")}
              </Typography>
              <Divider sx={{ backgroundColor: "#8E8E8E", opacity: "0.4" }} />
              <Typography
                variant="body2"
                component="p"
                sx={{
                  lineHeight: 2,
                  textAlign: "justify",
                  mt: 2,
                  color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                }}
              >
                {t("TERMS_CONDITION_DESC")}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TermsAndCondition;
