import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsTwitch } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import { MdAddToPhotos, MdGavel } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

// Metamask Icon
import MetaMaskIcon from "../../assets/Icons/darkUIIcons/metaMaskIcon.svg";
import MetaMaskIconLight from "../../assets/Icons/lightUIIcons/metaMaskIcon.svg";

const MobileNavigation = ({
  darkMode,
  walletAddress,
  openMenu,
  handleClickTrigger,
  handleOpenModal,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 30000,
          bottom: 0,
          backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
          left: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              width: "100%",
            }}
          >
            <Box>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={() => navigate("/home")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span">
                  <BsTwitch />
                </Typography>
                <Typography
                  component="p"
                  sx={
                    location.pathname === "/home"
                      ? {
                          borderRadius: "50%",
                          height: "5px",
                          width: "5px",
                          backgroundColor: `${
                            darkMode ? "#ffffff" : "#040708"
                          }`,
                        }
                      : null
                  }
                ></Typography>
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={() => navigate("/explore?type=all")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span">
                  <HiCubeTransparent />
                </Typography>
                <Typography
                  component="p"
                  sx={
                    location.pathname === "/explore"
                      ? {
                          borderRadius: "50%",
                          height: "5px",
                          width: "5px",
                          backgroundColor: `${
                            darkMode ? "#ffffff" : "#040708"
                          }`,
                        }
                      : null
                  }
                ></Typography>
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={() => navigate("/auction?type=live")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span">
                  <MdGavel />
                </Typography>
                <Typography
                  component="p"
                  sx={
                    location.pathname === "/auction"
                      ? {
                          borderRadius: "50%",
                          height: "5px",
                          width: "5px",
                          backgroundColor: `${
                            darkMode ? "#ffffff" : "#040708"
                          }`,
                        }
                      : null
                  }
                ></Typography>
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={() => navigate("/create-asset")}
                variant="text"
                color="secondary"
              >
                <Typography color="secondary" component="span">
                  <MdAddToPhotos />
                </Typography>
                <Typography
                  component="p"
                  sx={
                    location.pathname === "/create-asset"
                      ? {
                          borderRadius: "50%",
                          height: "5px",
                          width: "5px",
                          backgroundColor: `${
                            darkMode ? "#ffffff" : "#040708"
                          }`,
                        }
                      : null
                  }
                ></Typography>
              </Button>
            </Box>
            {walletAddress ? (
              <Box>
                <Button
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClickTrigger}
                  variant="text"
                  color="secondary"
                >
                  {darkMode ? (
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={MetaMaskIcon}
                      alt="Meta Mask Icon"
                    />
                  ) : (
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={MetaMaskIconLight}
                      alt="Meta Mask Icon"
                    />
                  )}
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={handleOpenModal}
                >
                  <Typography color="secondary" component="span">
                    <FaWallet />
                  </Typography>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MobileNavigation;
