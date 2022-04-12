import React from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

//Icons
import { BiSort } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { MdTune } from "react-icons/md";

import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

// Tab filters
const filterTabs = [
  {
    id: 1,
    text: "FILTER_TAB_ALL",
    path: "?type=all",
  },
  {
    id: 2,
    text: "FILTER_TAB_ART",
    path: "?type=art",
  },
  {
    id: 3,
    text: "FILTER_TAB_MUSIC",
    path: "?type=music",
  },
  {
    id: 4,
    text: "FILTER_TAB_POSTER",
    path: "?type=poster",
  },
  {
    id: 5,
    text: "FILTER_TAB_SIGNATURE",
    path: "?type=signature",
  },
  {
    id: 6,
    text: "FILTER_TAB_MEMES",
    path: "?type=memes",
  },
];

const FilterTab = ({ darkMode }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const navigate = useNavigate();

  const openMenu = Boolean(anchorEl);

  const handleClickTrigger = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {!isMobile ? (
        <Box sx={{ mt: 11.5, mb: 8 }}>
          <Box
            bgcolor={darkMode ? "#171c26" : "#FFF5F9"}
            sx={{
              textAlign: "center",
              py: 1,
              px: 4,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {filterTabs.map((ft) => (
              <Box key={ft.id}>
                <Button
                  color="secondary"
                  onClick={() => navigate(ft.path)}
                  style={{ textTransform: "capitalize" }}
                >
                  <Typography
                    sx={
                      location.search === ft.path
                        ? {
                            borderBottom: `1px solid ${
                              darkMode ? "#ffffff" : "#171c26"
                            }`,
                          }
                        : null
                    }
                    variant="body2"
                    component="span"
                  >
                    {t(`${ft.text}`)}
                  </Typography>
                </Button>
              </Box>
            ))}
            <Box>
              <IconButton onClick={handleClickTrigger}>
                <Typography
                  component="span"
                  color="secondary"
                  fontSize={20}
                  mt={1}
                >
                  <MdTune />
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ my: 1, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              overflowX: "scroll",
              gap: 2,
              py: 2,
            }}
          >
            <Box>
              <IconButton onClick={handleClickTrigger}>
                <Typography component="span" color="secondary">
                  <MdTune />
                </Typography>
              </IconButton>
            </Box>
            {filterTabs.map((ft) => (
              <Box key={ft.id}>
                <Box>
                  <Box
                    bgcolor={
                      location.search === ft.path
                        ? {
                            backgroundColor: `#01D4FA`,
                          }
                        : {
                            backgroundColor: `${
                              darkMode ? "#171c26" : "#fff2f8"
                            }`,
                          }
                    }
                    onClick={() => navigate(ft.path)}
                    sx={{
                      py: 1,
                      px: 3,
                      borderRadius: "4px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="secondary"
                      sx={{ fontSize: "12px" }}
                    >
                      {t(`${ft.text}`)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
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
        style={{ marginTop: "1rem" }}
      >
        <MenuItem
          onClick={handleCloseMenu}
          style={{
            width: "180px",
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginBottom: "10px",
            padding: "10px 0",
            paddingLeft: "20px",
          }}
          // onClick={handleDisconnectWallet}
        >
          <Typography component="span" sx={{ mt: 0.6 }}>
            <MdHistory
              style={{ fontSize: "1.5rem" }}
              color={darkMode ? "#ffffff" : "#040404"}
            />
          </Typography>
          <Typography color="secondary" sx={{ fontSize: "12px" }}>
            {t("FILTER_MOST_RECENT")}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          style={{
            width: "180px",
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginBottom: "10px",
            padding: "10px 0",
            paddingLeft: "20px",
          }}
          // onClick={handleDisconnectWallet}
        >
          <Typography component="span" color="secondary" sx={{ mt: 0.6 }}>
            <BiSort style={{ fontSize: "1.5rem" }} />
          </Typography>
          <Typography color="secondary" sx={{ fontSize: "12px" }}>
            {t("PRICE")} ({t("LOW_TO_HIGH")})
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          style={{
            width: "180px",
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginBottom: "10px",
            padding: "10px 0",
            paddingLeft: "20px",
          }}
          // onClick={handleDisconnectWallet}
        >
          <Typography component="span" sx={{ mt: 0.6 }} color="secondary">
            <BiSort style={{ fontSize: "1.5rem" }} />
          </Typography>
          <Typography color="secondary" sx={{ fontSize: "12px" }}>
            {t("PRICE")} ({t("HIGH_TO_LOW")})
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterTab;
