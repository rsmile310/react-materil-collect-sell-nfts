import React from "react";

// Material UI components
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";

// Icons
import {
  BsFillStarFill,
  BsLightbulbFill,
  BsFillBookmarkFill,
  BsGearFill,
  BsTwitch,
} from "react-icons/bs";
import { HiCubeTransparent } from "react-icons/hi";
import { MdGavel } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

// Main logo
import MainLogo from "../../assets/mainLogo.svg";
import MainLogoLight from "../../assets/mainLogoLight.svg";

import { useLocation, useNavigate } from "react-router-dom";

// Side Navigation Shadow
import SideShadow from "../../assets/sideNavigationShadow.svg";

// Theme
import { useTheme } from "@emotion/react";

import { useTranslation } from "react-i18next";
import SideDrawer from "./SideDrawer";

const topBarContent = [
  {
    path: "/home",
    name: "NAV_HOME",
    darkIcon: <BsTwitch />,
  },
  {
    path: "/explore",
    name: "NAV_EXPLORE",
    darkIcon: <HiCubeTransparent />,
  },
  {
    path: "/auction",
    name: "NAV_AUCTION",
    darkIcon: <MdGavel />,
  },
];

const SideBar = ({ darkMode }) => {
  // For mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  // State for opening the drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Mobile drawer toggler
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {isMobile ? (
        <AppBar
          sx={{
            pt: 3,
            px: 4,
            zIndex: 3000,
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
          }}
          position="fixed"
          elevation={0}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              {darkMode ? (
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={MainLogo}
                  alt="MainLogo"
                />
              ) : (
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={MainLogoLight}
                  alt="MainLogoLight"
                />
              )}
            </Box>
            <Box mt={-1.5}>
              <Typography
                color="secondary"
                variant="subtitle1"
                component="div"
                sx={{
                  ml: -2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {topBarContent.map(
                  (tbc) =>
                    tbc.path === location.pathname && (
                      <React.Fragment key={tbc.name}>
                        <Typography
                          component="span"
                          color="secondary"
                          mt={1}
                          fontSize={20}
                        >
                          {tbc.darkIcon}
                        </Typography>
                        <Typography
                          color="secondary"
                          component="p"
                          variant="subtitle1"
                          sx={{
                            borderBottom: `2px solid ${
                              darkMode ? "#ffffff" : "#040404"
                            }`,
                          }}
                        >
                          {t(`${tbc.name}`)}
                        </Typography>
                      </React.Fragment>
                    )
                )}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={handleDrawerToggle}>
                <Typography component="span" color="secondary">
                  <CgMenuRight fontSize={20} />
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      ) : null}
      {!isMobile ? (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "fixed",
              marginTop: "-3rem",
              marginLeft: "-1rem",
              width: "200px",
              minHeight: "100%",
            }}
          >
            <img
              style={{
                width: "80%",
                height: "50%",
                display: "block",
              }}
              src={SideShadow}
              alt="Bakcdrop"
            />
          </div>
          <div
            style={{
              position: "fixed",
              zIndex: "1000",
              marginTop: "-8rem",
              marginLeft: "-6rem",
            }}
          >
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  ml: 3,
                  width: "60px",
                }}
              >
                {darkMode ? (
                  <img
                    style={{ display: "block" }}
                    src={MainLogo}
                    alt="Minto"
                  />
                ) : (
                  <img
                    style={{ display: "block" }}
                    src={MainLogoLight}
                    alt="Minto"
                  />
                )}
              </Box>
              <Box
                bgcolor={darkMode ? "#171c26" : "#FFF5F9"}
                style={{
                  marginTop: "5rem",
                  borderRadius: "20px",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <ListItem
                    disablePadding
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname ===
                    `/trending-sellers${location.pathname.slice(17)}` ? (
                      <div
                        style={{
                          background:
                            "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                          borderRadius: "4px",
                          width: "100px",
                          height: "40px",
                          position: "absolute",
                          marginRight: "3rem",
                        }}
                      ></div>
                    ) : null}
                    <IconButton
                      onClick={() => navigate(`${"/trending-sellers"}`)}
                    >
                      {location.pathname === "/trending-sellers" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsFillStarFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsFillStarFill />
                        </Typography>
                      )}
                    </IconButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname === "/trending-creators" ? (
                      <div
                        style={{
                          background:
                            "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                          borderRadius: "4px",
                          width: "100px",
                          height: "40px",
                          position: "absolute",
                          marginRight: "3rem",
                        }}
                      ></div>
                    ) : null}
                    <IconButton
                      onClick={() => navigate(`${"/trending-creators"}`)}
                    >
                      {location.pathname === "/trending-creators" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsLightbulbFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsLightbulbFill />
                        </Typography>
                      )}
                    </IconButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname === "/favourites" ? (
                      <div
                        style={{
                          background:
                            "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                          borderRadius: "4px",
                          width: "100px",
                          height: "40px",
                          position: "absolute",
                          marginRight: "3rem",
                        }}
                      ></div>
                    ) : null}
                    <IconButton
                      onClick={() =>
                        navigate(`${"/favourites?type=nft-bookmark"}`)
                      }
                    >
                      {location.pathname === "/favourites" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsFillBookmarkFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsFillBookmarkFill />
                        </Typography>
                      )}
                    </IconButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname ===
                    `/profile${location.pathname?.slice(8)}` ? (
                      <div
                        style={{
                          background:
                            "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                          borderRadius: "4px",
                          width: "100px",
                          height: "40px",
                          position: "absolute",
                          marginRight: "3rem",
                        }}
                      ></div>
                    ) : null}
                    <IconButton
                      onClick={() => navigate(`${"/profile/user-profile"}`)}
                    >
                      {location.pathname ===
                      `/profile${location.pathname?.slice(8)}` ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsGearFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsGearFill />
                        </Typography>
                      )}
                    </IconButton>
                  </ListItem>
                </List>
              </Box>
            </div>
          </div>
        </div>
      ) : null}
      {/* Drawer will render only for mobile devices */}
      {isMobile ? (
        <>
          <SideDrawer
            darkMode={darkMode}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </>
      ) : null}
    </>
  );
};

export default SideBar;
