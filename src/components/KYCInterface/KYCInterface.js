import React, { useState } from "react";

import {
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { AiOutlineCloseSquare } from "react-icons/ai";
import { ImImage } from "react-icons/im";
import { MdOutlineSaveAlt } from "react-icons/md";

import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { TiTimes } from "react-icons/ti";

const Input = styled("input")({
  display: "none",
});

const KYCInterface = ({ darkMode }) => {
  const [imageFrontSide, setImageFrontSide] = useState(null);
  const [imageBackSide, setImageBackSide] = useState(null);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleFrontImageUpload = (e) => {
    setImageFrontSide(URL.createObjectURL(e.target.files[0]));
  };

  const handleBackImageUpload = (e) => {
    setImageBackSide(URL.createObjectURL(e.target.files[0]));
  };

  const handleKycSubmit = (e) => {
    e.preventDefault();
    navigate("/profile/kyc-pending");
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
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              borderRadius: "10px",
            }}
          >
            <Box
              onSubmit={handleKycSubmit}
              sx={{ px: 5, pt: 1.7 }}
              component="form"
            >
              {/* Full Name */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="sellerName"
                >
                  {t("SELLER_NAME")} *
                </label>
                <input
                  className={darkMode ? "inputField" : undefined}
                  type="text"
                  placeholder={t("KYC_ENTER_SELLER_NAME_HERE")}
                  name="userFullName"
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
              {/* address */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="address"
                >
                  {t("ADDRESS")} *
                </label>
                <textarea
                  name="address"
                  cols="30"
                  placeholder={t("KYC_ENTER_YOUR_ADDRESS_HERE")}
                  required
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                    width: "90%",
                    fontFamily: "'Poppins', sans-serif",
                    resize: "vertical",
                  }}
                />
              </Stack>
              {/* Adhar Card Number */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="adharCardNumber"
                >
                  {t("ADHAR_CARD_NUMBER")} *
                </label>
                <input
                  className={darkMode ? "inputField" : undefined}
                  type="number"
                  placeholder={t("ENTER_YOUR_ADHARCARD_NUMBER_HERE")}
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
              <Stack sx={{ my: 6 }}>
                <label
                  htmlFor="upoloadAdharCard"
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {t("UPLOAD_YOUR_ADHAR_CARD(JPG,PNG,PDF)")} *
                </label>
                <Box
                  sx={{
                    mt: 3,
                    width: "98%",
                  }}
                >
                  <Grid
                    container
                    columns={{ xs: 1, md: 12 }}
                    spacing={{ xs: 1, md: 6 }}
                  >
                    <Grid item xs={1} md={6}>
                      <Box>
                        {!imageFrontSide ? (
                          <Box
                            sx={{
                              border: "1px solid #c4c4c4",
                              borderStyle: "dashed",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              p: 3,
                            }}
                          >
                            <Box>
                              <label htmlFor="icon-button-file-front">
                                <Input
                                  accept="image/*"
                                  id="icon-button-file-front"
                                  type="file"
                                  onChange={handleFrontImageUpload}
                                />
                                <IconButton
                                  color="primary"
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <Typography
                                    component="span"
                                    color="secondary"
                                    fontSize={25}
                                  >
                                    <ImImage />
                                  </Typography>
                                </IconButton>
                              </label>
                            </Box>
                            <Typography
                              variant="caption"
                              component="p"
                              color="secondary"
                            >
                              {t("FRONT_SIDE")}
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ position: "relative" }}>
                            <Box
                              sx={{
                                position: "absolute",
                                left: "1%",
                                top: "4%",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor: `${
                                    darkMode ? "#fff2f8" : "#171c26"
                                  }`,
                                }}
                                onClick={() => setImageFrontSide(null)}
                              >
                                <TiTimes
                                  fontSize={"1rem"}
                                  color={darkMode ? "#040404" : "#ffffff"}
                                />
                              </IconButton>
                            </Box>
                            <img
                              style={{
                                border: "1px solid #c4c4c4",
                                borderStyle: "dashed",
                                padding: "5px",
                                height: "120px",
                                width: "257px",
                              }}
                              src={imageFrontSide}
                              alt="Uploaded"
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={1} md={6}>
                      <Box>
                        {!imageBackSide ? (
                          <Box
                            sx={{
                              border: "1px solid #c4c4c4",
                              borderStyle: "dashed",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              p: 3,
                            }}
                          >
                            <Box>
                              <label htmlFor="icon-button-file-back">
                                <Input
                                  accept="image/*"
                                  id="icon-button-file-back"
                                  type="file"
                                  onChange={handleBackImageUpload}
                                />
                                <IconButton
                                  color="primary"
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <Typography
                                    component="span"
                                    color="secondary"
                                    fontSize={25}
                                  >
                                    <ImImage />
                                  </Typography>
                                </IconButton>
                              </label>
                            </Box>
                            <Typography
                              variant="caption"
                              component="p"
                              color="secondary"
                            >
                              {t("BACK_SIDE")}
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ position: "relative" }}>
                            <Box
                              sx={{
                                position: "absolute",
                                left: "1%",
                                top: "4%",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor: `${
                                    darkMode ? "#fff2f8" : "#171c26"
                                  }`,
                                }}
                                onClick={() => setImageBackSide(null)}
                              >
                                <TiTimes
                                  fontSize={"1rem"}
                                  color={darkMode ? "#040404" : "#ffffff"}
                                />
                              </IconButton>
                            </Box>
                            <img
                              style={{
                                border: "1px solid #c4c4c4",
                                borderStyle: "dashed",
                                padding: "5px",
                                height: "120px",
                                width: "257px",
                              }}
                              src={imageBackSide}
                              alt="Uploaded"
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
              <Box
                sx={{
                  mt: 8,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                  mr: 1.5,
                }}
              >
                <Button
                  onClick={() => navigate("/profile/user-profile")}
                  variant="outlined"
                  color="pink"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    padding: "8px 1.5rem",
                    borderRadius: "10px",
                  }}
                >
                  <Typography component="span" color="secondary" mt={0.5}>
                    <AiOutlineCloseSquare />
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      textTransform: "capitalize",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                    }}
                  >
                    {t("CLOSE")}
                  </Typography>
                </Button>
                <GradientButtonPrimary
                  // onClick={() => navigate("/profile/kyc-pending")}
                  type="submit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="span" color="#ffffff" mt={0.5}>
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
      ) : (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            backgroundColor: `${darkMode ? "#121212" : "#fff2f8"}`,
            borderRadius: "10px",
            height: "100%",
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
              {t("SETTINGS_KYC")}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#121212" : "#fff2f8"}`,
              zIndex: 10,
              borderRadius: "10px",
              p: 3,
            }}
          >
            <Box onSubmit={handleKycSubmit} sx={{ p: 1 }} component="form">
              {/* Full Name */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="sellerName"
                >
                  {t("SELLER_NAME")} *
                </label>
                <input
                  className={darkMode ? "inputField" : undefined}
                  type="text"
                  placeholder={t("KYC_ENTER_SELLER_NAME_HERE")}
                  name="userFullName"
                  required
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                  }}
                />
              </Stack>
              {/* adress */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="address"
                >
                  {t("ADDRESS")} *
                </label>
                <textarea
                  name="address"
                  cols="30"
                  placeholder={t("KYC_ENTER_YOUR_ADDRESS_HERE")}
                  required
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                    fontFamily: "'Poppins', sans-serif",
                    resize: "vertical",
                  }}
                />
              </Stack>
              {/* Adhar Card Number */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="adharCardNumber"
                >
                  {t("ADHAR_CARD_NUMBER")} *
                </label>
                <input
                  className={darkMode ? "inputField" : undefined}
                  type="number"
                  placeholder={t("ENTER_YOUR_ADHARCARD_NUMBER_HERE")}
                  name="userEmail"
                  required
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                  }}
                />
              </Stack>
              <Stack sx={{ my: 3 }}>
                <label
                  htmlFor="upoloadAdharCard"
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                >
                  {t("UPLOAD_YOUR_ADHAR_CARD(JPG,PNG,PDF)")} *
                </label>
                <Box
                  sx={{
                    mt: 3,
                  }}
                >
                  <Grid
                    container
                    columns={{ xs: 1, md: 12 }}
                    spacing={{ xs: 1, md: 6 }}
                  >
                    <Grid item xs={1} md={6}>
                      <Box>
                        {!imageFrontSide ? (
                          <Box
                            sx={{
                              border: "1px solid #c4c4c4",
                              borderStyle: "dashed",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              p: 3,
                            }}
                          >
                            <Box>
                              <label htmlFor="icon-button-file-front">
                                <Input
                                  accept="image/*"
                                  id="icon-button-file-front"
                                  type="file"
                                  onChange={handleFrontImageUpload}
                                />
                                <IconButton
                                  color="primary"
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <Typography
                                    component="span"
                                    color="secondary"
                                  >
                                    <ImImage />
                                  </Typography>
                                </IconButton>
                              </label>
                            </Box>
                            <Typography
                              variant="caption"
                              component="p"
                              color="secondary"
                            >
                              {t("FRONT_SIDE")}
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ position: "relative" }}>
                            <Box
                              sx={{
                                position: "absolute",
                                left: "1%",
                                top: "4%",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor: `${
                                    darkMode ? "#fff2f8" : "#171c26"
                                  }`,
                                }}
                                onClick={() => setImageFrontSide(null)}
                              >
                                <TiTimes
                                  fontSize={"1rem"}
                                  color={darkMode ? "#040404" : "#ffffff"}
                                />
                              </IconButton>
                            </Box>
                            <img
                              style={{
                                border: "1px solid #c4c4c4",
                                borderStyle: "dashed",
                                padding: "5px",
                                height: "120px",
                                width: "96%",
                              }}
                              src={imageFrontSide}
                              alt="Uploaded"
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={1} md={6}>
                      <Box>
                        {!imageBackSide ? (
                          <Box
                            sx={{
                              border: "1px solid #c4c4c4",
                              borderStyle: "dashed",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              p: 3,
                            }}
                          >
                            <Box>
                              <label htmlFor="icon-button-file-back">
                                <Input
                                  accept="image/*"
                                  id="icon-button-file-back"
                                  type="file"
                                  onChange={handleBackImageUpload}
                                />
                                <IconButton
                                  color="primary"
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <Typography
                                    component="span"
                                    color="secondary"
                                  >
                                    <ImImage />
                                  </Typography>
                                </IconButton>
                              </label>
                            </Box>
                            <Typography
                              variant="caption"
                              component="p"
                              color="secondary"
                            >
                              {t("BACK_SIDE")}
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ position: "relative" }}>
                            <Box
                              sx={{
                                position: "absolute",
                                left: "1%",
                                top: "4%",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor: `${
                                    darkMode ? "#fff2f8" : "#171c26"
                                  }`,
                                }}
                                onClick={() => setImageBackSide(null)}
                              >
                                <TiTimes
                                  fontSize={"1rem"}
                                  color={darkMode ? "#040404" : "#ffffff"}
                                />
                              </IconButton>
                            </Box>
                            <img
                              style={{
                                border: "1px solid #c4c4c4",
                                borderStyle: "dashed",
                                padding: "5px",
                                height: "120px",
                                width: "96%",
                              }}
                              src={imageBackSide}
                              alt="Uploaded"
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                }}
              >
                <Button
                  onClick={() => navigate("/profile/user-profile")}
                  variant="outlined"
                  color="pink"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    padding: "8px 1.5rem",
                    borderRadius: "10px",
                  }}
                >
                  <Typography component="span" color="secondary">
                    <AiOutlineCloseSquare />
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      textTransform: "capitalize",
                      color: `${darkMode ? "#ffffff" : "#040404"}`,
                    }}
                  >
                    {t("CLOSE")}
                  </Typography>
                </Button>
                <GradientButtonPrimary
                  type="submit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="span" color="secondary">
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
      )}
    </>
  );
};

export default KYCInterface;
