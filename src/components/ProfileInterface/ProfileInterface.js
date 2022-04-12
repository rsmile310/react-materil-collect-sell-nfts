import React from "react";
import { Avatar, IconButton, Typography, useMediaQuery } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

// Avatar
import UserAvatar from "../../assets/userProfileAvatar.png";

import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { FiEdit } from "react-icons/fi";

import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const userInformation = [
  {
    id: "1",
    userFullName: "Rajesh Verma",
    userName: "Rverma",
    userEmail: "rajeshvarma@gmail.com",
    userMobileNumber: "+91-8091876468",
  },
];

const ProfileInterface = ({ darkMode }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {!isMobile ? (
        <>
          {location.pathname === "/profile/user/edit-profile" ? (
            <Box
              sx={{
                color: `${darkMode ? "#ffffff" : "#040404"}`,
                backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Outlet />
            </Box>
          ) : (
            <Box
              sx={{
                color: `${darkMode ? "#ffffff" : "#040404"}`,
                backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                  backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 6,
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Box sx={{ textAlign: "center", position: "relative" }}>
                  <Avatar
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                    }}
                    src={UserAvatar}
                    alt="User Name"
                  />
                </Box>
                <Box>
                  <GradientButtonPrimary
                    onClick={() => navigate("/profile/edit-profile")}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography component="span" color="#ffffff" mt={0.5}>
                      <FiEdit />
                    </Typography>
                    <Typography variant="body1" component="span">
                      {t("EDIT_PROFILE")}
                    </Typography>
                  </GradientButtonPrimary>
                </Box>
              </Box>
              <Box
                sx={{ backgroundColor: `${darkMode ? "#040404" : "#ffffff"}` }}
              >
                <Box sx={{ color: `${darkMode ? "#ffffff" : "#040404"}` }}>
                  {userInformation.map((ui) => (
                    <Box key={ui.id}>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("FULL_NAME")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userFullName}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("USER_NAME")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userName}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("EMAIL")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userEmail}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("MOBILE_NUMBER")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userMobileNumber}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </>
      ) : (
        <>
          {location.pathname === "/profile/user/edit-profile" ? (
            <Box
              sx={{
                color: `${darkMode ? "#ffffff" : "#040404"}`,
                borderRadius: "10px",
              }}
            >
              <Outlet />
            </Box>
          ) : (
            <Box
              sx={{
                color: `${darkMode ? "#ffffff" : "#040404"}`,
                backgroundColor: `${darkMode ? "#121212" : "#fff2f8"}`,
                display: "flex",
                borderRadius: "10px",
                px: 3,
                py: 3,
                gap: 3,
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
                  {t("SETTINGS_USER_PROFILE")}
                </Typography>
              </Box>
              <Box
                sx={{
                  color: `${darkMode ? "#ffffff" : "#040404"}`,
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    ml: -1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: "70px",
                      height: "70px",
                      border: `1px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                    }}
                    src={UserAvatar}
                    alt="User Name"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "3%",
                    top: "2%",
                  }}
                >
                  <IconButton onClick={() => navigate("/profile/edit-profile")}>
                    <Typography component="span" color="secondary">
                      <FiEdit />
                    </Typography>
                  </IconButton>
                </Box>
              </Box>
              <Box
              // sx={{ backgroundColor: `${darkMode ? "#040404" : "#ffffff"}` }}
              >
                <Box sx={{ color: `${darkMode ? "#ffffff" : "#040404"}` }}>
                  {userInformation.map((ui) => (
                    <Box key={ui.id}>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("FULL_NAME")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userFullName}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("USER_NAME")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userName}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("EMAIL")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userEmail}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 200, fontSize: "12px" }}
                        variant="body2"
                        component="p"
                      >
                        {t("MOBILE_NUMBER")}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 2, mt: 0.5 }}
                      >
                        {ui.userMobileNumber}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ProfileInterface;
