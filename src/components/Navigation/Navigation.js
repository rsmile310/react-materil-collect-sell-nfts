import React, { useState } from "react";
// Material UI components
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// Gradient buttons
import {
  GradientButtonPrimary,
  GradientButtonSecondary,
} from "../../Utils/GradientButtons/GradientButtons";

import ConnectWalletPopUp from "../ConnectWalletPopUp/ConnectWalletPopUp";

import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

// Icons
import { BsTwitch } from "react-icons/bs";
import { HiCubeTransparent } from "react-icons/hi";
import { MdGavel } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { TiCancel } from "react-icons/ti";

import MetaMaskIcon from "../../assets/Icons/darkUIIcons/metaMaskIcon.svg";
import MobileNavigation from "./MobileNavigation";

const Navigation = ({ darkMode }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  const openMenu = Boolean(anchorEl);

  const handleClickTrigger = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleConnectWallet = async () => {
    handleCloseModal();
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    }
  };

  const handleDisconnectWallet = () => {
    if (walletAddress) {
      window.location.reload();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        paddingTop: `${!isMobile ? "9rem" : "0"}`,
        // marginBottom: "-10rem",
      }}
    >
      {!isMobile ? (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 300000,
            position: "fixed",
            top: "0%",
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            pt: 3,
            pb: 2,
          }}
        >
          <Box>
            <Stack direction="row" spacing={5}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/home")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span" mt={1}>
                  <BsTwitch />
                </Typography>
                <Typography
                  sx={
                    location.pathname === "/home"
                      ? {
                          borderBottom: `2px solid ${
                            darkMode ? "#ffffff" : "#171c26"
                          }`,
                        }
                      : null
                  }
                  variant="subtitle1"
                  component="span"
                  fontWeight={500}
                >
                  {t("NAV_HOME")}
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/explore?type=all")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span" mt={0.5}>
                  <HiCubeTransparent />
                </Typography>
                <Typography
                  sx={
                    location.pathname === "/explore"
                      ? {
                          borderBottom: `2px solid ${
                            darkMode ? "#ffffff" : "#171c26"
                          }`,
                        }
                      : null
                  }
                  variant="subtitle1"
                  component="span"
                  fontWeight={500}
                >
                  {t("NAV_EXPLORE")}
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/auction?type=live")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span" mt={0.5}>
                  <MdGavel />
                </Typography>
                <Typography
                  sx={
                    location.pathname === "/auction"
                      ? {
                          borderBottom: `2px solid ${
                            darkMode ? "#ffffff" : "#040708"
                          }`,
                        }
                      : null
                  }
                  variant="subtitle1"
                  component="span"
                  fontWeight={500}
                >
                  {t("NAV_AUCTION")}
                </Typography>
              </Button>
            </Stack>
          </Box>
          <Box style={{ display: "flex", gap: "1rem", marginRight: "2.8rem" }}>
            <GradientButtonPrimary
              onClick={() => navigate("/create-asset")}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography color="#ffffff" component="span" mt={0.8}>
                <MdAddToPhotos />
              </Typography>
              <Typography variant="subtitle1" component="span">
                {t("NAV_CREATE_ASSET")}
              </Typography>
            </GradientButtonPrimary>
            {walletAddress ? (
              <GradientButtonSecondary
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleClickTrigger}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={MetaMaskIcon}
                  alt="Meta Mask Icon"
                />
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {walletAddress.slice(0, 10)} <BsChevronDown />
                </Typography>
              </GradientButtonSecondary>
            ) : (
              <GradientButtonSecondary
                onClick={handleOpenModal}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography color="#ffffff" component="span" mt={0.8}>
                  <FaWallet />
                </Typography>
                <Typography variant="subtitle1" component="span">
                  {t("NAV_CONNECT_WALLET")}
                </Typography>
              </GradientButtonSecondary>
            )}
          </Box>
        </Container>
      ) : (
        <MobileNavigation
          darkMode={darkMode}
          walletAddress={walletAddress}
          openMenu={openMenu}
          handleClickTrigger={handleClickTrigger}
          handleOpenModal={handleOpenModal}
        />
      )}
      {/* )} */}
      <ConnectWalletPopUp
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        darkMode={darkMode}
        handleConnectWallet={handleConnectWallet}
        handleDisconnectWallet={handleDisconnectWallet}
        walletAddress={walletAddress}
      />
      {!isMobile ? (
        <Menu
          id="basic-menu"
          PaperProps={{
            style: {
              backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
              padding: "0 10px",
              borderRadius: "10px",
            },
          }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          style={{ marginTop: "12px" }}
        >
          <MenuItem
            style={{
              width: "200px",
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              paddingLeft: "2rem",
              gap: 15,
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            onClick={() => navigate("/user/dummy")}
          >
            <Typography component="span" color="secondary">
              <IoPersonSharp />
            </Typography>
            <Typography color="secondary">{t("MY_PROFILE")}</Typography>
          </MenuItem>
          <MenuItem
            style={{
              width: "200px",
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              paddingLeft: "2rem",
              gap: 15,
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            onClick={handleDisconnectWallet}
          >
            <Typography component="span" color="secondary">
              <TiCancel />
            </Typography>
            <Typography color="secondary">{t("DISCONNECT")}</Typography>
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
              borderRadius: "10px",
              padding: "0 10px",
            },
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          style={{ marginTop: "-2rem" }}
        >
          <MenuItem
            style={{
              width: "130px",
              gap: 10,
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            {darkMode ? (
              <img
                style={{ height: "20px", width: "20px" }}
                src={MetaMaskIcon}
                alt="Metamask"
              />
            ) : (
              <img
                style={{ height: "20px", width: "20px" }}
                src={MetaMaskIcon}
                alt="Metamask"
              />
            )}
            <Typography
              variant="body1"
              color="secondary"
              sx={{ fontSize: "12px" }}
            >
              {walletAddress.slice(0, 10)}
            </Typography>
          </MenuItem>
          <MenuItem
            style={{
              width: "130px",
              gap: 10,
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            onClick={() => navigate("/user/dummy")}
          >
            <Typography component="span" color="secondary">
              <IoPersonSharp />
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              sx={{ fontSize: "12px" }}
            >
              {t("MY_PROFILE")}
            </Typography>
          </MenuItem>
          <MenuItem
            style={{
              width: "130px",
              gap: 10,
              backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
              borderRadius: "10px",
            }}
            onClick={handleDisconnectWallet}
          >
            <Typography component="span" color="secondary">
              <TiCancel />
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              sx={{ fontSize: "12px" }}
            >
              {t("DISCONNECT")}
            </Typography>
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default Navigation;
