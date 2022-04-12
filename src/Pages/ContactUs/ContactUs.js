import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ContactUsImage from "../../assets/contact-us-writing.svg";
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { MdOutlineSaveAlt } from "react-icons/md";

import { useTheme } from "@emotion/react";

const ContactUs = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isMobile ? (
        <div>
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
                {t("FOOTER_LINK_CONTACT_US")}
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
            sx={{ px: 5, py: 5, borderRadius: "16px" }}
          >
            <Box
              bgcolor={darkMode ? "#040404" : "#ffffff"}
              sx={{
                p: 5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "16px",
              }}
            >
              <Box sx={{ width: "25%" }}>
                <img
                  style={{ display: "block" }}
                  src={ContactUsImage}
                  alt="Contact Us"
                />
              </Box>
              <Box component="form" sx={{ width: "60%" }}>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userName"
                  >
                    {t("YOUR_NAME")}
                  </label>
                  <input
                    className={darkMode && "inputField"}
                    type="text"
                    placeholder="Enter your name here"
                    name="userName"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "90%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userEmail"
                  >
                    {t("YOUR_EMAIL")}
                  </label>
                  <input
                    className={darkMode && "inputField"}
                    type="email"
                    placeholder="Enter your email here"
                    name="userEmail"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "90%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="messageSubject"
                  >
                    {t("SUBJECT")}
                  </label>

                  <input
                    className={darkMode && "inputField"}
                    placeholder="Enter message subject here"
                    name="messageSubject"
                    type="text"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "90%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userMessage"
                  >
                    {t("YOUR_MESSAGE")}
                  </label>
                  <textarea
                    placeholder="Enter your message here"
                    name="userMessage"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "90%",
                      fontFamily: "Poppins, sans-serif",
                      resize: "vertical",
                    }}
                    cols="30"
                    rows="3"
                  />
                </Stack>
                <Stack alignItems="flex-end">
                  <GradientButtonPrimary
                    type="submit"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Typography component="span" color="#ffffff">
                      <MdOutlineSaveAlt />
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ textTransform: "capitalize", color: "#ffffff" }}
                    >
                      {t("SUBMIT")}
                    </Typography>
                  </GradientButtonPrimary>
                </Stack>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div style={{ marginBottom: "2.5rem" }}>
          <Box
            sx={{
              position: "fixed",
              top: "3%",
              zIndex: "10000",
              left: "40%",
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
              {t("FOOTER_LINK_CONTACT_US")}
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Box
              bgcolor={darkMode ? "#040404" : "#ffffff"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "16px",
              }}
            >
              <Box component="form" width={"80%"}>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userName"
                  >
                    {t("YOUR_NAME")}
                  </label>
                  <input
                    className={darkMode && "inputField"}
                    type="text"
                    placeholder="Enter your name here"
                    name="userName"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "100%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userEmail"
                  >
                    {t("YOUR_EMAIL")}
                  </label>
                  <input
                    className={darkMode && "inputField"}
                    type="email"
                    placeholder="Enter your email here"
                    name="userEmail"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "100%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="messageSubject"
                  >
                    {t("SUBJECT")}
                  </label>

                  <input
                    className={darkMode && "inputField"}
                    placeholder="Enter message subject here"
                    name="messageSubject"
                    type="text"
                    required
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "100%",
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      fontSize: "14px",
                    }}
                    htmlFor="userMessage"
                  >
                    {t("YOUR_MESSAGE")}
                  </label>
                  <textarea
                    placeholder="Enter your message here"
                    name="userMessage"
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "100%",
                      fontFamily: "Poppins, sans-serif",
                      resize: "vertical",
                    }}
                    cols="30"
                    rows="3"
                  />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    ml: 6,
                  }}
                >
                  <GradientButtonPrimary
                    type="submit"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Typography component="span" color="#ffffff">
                      <MdOutlineSaveAlt />
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ textTransform: "capitalize", color: "#ffffff" }}
                    >
                      {t("SUBMIT")}
                    </Typography>
                  </GradientButtonPrimary>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default ContactUs;
