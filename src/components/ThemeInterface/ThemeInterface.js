import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";

import "./ThemeInterface.css";

const ThemeInterface = ({
  darkMode,
  handleDarkThemeSwitch,
  handleLightThemeSwitch,
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{ borderRadius: "10px", pt: 5, px: 3 }}
        bgcolor={
          !isMobile
            ? darkMode
              ? "#040404"
              : "#ffffff"
            : darkMode
            ? "#121212"
            : "#fff2f8"
        }
      >
        {isMobile && (
          <Box
            sx={{
              position: "fixed",
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "10000",
              mt: 5,
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
              {t("SETTINGS_THEME")}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            height: "100%",
            borderRadius: "10px",
            pt: 1,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Grid container columns={{ xs: 1, sm: 12, md: 12 }}>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  mb={4}
                  onClick={handleDarkThemeSwitch}
                >
                  <Box>
                    <img
                      src="https://res.cloudinary.com/startwithgenesis/image/upload/v1643711913/samples/Minto_NFT_Marketplace_Dark_Prev_Cropped_gebogk.png"
                      alt="Dark UI Preview"
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "90%",
                        border: `${darkMode ? "1px solid gray" : null}`,
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Box>
                      {darkMode ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Typography color="secondary">
                            <BiRadioCircleMarked fontSize={30} />
                          </Typography>
                          <Typography
                            color="secondary"
                            variant="subtitle1"
                            mt={-1}
                          >
                            {t("DARK_UI")}
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Typography color="secondary">
                            <BiRadioCircle fontSize={30} />
                          </Typography>
                          <Typography
                            color="secondary"
                            variant="subtitle1"
                            mt={-1}
                          >
                            {t("DARK_UI")}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={handleLightThemeSwitch}
                >
                  <Box>
                    <img
                      src="https://res.cloudinary.com/startwithgenesis/image/upload/v1643711913/samples/Minto_NFT_Marketplace_Light_Prev_Cropped_xbyf9d.png"
                      alt="Light UI Preview"
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "90%",
                        border: `${darkMode ? "1px solid gray" : null}`,
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Box>
                      {!darkMode ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Typography color="secondary">
                            <BiRadioCircleMarked fontSize={30} />
                          </Typography>
                          <Typography
                            color="secondary"
                            variant="subtitle1"
                            mt={-1}
                          >
                            {t("LIGHT_UI")}
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Typography color="secondary">
                            <BiRadioCircle fontSize={30} />
                          </Typography>
                          <Typography
                            color="secondary"
                            variant="subtitle1"
                            mt={-1}
                          >
                            {t("LIGHT_UI")}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ThemeInterface;
