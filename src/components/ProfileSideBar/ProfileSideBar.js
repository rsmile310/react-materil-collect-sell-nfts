import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Icons
import { IoPersonSharp, IoDiamondSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosSwitch } from "react-icons/io";
import { BsFillBookmarkFill, BsChatTextFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const profileSideMenu = [
  {
    id: 1,
    name: "SETTINGS_USER_PROFILE",
    icon: <IoPersonSharp />,
    path: "/user-profile",
  },
  {
    id: 2,
    name: "SETTINGS_USER_ASSETS",
    icon: <IoDiamondSharp />,
    path: "/assets",
  },
  {
    id: 3,
    name: "SETTINGS_USER_FAVOURITES",
    icon: <BsFillBookmarkFill />,
    path: "/favourites?type=nft-bookmark",
  },
  {
    id: 4,
    name: "SETTINGS_RB",
    icon: <BsChatTextFill />,
    path: "/refer-buyers",
  },
  {
    id: 5,
    name: "SETTINGS_RC",
    icon: <HiSpeakerphone />,
    path: "/refer-creators",
  },
  {
    id: 6,
    name: "SETTINGS_THEME",
    icon: <IoIosSwitch />,
    path: "/theme",
  },
];

const ProfileSideBar = ({ darkMode }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        color: `${darkMode ? "#ffffff" : "#040404"}`,
        backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
        borderRadius: "10px",
        zIndex: 1000,
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", py: 2, zIndex: 1000, }}>
        {profileSideMenu.map((psm) => (
          <Box key={psm.id} sx={{ zIndex: 1000, }}>
            <ListItem
              disablePadding
              sx={{ pl: 0.5, py: 1.5, position: "relative", zIndex: 1000, }}
            >
              <ListItemButton
                sx={
                  location.pathname === `/profile${psm.path}`
                    ? {
                        mr: 3,
                        borderRadius: "4px",
                        background:
                          "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                        zIndex: 1000,
                      }
                    : null
                }
                onClick={() => navigate(`/profile${psm.path}`)}
              >
                <ListItemIcon sx={{ ml: 2 }}>
                  {location.pathname === `/profile${psm.path}` ? (
                    <Typography
                      component="span"
                      color="#ffffff"
                      fontSize={22}
                      mt={0.5}
                    >
                      {psm.icon}
                    </Typography>
                  ) : (
                    <Typography
                      component="span"
                      color="secondary"
                      fontSize={22}
                      mt={0.5}
                    >
                      {psm.icon}
                    </Typography>
                  )}
                </ListItemIcon>
                {location.pathname === `/profile${psm.path}` ? (
                  <Typography
                    variant="body2"
                    component="span"
                    ml={-1}
                    fontWeight={500}
                    color="#ffffff"
                  >
                    {t(`${psm.name}`)}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    component="span"
                    ml={-1}
                    fontWeight={500}
                    color="secondary"
                  >
                    {t(`${psm.name}`)}
                  </Typography>
                )}
              </ListItemButton>
            </ListItem>
            <Divider
              sx={
                psm.id === profileSideMenu.length
                  ? { backgroundColor: "gray", opacity: "0" }
                  : { backgroundColor: "gray", opacity: "0.2" }
              }
            />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ProfileSideBar;
