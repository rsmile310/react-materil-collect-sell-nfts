import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./EditProfile.css";

import { styled } from "@mui/material/styles";

// Avatar
import UserAvatar from "../../assets/userProfileAvatar.png";

// Icons
import { FiSave } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { IoCameraSharp, IoCloseCircle } from "react-icons/io5";
// import SaveIconLight from "../../assets/Icons/lightUIIcons/saveIcon.svg";

// Gradient Button
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// React router dom
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { RiCameraOffFill } from "react-icons/ri";

// Custom input style
const Input = styled("input")({
  display: "none",
});

const EditProfile = ({ darkMode }) => {
  const [userMail, setUserMail] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState(null);

  const [mailError, setMailError] = React.useState("");
  const [avatarError, setAvatarError] = React.useState("");

  const { t } = useTranslation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isMail = (userEmail) => {
    return /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      userEmail
    );
  };

  const handleImageUpload = (e) => {
    setUserAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitEditProfile = (e) => {
    e.preventDefault();

    if (!isMail(userMail)) {
      setMailError("Looks like it is not an email");
      return;
    } else {
      setMailError("");
    }

    if (!userAvatar) {
      setAvatarError("Please upload a profile photo of yours!");
      return;
    } else {
      setAvatarError("");
    }
  };

  return (
    <>
      {!isMobile ? (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            postion: "relative",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              p: 5,
              borderRadius: "10px",
            }}
          >
            <Box sx={{ textAlign: "center", position: "relative" }}>
              {!userAvatar ? (
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                  }}
                  src={UserAvatar}
                  alt="User Name"
                />
              ) : (
                <Avatar
                  src={userAvatar}
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                  }}
                />
              )}
              {!userAvatar ? (
                <Box
                  sx={{ position: "absolute", left: "5.2%", bottom: "-24%" }}
                >
                  <Box>
                    <label htmlFor="icon-button-file-upload">
                      <Input
                        accept="image/*"
                        id="icon-button-file-upload"
                        type="file"
                        onChange={handleImageUpload}
                      />
                      <IconButton aria-label="upload picture" component="span">
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={25}
                        >
                          <IoCameraSharp />
                        </Typography>
                      </IconButton>
                    </label>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{ position: "absolute", left: "5.2%", bottom: "-24%" }}
                >
                  <IconButton onClick={() => setUserAvatar(null)}>
                    <Typography
                      component="span"
                      color="secondary"
                      fontSize={25}
                    >
                      <RiCameraOffFill />
                    </Typography>
                  </IconButton>
                </Box>
              )}
            </Box>
            {avatarError && (
              <Typography
                variant="caption"
                component="p"
                sx={{ color: "red", mt: 2 }}
              >
                {avatarError}
              </Typography>
            )}
            <Box
              onSubmit={handleSubmitEditProfile}
              sx={{ mt: 5 }}
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
                  htmlFor="fullName"
                >
                  {t("FULL_NAME")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="text"
                  placeholder={t("EDIT_PROFILE_ENTER_FULL_NAME_HERE")}
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
              {/* User Name */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="userName"
                >
                  {t("USER_NAME")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="text"
                  placeholder={t("EDIT_PROFILE_ENTER_YOUR_USER_NAME_HERE")}
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
              {/* Email */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="userEmail"
                >
                  {t("EMAIL")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="email"
                  placeholder={t("EDIT_PROFILE_ENTER_EMAIL_HERE")}
                  name="userEmail"
                  onChange={(e) => setUserMail(e.target.value)}
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                    width: "90%",
                  }}
                  required
                />
                {mailError && (
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{ color: "red" }}
                  >
                    {mailError}
                  </Typography>
                )}
              </Stack>
              {/* Mobile Number */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  htmlFor="mobileNumber"
                >
                  {t("MOBILE_NUMBER")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="number"
                  placeholder={t("EDIT_PROFILE_ENTER_MOBILE_NUMBER_HERE")}
                  name="userMobileNumber"
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
              <Box
                sx={{
                  mt: 8,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                  mr: 1,
                  // width: "90%",
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
                  <Typography component="span" color="secondary" mt={1}>
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
                  <Typography component="span" color="#ffffff" mt={1}>
                    <FiSave />
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      textTransform: "capitalize",
                      color: "#ffffff",
                    }}
                  >
                    {t("SAVE")}
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
            postion: "relative",
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
              {t("SETTINGS_EDIT_PROFILE")}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#121212" : "#fff2f8"}`,
              p: 3,
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {!userAvatar ? (
                <Avatar
                  sx={{
                    width: "80px",
                    height: "80px",
                    border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                  }}
                  src={UserAvatar}
                  alt="User Name"
                />
              ) : (
                <Avatar
                  src={userAvatar}
                  sx={{
                    width: "80px",
                    height: "80px",
                    border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                  }}
                />
              )}
              {!userAvatar ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Box>
                    <label htmlFor="icon-button-file-upload">
                      <Input
                        accept="image/*"
                        id="icon-button-file-upload"
                        type="file"
                        onChange={handleImageUpload}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <Typography component="span" color="secondary">
                          <IoCameraSharp />
                        </Typography>
                      </IconButton>
                    </label>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <IconButton onClick={() => setUserAvatar(null)}>
                    <Typography component="span" color="secondary">
                      <IoCloseCircle />
                    </Typography>
                  </IconButton>
                </Box>
              )}
            </Box>
            {avatarError && (
              <Typography
                variant="caption"
                component="p"
                sx={{ color: "red", mt: 2, textAlign: "center" }}
              >
                {avatarError}
              </Typography>
            )}
            <Box
              onSubmit={handleSubmitEditProfile}
              sx={{ mt: 3 }}
              component="form"
            >
              {/* Full Name */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="fullName"
                >
                  {t("FULL_NAME")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="text"
                  placeholder={t("EDIT_PROFILE_ENTER_FULL_NAME_HERE")}
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
              {/* User Name */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="userName"
                >
                  {t("USER_NAME")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="text"
                  placeholder={t("EDIT_PROFILE_ENTER_YOUR_USER_NAME_HERE")}
                  name="userName"
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
              {/* Email */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="userEmail"
                >
                  {t("EMAIL")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="email"
                  placeholder={t("EDIT_PROFILE_ENTER_EMAIL_HERE")}
                  name="userEmail"
                  onChange={(e) => setUserMail(e.target.value)}
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                  }}
                  required
                />
                {mailError && (
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{ color: "red" }}
                  >
                    {mailError}
                  </Typography>
                )}
              </Stack>
              {/* Mobile Number */}
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#040404"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="mobileNumber"
                >
                  {t("MOBILE_NUMBER")} *
                </label>
                <input
                  className={darkMode && "inputField"}
                  type="number"
                  placeholder={t("EDIT_PROFILE_ENTER_MOBILE_NUMBER_HERE")}
                  name="userMobileNumber"
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
              <Box
                sx={{
                  mt: 3,
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
                  <Typography component="span" color="#ffffff">
                    <FiSave />
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      textTransform: "capitalize",
                      color: "#ffffff",
                    }}
                  >
                    {t("SAVE")}
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

export default EditProfile;
