import React from "react";

// Material UI components
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

// Icons
import { GiBugleCall } from "react-icons/gi";
import {
  BsChevronDown,
  BsChevronUp,
  BsQuestionOctagonFill,
  BsFillStarFill,
  BsLightbulbFill,
  BsFillBookmarkFill,
  BsGearFill,
} from "react-icons/bs";
import { RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { MdLock } from "react-icons/md";
import { IoPersonSharp, IoLanguage } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { AiFillIdcard } from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";

// Modules
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Logos
import SideFooterLogoLight from "../../assets/sideFooterLogoLight.svg";
import SideFooterLogoDark from "../../assets/sideFooterLogoDark.svg";

// Profile sidemenu content
const profileSideMenu = [
  {
    id: 1,
    name: "SETTINGS_USER_PROFILE",
    icon: <IoPersonSharp />,
    path: "/profile/user-profile",
  },
  {
    id: 2,
    name: "SETTINGS_KYC",
    icon: <AiFillIdcard />,
    path: "/profile/kyc",
  },
  {
    id: 3,
    name: "SETTINGS_LANGUAGE",
    icon: <IoLanguage />,
    path: "/profile/language",
  },
  {
    id: 4,
    name: "SETTINGS_THEME",
    icon: <IoIosSwitch />,
    path: "/profile/theme",
  },
  {
    id: 5,
    name: "FOOTER_LINK_FAQS",
    icon: <BsQuestionOctagonFill />,
    path: "/frequently-asked-questions",
  },
  {
    id: 6,
    name: "FOOTER_LINK_PRIVACY_POLICY",
    icon: <MdLock />,
    path: "/privacy-policy",
  },
  {
    id: 7,
    name: "FOOTER_LINK_TERMS_CONDITION",
    icon: <CgLoadbarDoc />,
    path: "/terms-and-condition",
  },
  {
    id: 8,
    name: "FOOTER_LINK_CONTACT_US",
    icon: <GiBugleCall />,
    lightIcon: <GiBugleCall />,
    path: "/contact-us",
  },
];

// Drawer width for mobile ui
const drawerWidth = 240;

const SideDrawer = ({ darkMode, mobileOpen, handleDrawerToggle }) => {
  // Settings toggler
  const [settingsExpanded, setSettingsExpanded] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Settings expand toggler
  const handleSettingsExpand = () => {
    setSettingsExpanded(!settingsExpanded);
  };

  // Click handler
  const handleReRouting = (path) => {
    navigate(path);
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      bgcolor={darkMode ? "#0A0407" : "#fff2f8"}
      sx={{ overflowX: "hidden", height: "100vh" }}
    >
      {/* App Toolbar */}
      <Toolbar />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListItem
          disablePadding
          sx={{
            my: 1,
            display: "flex",
            position: "relative",
            ml: 3,
          }}
        >
          {location.pathname ===
          `/trending-sellers${location.pathname.slice(17)}` ? (
            <div
              style={{
                background:
                  "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                borderRadius: "4px",
                width: "100%",
                height: "50px",
                position: "absolute",
              }}
            ></div>
          ) : null}
          <IconButton
            sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}
            onClick={() => handleReRouting("/trending-sellers")}
          >
            {location.pathname === "/trending-sellers" ? (
              <Typography component="span" color="#ffffff">
                <BsFillStarFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsFillStarFill />
              </Typography>
            )}

            <Typography color="secondary" variant="body2" component="span">
              {t("TRENDING_SELLERS")}
            </Typography>
          </IconButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            my: 1,
            display: "flex",
            position: "relative",
            ml: 3,
          }}
        >
          {location.pathname === "/trending-creators" ? (
            <div
              style={{
                background:
                  "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                borderRadius: "4px",
                width: "100%",
                height: "50px",
                position: "absolute",
              }}
            ></div>
          ) : null}
          <IconButton
            sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}
            onClick={() => handleReRouting("/trending-creators")}
          >
            {location.pathname === "/trending-creators" ? (
              <Typography component="span" color="#ffffff">
                <BsLightbulbFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsLightbulbFill />
              </Typography>
            )}
            <Typography color="secondary" variant="body2" component="span">
              {t("TRENDING_CREATORS")}
            </Typography>
          </IconButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            my: 1,
            display: "flex",
            position: "relative",
            ml: 3,
          }}
        >
          {location.pathname === "/favourites" ? (
            <div
              style={{
                background:
                  "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                borderRadius: "4px",
                width: "100%",
                height: "50px",
                position: "absolute",
              }}
            ></div>
          ) : null}
          <IconButton
            sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}
            onClick={() => handleReRouting("/favourites?type=nft-bookmark")}
          >
            {location.pathname === "/favourites" ? (
              <Typography component="span" color="#ffffff">
                <BsFillBookmarkFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsFillBookmarkFill />
              </Typography>
            )}
            <Typography color="secondary" variant="body2" component="span">
              {t("FAVOURITES")}
            </Typography>
          </IconButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            my: 1,
            display: "flex",
            position: "relative",
            ml: 3,
          }}
        >
          {location.pathname === `/profile${location.pathname?.slice(8)}` ? (
            <div
              style={{
                background:
                  "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                borderRadius: "4px",
                width: "100%",
                height: "50px",
                position: "absolute",
              }}
            ></div>
          ) : null}
          <IconButton
            sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}
            onClick={handleSettingsExpand}
          >
            {location.pathname === `/profile${location.pathname?.slice(8)}` ? (
              <Typography component="span" color="#ffffff">
                <BsGearFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsGearFill />
              </Typography>
            )}
            <Typography
              color="secondary"
              variant="body2"
              component="span"
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              {t("SETTINGS")}
              {settingsExpanded ? (
                <Typography component="span" color="secondary">
                  <BsChevronDown />
                </Typography>
              ) : (
                <Typography component="span" color="secondary">
                  <BsChevronUp />
                </Typography>
              )}
            </Typography>
          </IconButton>
        </ListItem>
        {settingsExpanded && (
          <>
            {profileSideMenu.map((pfs) => (
              <ListItem
                disablePadding
                sx={{
                  ml: 9,
                  mt: 2,
                }}
                key={pfs.id}
              >
                {location.pathname === pfs.path ? (
                  <div
                    style={{
                      background:
                        "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                      borderRadius: "4px",
                      width: "100%",
                      height: "50px",
                      position: "absolute",
                    }}
                  ></div>
                ) : null}
                <IconButton
                  onClick={() => handleReRouting(`${pfs.path}`)}
                  sx={{ display: "flex", alignItems: "center", gap: 3 }}
                >
                  {location.pathname === pfs.path ? (
                    <Typography component="span" color="#ffffff">
                      {pfs.icon}
                    </Typography>
                  ) : (
                    <Typography component="span" color="secondary">
                      {pfs.icon}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    color="secondary"
                    sx={{ fontSize: "11px" }}
                  >
                    {t(`${pfs.name}`)}
                  </Typography>
                </IconButton>
              </ListItem>
            ))}
          </>
        )}
      </List>
      <Box sx={{ px: 2, mt: 17 }}>
        {!settingsExpanded && (
          <>
            {darkMode ? (
              <img src={SideFooterLogoDark} alt="Side Footer Main Minto Logo" />
            ) : (
              <img
                src={SideFooterLogoLight}
                alt="Side Footer Main Minto Logo"
              />
            )}

            <Typography
              sx={{ color: "#D71869", my: 1 }}
              variant="subtitle2"
              component="h6"
            >
              {t("FOOTER_TITLE_MAIN")}
            </Typography>
            <Typography sx={{ color: "gray" }} variant="caption" component="p">
              {t("FOOTER_DETAILS")}
            </Typography>
          </>
        )}
        <IconButton sx={{ ml: -0.8, mt: 2 }}>
          <Typography component="span" color="secondary">
            <RiTwitterFill />
          </Typography>
        </IconButton>
        <IconButton sx={{ mt: 2 }}>
          <Typography component="span" color="secondary">
            <RiInstagramLine />
          </Typography>
        </IconButton>
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "gray", textAlign: "left", fontSize: "7px", mt: 1 }}
        >
          &copy; 2021 {t("FOOTER_COPYRIGHT")}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* The Drawer Component */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
          zIndex: 200000,
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default SideDrawer;
