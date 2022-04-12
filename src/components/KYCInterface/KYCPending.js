import React, { useEffect } from "react";
import {
  Button,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

// Icons
import { HiCubeTransparent } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

// Gradient Button
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Image
import KYCPendingImg from "../../assets/kycPendingImg.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const KYCPending = ({ darkMode }) => {
  const [checkedSwitch, setCheckedSwitch] = React.useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChangeSwitch = (event) => {
    setCheckedSwitch(event.target.checked);
  };

  useEffect(() => {
    if (checkedSwitch) {
      navigate("/profile/kyc-approved");
    }
  }, [checkedSwitch, navigate]);

  return (
    <>
      {!isMobile ? (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            borderRadius: "10px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: 4, display: "flex" }}>
            <Box>
              <Typography
                sx={{ textTransform: "uppercase", fontSize: "24px", mb: 5 }}
                variant="h6"
                component="h5"
                color="secondary"
              >
                {t("KYC_IN_PROGRESS")}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 6 }}>
                {t("KYC_PROGRESS_INFO")}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 7 }}>
                <Button
                  variant="contained"
                  color="black"
                  disableElevation
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    textTransform: "capitalize",
                  }}
                >
                  <Typography component="span" color="secondary">
                    <FiDownload />
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {t("DOWNLOAD")}
                  </Typography>
                </Button>
                <GradientButtonPrimary
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="span" color="#ffffff" mt={0.5}>
                    <HiCubeTransparent />
                  </Typography>
                  <Typography variant="body2" color="#ffffff">
                    {t("NAV_EXPLORE")}
                  </Typography>
                </GradientButtonPrimary>
              </Stack>
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: -2 }}>
                <Switch
                  color="warning"
                  sx={{
                    backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                    borderRadius: "4px",
                  }}
                  checked={checkedSwitch}
                  onChange={handleChangeSwitch}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>
              <img src={KYCPendingImg} alt="KYC Pending Illustration" />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            color: `${darkMode ? "#ffffff" : "#040404"}`,
            backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
            borderRadius: "10px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            p: 3,
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
              {t("SETTINGS_KYC_PENDING")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column-reverse", pb: 3 }}>
            <Box>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  mt: 3,
                  mb: 2,
                }}
                variant="h6"
                component="h5"
                color="secondary"
              >
                {t("KYC_IN_PROGRESS")}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                {t("KYC_PROGRESS_INFO")}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="black"
                  disableElevation
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    textTransform: "capitalize",
                  }}
                >
                  <Typography component="span" color="secondary">
                    <FiDownload />
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {t("DOWNLOAD")}
                  </Typography>
                </Button>
                <GradientButtonPrimary
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="span" color="secondary">
                    <HiCubeTransparent />
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {t("NAV_EXPLORE")}
                  </Typography>
                </GradientButtonPrimary>
              </Stack>
            </Box>
            <Box>
              <img
                style={{ width: "90%", display: "block", margin: "0 auto" }}
                src={KYCPendingImg}
                alt="KYC Pending Illustration"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default KYCPending;
