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
  BsGearFill,
  BsLightningFill,
  BsCashCoin,
  BsTrophyFill,
  BsBasket2Fill,
  BsInfoCircle,
  BsFillBookmarkFill,
  BsChatTextFill,
} from "react-icons/bs";
import { IoFlame } from "react-icons/io5";
import { RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { MdLock } from "react-icons/md";
import { CgLoadbarDoc } from "react-icons/cg";
import { GoLaw } from "react-icons/go";
import { IoPersonSharp, IoDiamondSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosSwitch } from "react-icons/io";
// Modules
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Logos
import SideFooterLogoLight from "../../assets/genzers-mainLogo-test2.png";
import SideFooterLogoDark from "../../assets/genzers-mainLogo-test2.png";

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
    name: "SETTINGS_USER_ASSETS",
    icon: <IoDiamondSharp />,
    path: "/profile/assets",
  },
  {
    id: 3,
    name: "SETTINGS_USER_FAVOURITES",
    icon: <BsFillBookmarkFill />,
    path: "/profile/favourites?type=nft-bookmark",
  },
  {
    id: 4,
    name: "SETTINGS_RB",
    icon: <BsChatTextFill />,
    path: "/profile/refer-buyers",
  },
  {
    id: 5,
    name: "SETTINGS_RC",
    icon: <HiSpeakerphone />,
    path: "/profile/refer-creators",
  },
  {
    id: 6,
    name: "SETTINGS_THEME",
    icon: <IoIosSwitch />,
    path: "/profile/theme",
  },
];

const profileSideMenu2 = [
  {
    id: 1,
    name: "FOOTER_LINK_FAQS",
    icon: <BsQuestionOctagonFill />,
    path: "/frequently-asked-questions",
  },
  {
    id: 2,
    name: "FOOTER_LINK_TERMS_CONDITION",
    icon: <CgLoadbarDoc />,
    path: "/terms-and-condition",
  },
  {
    id: 3,
    name: "FOOTER_LINK_PRIVACY_POLICY",
    icon: <MdLock />,
    path: "/privacy-policy",
  },
  {
    id: 4,
    name: "FOOTER_LINK_DISCLAIMER",
    icon: <GoLaw />,
    lightIcon: <GoLaw />,
    path: "/disclaimer",
  },
  {
    id: 5,
    name: "FOOTER_LINK_CONTACT_US",
    icon: <GiBugleCall />,
    lightIcon: <GiBugleCall />,
    path: "/contact-us",
  },
];

// Drawer width for mobile ui
const drawerWidth = 245;


const SideDrawer = ({ darkMode, mobileOpen, handleDrawerToggle }) => {
  // Settings toggler
  const [settingsExpanded, setSettingsExpanded] = React.useState(false);
  const [settingsExpanded2, setSettingsExpanded2] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Settings expand toggler
  const handleSettingsExpand = () => {
    setSettingsExpanded(!settingsExpanded);
  };
  const handleSettingsExpand2 = () => {
    setSettingsExpanded2(!settingsExpanded2);
  };

  // Click handler
  const handleReRouting = (path) => {
    navigate(path);
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      bgcolor={darkMode ? "#171c26" : "#fff2f8"}
      sx={{ overflowX: "hidden", height: "100vh" }}
    >
      {/* App Toolbar */}
          <Toolbar
              sx={{
                  minHeight: 10,
                  '@media (min-width: 600px)': {
                      minHeight: "10px"
                  },
                   '@media (min-width: 0px)': {
                      minHeight: "10px"
                  }
              }}
          />
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
          `/trending-nfts${location.pathname.slice(17)}` ? (
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
            onClick={() => handleReRouting("/trending-nfts?type=all")}
          >
            {location.pathname === "/trending-nfts" ? (
              <Typography component="span" color="#ffffff">
                <BsLightningFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsLightningFill />
              </Typography>
            )}

            <Typography color="secondary" variant="body2" component="span">
              {t("TRENDING_NFTS")}
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
          {location.pathname ===
          `/trending-nfts${location.pathname.slice(17)}` ? (
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
            onClick={() => handleReRouting("/trending-nfts?type=all")}
          >
            {location.pathname === "/trending-nfts" ? (
              <Typography component="span" color="#ffffff">
                <BsLightningFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsLightningFill />
              </Typography>
            )}

            <Typography color="secondary" variant="body2" component="span">
              {t("TRENDING_NFTS")}
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
                <IoFlame />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <IoFlame />
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
          {location.pathname === "/ranking" ? (
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
            onClick={() => handleReRouting("/ranking")}
          >
            {location.pathname === "/ranking" ? (
              <Typography component="span" color="#ffffff">
                <BsTrophyFill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsTrophyFill />
              </Typography>
            )}
            <Typography color="secondary" variant="body2" component="span">
              {t("RANKING")}
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
          {location.pathname === "/affiliates" ? (
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
            onClick={() => handleReRouting("/affiliates")}
          >
            {location.pathname === "/affiliates" ? (
              <Typography component="span" color="#ffffff">
                <BsCashCoin />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsCashCoin />
              </Typography>
            )}
            <Typography color="secondary" variant="body2" component="span">
              {t("AFFILIATES")}
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
          {location.pathname === "/merchandise" ? (
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
            onClick={() => handleReRouting("/merchandise")}
          >
            {location.pathname === "/merchandise" ? (
              <Typography component="span" color="#ffffff">
                <BsBasket2Fill />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsBasket2Fill />
              </Typography>
            )}
            <Typography color="secondary" variant="body2" component="span">
              {t("MERCHANDISE")}
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
        <ListItem
          disablePadding
          sx={{
            my: 1,
            display: "flex",
            position: "relative",
            ml: 3,
          }}
        >
          {location.pathname === `/` ? (
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
            onClick={handleSettingsExpand2}
          >
            {location.pathname === `/` ? (
              <Typography component="span" color="#ffffff">
                <BsInfoCircle />
              </Typography>
            ) : (
              <Typography component="span" color="secondary">
                <BsInfoCircle />
              </Typography>
            )}
            <Typography
              color="secondary"
              variant="body2"
              component="span"
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              {t("INFO")}
              {settingsExpanded2 ? (
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
        {settingsExpanded2 && (
          <>
            {profileSideMenu2.map((pfs) => (
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
              <img src={SideFooterLogoDark} alt="GenZers NFT - Marketplace" />
            ) : (
              <img
                src={SideFooterLogoLight}
                alt="GenZers ART - NFT Marketplace"
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
