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
import { IoPersonSharp, IoLanguage } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { AiFillIdcard } from "react-icons/ai";

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
    name: "SETTINGS_KYC",
    icon: <AiFillIdcard />,
    path: "/kyc",
  },
  {
    id: 3,
    name: "SETTINGS_LANGUAGE",
    icon: <IoLanguage />,
    path: "/language",
  },
  {
    id: 4,
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
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", py: 2 }}>
        {profileSideMenu.map((psm) => (
          <Box key={psm.id}>
            <ListItem
              disablePadding
              sx={{ pl: 0.5, py: 1.5, position: "relative" }}
            >
              <ListItemButton
                sx={
                  location.pathname === `/profile${psm.path}`
                    ? {
                        mr: 3,
                        borderRadius: "4px",
                        background:
                          "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
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
