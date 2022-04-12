import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const LanguageInterface = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const changeLang = () => {
    const localeLang = document.cookie;
    return localeLang.slice(8);
  };

  return (
    <>
      {!isMobile ? (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <Box sx={{ p: 5 }}>
            <FormControl
              component="fieldset"
              sx={{
                width: "80%",
              }}
            >
              <RadioGroup
                aria-label="language"
                defaultValue={changeLang}
                name="language-button-group"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Box>
                      <FormControlLabel
                        value="en"
                        control={
                          <Radio
                            onClick={() => i18next.changeLanguage("en")}
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("ENGLISH")}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        value="hi"
                        control={
                          <Radio
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("HINDI")}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <FormControlLabel
                        value="ta"
                        control={
                          <Radio
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("TAMIL")}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        value="bn"
                        control={
                          <Radio
                            onClick={() => i18next.changeLanguage("bn")}
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("BENGALI")}
                      />
                    </Box>
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            backgroundColor: `${darkMode ? "#121212" : "#fff2f8"}`,
            borderRadius: "10px",
            height: "100%",
            p: 2,
            position: "relative",
          }}
        >
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
              {t("SETTINGS_LANGUAGE")}
            </Typography>
          </Box>
          <Box>
            <FormControl
              component="fieldset"
              sx={{
                width: "100%",
              }}
            >
              <RadioGroup
                aria-label="language"
                defaultValue={changeLang}
                name="language-button-group"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Box>
                      <FormControlLabel
                        value="en"
                        control={
                          <Radio
                            onClick={() => i18next.changeLanguage("en")}
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("ENGLISH")}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        value="hi"
                        control={
                          <Radio
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("HINDI")}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <FormControlLabel
                        value="ta"
                        control={
                          <Radio
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("TAMIL")}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        value="bn"
                        control={
                          <Radio
                            onClick={() => i18next.changeLanguage("bn")}
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#040404"}`,
                              "&.Mui-checked": {
                                color: `${darkMode ? "#ffffff" : "#040404"}`,
                              },
                            }}
                          />
                        }
                        label={t("BENGALI")}
                      />
                    </Box>
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      )}
    </>
  );
};

export default LanguageInterface;
