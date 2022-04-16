import React from "react";

// Material components
import {
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Main logo
import MainLogo from "../../assets/genzers-mainLogo-test2.png";
import MainLogoLight from "../../assets/genzers-mainLogo-test2.png";

// Icons
import { RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 20, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "430px" }}>
          <Box>
            {darkMode ? (
              <img src={MainLogo} alt="Minto" />
            ) : (
              <img src={MainLogoLight} alt="GenZers NFT Marketplace" />
            )}
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              sx={{ color: "#D71869", mb: 1, fontWeight: "bold" }}
              variant="subtitle1"
              component="h4"
            >
              {t("FOOTER_TITLE_MAIN")}
            </Typography>
            <Typography
              sx={{ color: "secondary.main" }}
              variant="body2"
              component="p"
            >
              {t("FOOTER_DETAILS")}
            </Typography>
          </Box>
          <Box sx={{ ml: -1.3 }}>
            <IconButton>
              <RiTwitterFill
                style={{ color: `${darkMode ? "#ffffff" : "#171c26"}` }}
              />
            </IconButton>
            <IconButton>
              <RiInstagramLine
                style={{ color: `${darkMode ? "#ffffff" : "#171c26"}` }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box zIndex={1000}>
            <Typography
              color="secondary"
               sx={{ mb: 1, fontWeight: 700 }}
               variant="subtitle1"
               component="h4"
            >
             {t("FOOTER_TITLE_MARKETPLACE")}
            </Typography>
            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/explore?type=all"
                 >
                {t("FOOTER_LINK_EXPLORE")}
                </Link>
              </ListItem>
            <ListItem disablePadding>
              <Link
              style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
              to="/create-asset"
              >
               {t("FOOTER_LINK_CREATE")}
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                to="/login"
              >
               {t("FOOTER_LINK_LOGIN")}
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                to="/register"
              >
               {t("FOOTER_LINK_REGISTER")}
              </Link>
            </ListItem>
            </List>
          </Box>
          <Box zIndex={1000}>
            <Typography
              color="secondary"
              sx={{ mb: 1, fontWeight: 700 }}
              variant="subtitle1"
              component="h4"
            >
              {t("FOOTER_TITLE_COMMUNITY")}
            </Typography>
            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                   to="/trending-creators"
                >
                 {t("FOOTER_LINK_CREATORS")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                   to="/trending-sellers"
                >
                  {t("FOOTER_LINK_SELLERS")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/affiliates"
                >
                  {t("FOOTER_LINK_AFFILIATES")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                   to="/frequently-asked-questions"
                >
                  {t("FOOTER_LINK_FAQS")}
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              color="secondary"
              sx={{ mb: 1, fontWeight: 700 }}
              variant="subtitle1"
              component="h4"
            >
              {t("FOOTER_TITLE_COMPANY")}
            </Typography>
            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/terms-and-condition"
                >
                  {t("FOOTER_LINK_TERMS_CONDITION")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/privacy-policy"
                >
                  {t("FOOTER_LINK_PRIVACY_POLICY")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/disclaimer"
                >
                  {t("FOOTER_LINK_DISCLAIMER")}
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  style={darkMode ? { color: "#ffffff" } : { color: "#171c26" }}
                  to="/contact-us"
                >
                  {t("FOOTER_LINK_CONTACT_US")}
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="caption"
        component="div"
        sx={{ color: "gray", textAlign: "center", mt: 2 }}
      >
        &copy; 2021 {t("FOOTER_COPYRIGHT")}
      </Typography>
    </Container>
  );
};

export default Footer;
