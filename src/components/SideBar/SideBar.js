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
//Flame
import { IoFlame } from "react-icons/io5";
// Icons
import {
  //BsFillStarFill,
  BsLightningFill,
  BsCashCoin,
  BsTrophyFill,
  BsBasket2Fill,
  BsGearFill,
  BsHouseFill,
} from "react-icons/bs";
import { HiCubeTransparent } from "react-icons/hi";
import { MdGavel } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import Tooltip from '@mui/material/Tooltip';

// Main logo
//import MainLogo from "../../assets/genzers-mainLogo-test2.png";
//import MainLogoLight from "../../assets/genzers-mainLogo-test2.png";

import { useLocation, useNavigate } from "react-router-dom";

// Side Navigation Shadow
import SideShadow from "../../assets/sideNavigationShadow.svg";

// Theme
import { useTheme } from "@emotion/react";

import { useTranslation } from "react-i18next";
import SideDrawer from "./SideDrawer";

import * as Realm from "realm-web";
const APP_ID = "data-qewhf";
const app = new Realm.App({id: APP_ID});

const topBarContent = [
  {
    path: "/home",
    name: "NAV_HOME",
    darkIcon: <BsHouseFill />,
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
  const [user, setUser] = React.useState(app.currentUser);
  //const user = localStorage.getItem("user");
  
  //console.log("sidebar user:", user);
  
  return (
    <>
      {isMobile ? (
        <AppBar
          sx={{
            pt: 3,
            px: 4,
            zIndex: 600050,
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
            <Box
                sx={{
                  zIndex: 600050,
                }}>
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
            <Box
                sx={{
                  zIndex: 600050,
                }}>
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
              marginLeft: "0rem",
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
              zIndex: "10000",
              marginTop: "-4rem",
              marginLeft: "-4rem",
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
              </Box>
              <Box
                bgcolor={darkMode ? "#171c26" : "#FFF5F9"}
                style={{
                  marginTop: "1rem",
                  borderRadius: "20px",
                  zIndex: 600050,
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 600050,
                  }}
                >
             {/*<ListItem
                    disablePadding
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname ===
                    `/featured${location.pathname.slice(17)}` ? (
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
                    <Tooltip title="Featured NFTs" placement="right">
                    <IconButton
                      onClick={() => navigate(`${"/featured"}`)}
                    >
                      {location.pathname === "/featured" ? (
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
                     </Tooltip>
                  </ListItem> */}
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname ===
                    `/trending-nfts${location.pathname.slice(17)}` ? (
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
                    <Tooltip title="&nbsp; Trending NFTs" placement="right">
                    <IconButton
                      onClick={() => navigate(`${"/trending-nfts?type=all"}`)}
                    >
                      {location.pathname === "/trending-nfts" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsLightningFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsLightningFill />
                        </Typography>
                      )}
                    </IconButton>
                    </Tooltip>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
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
                    <Tooltip title="&nbsp; Trending Creators" placement="right" style={{zIndex: "900000", overflow: "visible",}}>
                    <IconButton
                      onClick={() => navigate(`${"/trending-creators"}`)}
                    >
                      {location.pathname === "/trending-creators" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <IoFlame />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <IoFlame />
                        </Typography>
                      )}
                    </IconButton>
                    </Tooltip>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname === "/ranking" ? (
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
                    <Tooltip title="&nbsp; Creator & Seller Ranking" placement="right">
                    <IconButton
                      onClick={() => navigate(`${"/ranking"}`)}
                    >
                      {location.pathname === "/ranking" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsTrophyFill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsTrophyFill />
                        </Typography>
                      )}
                    </IconButton>
                    </Tooltip>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname === "/affiliates" ? (
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
                    <Tooltip title="&nbsp; Our Affiliate Program" placement="right">
                    <IconButton
                      onClick={() => navigate(`${"/affiliates"}`)}
                    >
                      {location.pathname === "/affiliates" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsCashCoin />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsCashCoin />
                        </Typography>
                      )}
                    </IconButton>
                    </Tooltip>
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {location.pathname === "/merchandise" ? (
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
                    <Tooltip title="&nbsp; Merchandise Store" placement="right">
                    <IconButton
                      onClick={() => navigate(`${"/merchandise"}`)}
                    >
                      {location.pathname === "/merchandise" ? (
                        <Typography
                          component="span"
                          color="#ffffff"
                          fontSize={20}
                        >
                          <BsBasket2Fill />
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          color="secondary"
                          fontSize={20}
                        >
                          <BsBasket2Fill />
                        </Typography>
                      )}
                    </IconButton>
                    </Tooltip>
                  </ListItem>
                {/*
                  <ListItem
                    disablePadding
                    sx={{
                      my: 1,
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
                    <Tooltip title="&nbsp; Profile & Settings" placement="right">
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
                    </Tooltip>
                  </ListItem>*/}
                  {window.WID  ? <ListItem
                    disablePadding
                    sx={{
                      my: 1,
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
                    <Tooltip title="&nbsp; Profile & Settings" placement="right">
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
                    </Tooltip>
                  </ListItem> : <ListItem
                    disablePadding
                    sx={{
                      my: 0,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                  </ListItem>}
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
