import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { BiSort } from "react-icons/bi";
import { MdTune } from "react-icons/md";
import { MdHistory, MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

// Tab filters
const filterTabs = [
  {
    id: 1,
    text: "FILTER_TAB_ALL",
    path: "?type=all",
  },
  {
    id: 2,
    text: "FILTER_TAB_AVA",
    path: "?type=avatars",
  },
  {
    id: 3,
    text: "FILTER_TAB_ART",
    path: "?type=art",
  },
  {
    id: 4,
    text: "FILTER_TAB_COLL",
    path: "?type=Collectibles",
  },
  {
    id: 5,
    text: "FILTER_TAB_VIRTUALW",
    path: "?type=virtual-worlds",
  },
  {
    id: 6,
    text: "FILTER_TAB_GAMING",
    path: "?type=gaming",
  },
  {
    id: 7,
    text: "FILTER_TAB_MEMES",
    path: "?type=memes",
  },
  {
    id: 8,
    text: "FILTER_TAB_VIRTUALF",
    path: "?type=virtual-fashion",
  },
  {
    id: 9,
    text: "FILTER_TAB_MUSIC",
    path: "?type=music",
  },
  {
    id: 10,
    text: "FILTER_TAB_PICS",
    path: "?type=pictures",
  },
  {
    id: 11,
    text: "FILTER_TAB_VID",
    path: "?type=videos",
  },
  {
    id: 12,
    text: "FILTER_TAB_OTHER",
    path: "?type=other",
  },
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    // '::-webkit-scrollbar' :{
    //   width: '10px'
    // },
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 140,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const FilterTab = ({ darkMode }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selMenu, setSelMenu] = React.useState("All")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTrigger = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const openMenu = Boolean(anchorEl2);
  const handleCloseMenu = () => {
    setAnchorEl2(null);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const menuClickTrigger = (path, txt) =>{
    navigate(path)
    setSelMenu(t(txt))
    setAnchorEl(null);
  }
  const ITEM_HEIGHT = 48;
  return (
    <>
      <Box sx={{ mt: 11.5, mb: 8, display: "flex", alignItems: "center" }}>
        <Box>
          <IconButton onClick={handleClickTrigger}>
            <Typography component="span" color="secondary" fontSize={20} mt={1}>
              <MdTune />
            </Typography>
          </IconButton>
        </Box>
        <Menu
          id="basic-menu"
          PaperProps={{
            style: {
              backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
              padding: "0 10px",
              borderRadius: "10px",
            },
          }}
          anchorEl={anchorEl2}
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

        <Box>
          <Button
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            variant="contained"
            disableElevation
            onClick={handleClick}
            style={{ textTransform: "capitalize" }}
            endIcon={<MdKeyboardArrowDown 
            />}
          >
          {selMenu}
          </Button>
          <StyledMenu
             id="long-menu"
             MenuListProps={{
               'aria-labelledby': 'long-button',
             }}
            
            PaperProps={{
              style: {
                backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                padding: "0 10px",
                borderRadius: "10px",
                maxHeight: ITEM_HEIGHT * 4.5,
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {filterTabs.map((ft) => (
              <MenuItem key={ft.id} style={{
                width: "180px",
                backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                display: "flex",
                alignItems: "center",
                gap: 15,
                margin: "10px 0",
                padding: "15px 0",
                paddingLeft: "20px",
              }}>
                <Box key={ft.id}>
                  <Box
                    color="secondary"
                    // onClick={() => navigate(ft.path)}
                    onClick={() => menuClickTrigger(ft.path,ft.text)}
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
                      color="secondary"
                      style={{fontSize:"12px"}}
                    >
                      {t(`${ft.text}`)}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </StyledMenu>
        </Box>
      </Box>
    </>
  );
};
export default FilterTab;