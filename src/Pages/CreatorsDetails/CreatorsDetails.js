import React, { useEffect, useState } from "react";
import {
  Typography,
  Avatar,
  Tabs,
  Tab,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "axios";
import SellerDetailsCard from "../../components/SellerDetailsCard/SellerDetailsCard";
import ArtCardFB from "../../components/Skeletons/ArtCardFB";

import Backdrop from "../../assets/exploreBackDropCircle.svg";

import BackgroundWrinkles1 from "../../assets/BackgroundWrinkles1.svg";
import BackgroundWrinklesLight from "../../assets/backgroundWrinklesLight.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

// Tabpanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CreatorsDetails = ({ darkMode }) => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [creatorData, setCreatorData] = useState([]);

  const [tabValue, setTabValue] = useState(0); // setting tab value for changing

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/creatorData.json");
      const sellerCardData = res.data;
      setCreatorData(sellerCardData);
    };
    fetchData();
  }, []);

  // Tab handler
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // This will be deleted when the API endpoint added
  const filteredCreator = creatorData.filter((sd) => sd.id === id);

  const MobileTabs = styled(Tabs)({
    border: "none",
    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
    "& .MuiTabs-indicator": {
      backgroundColor: "inherit",
    },
  });

  const MobileTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    color: `${darkMode ? "#ffffff" : "#040404"}`,
    backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
    borderRadius: "4px",
    "&.Mui-selected": {
      color: "#ffffff",
      backgroundColor: "#01D4FA",
      borderRadius: "4px",
      fontWeight: theme.typography.fontWeightMedium,
    },
  }));

  return (
    <Box
      sx={{
        mt: 11,
      }}
    >
      {" "}
      <Box
        style={{
          position: "fixed",
          height: "100vh",
        }}
      >
        <img
          src={darkMode ? BackgroundWrinkles1 : BackgroundWrinklesLight}
          alt="Wrinkles"
        />
      </Box>
      {!isMobile ? (
        <Box color={darkMode ? "#ffffff" : "#121212"}>
          <Box
            bgcolor={darkMode ? "#121212" : "#fff2f8"}
            sx={{
              borderRadius: "20px",
              p: 4,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            {filteredCreator.map((fs) => (
              <>
                <Box>
                  <Avatar
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                    }}
                    src={fs.sellerImage}
                    alt={fs.sellerName}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1" component="h2">
                    {fs.sellerName}
                  </Typography>
                  <Typography variant="caption" component="p" sx={{ my: 2 }}>
                    {fs.sellerUserName}
                  </Typography>
                  <Typography variant="caption" component="p">
                    {fs.sellerInfo}
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
          <Box>
            <Box
              bgcolor={darkMode ? "#171C26" : "#fff2f8"}
              sx={{
                borderRadius: "10px",
                mt: 3,
                mb: 4,
              }}
            >
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                value={tabValue}
                onChange={handleChange}
                centered
              >
                <Tab
                  sx={{
                    color: "gray",
                    textTransform: "capitalize",
                    display: "block",
                    mx: 8,
                  }}
                  label={`${t("FILTER_TAB_ALL")} (${filteredCreator.map(
                    (fs) => fs.sellerItems?.length
                  )})`}
                />
                <Tab
                  sx={{
                    color: "gray",
                    textTransform: "capitalize",
                    display: "block",
                    mx: 8,
                  }}
                  label={`${t("CREATED")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "createdItems")
                        ?.length
                  )})`}
                />
                <Tab
                  sx={{
                    color: "gray",
                    textTransform: "capitalize",
                    display: "block",
                    mx: 8,
                  }}
                  label={`${t("OWNED")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "ownedItems")
                        ?.length
                  )})`}
                />
                <Tab
                  sx={{
                    color: "gray",
                    textTransform: "capitalize",
                    display: "block",
                    mx: 8,
                  }}
                  label={`${t("IN_AUCTION")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "auctionItems")
                        ?.length
                  )})`}
                />
              </Tabs>
            </Box>
            <Box sx={{ mx: -3 }}>
              <TabPanel value={tabValue} index={0}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 6 }}
                  columns={{ xs: 1, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => (
                      <ArtCardFB darkMode={darkMode} key={n} />
                    ))
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems.map((sdc) => (
                          <SellerDetailsCard
                            darkMode={darkMode}
                            key={sdc.id}
                            sdc={sdc}
                          />
                        ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => (
                      <ArtCardFB darkMode={darkMode} key={n} />
                    ))
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "createdItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => (
                      <ArtCardFB darkMode={darkMode} key={n} />
                    ))
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "ownedItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => (
                      <ArtCardFB darkMode={darkMode} key={n} />
                    ))
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "auctionItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{ position: "relative", overflowX: "hidden", mt: -10 }}
          color={darkMode ? "#ffffff" : "#121212"}
        >
          <Box
            bgcolor={darkMode ? "#121212" : "#fff2f8"}
            sx={{
              borderRadius: "20px",
              p: 1,
            }}
          >
            {filteredCreator.map((fs) => (
              <>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Box>
                    <Avatar
                      sx={{
                        width: "70px",
                        height: "70px",
                        border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                      }}
                      src={fs.sellerImage}
                      alt={fs.sellerName}
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" component="h2">
                      {fs.sellerName}
                    </Typography>
                    <Typography variant="caption" component="p">
                      {fs.sellerUserName}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="caption" component="p">
                    {fs.sellerInfo}
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
          <Box>
            <Box
              sx={{
                borderRadius: "10px",
                mt: 3,
                mb: 4,
              }}
            >
              <MobileTabs
                variant="scrollable"
                textColor="secondary"
                indicatorColor="secondary"
                value={tabValue}
                onChange={handleChange}
                centered
              >
                <MobileTab
                  sx={{
                    textTransform: "capitalize",
                    display: "block",
                    mr: 2,
                  }}
                  label={`${t("FILTER_TAB_ALL")} (${filteredCreator.map(
                    (fs) => fs.sellerItems?.length
                  )})`}
                />
                <MobileTab
                  sx={{
                    textTransform: "capitalize",
                    display: "block",
                    mr: 2,
                  }}
                  label={`${t("CREATED")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "createdItems")
                        ?.length
                  )})`}
                />
                <MobileTab
                  sx={{
                    textTransform: "capitalize",
                    display: "block",
                    mr: 2,
                  }}
                  label={`${t("OWNED")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "ownedItems")
                        ?.length
                  )})`}
                />
                <MobileTab
                  sx={{
                    textTransform: "capitalize",
                    display: "block",
                  }}
                  label={`${t("IN_AUCTION")} (${filteredCreator.map(
                    (fs) =>
                      fs.sellerItems.filter((si) => si.tag === "auctionItems")
                        ?.length
                  )})`}
                />
              </MobileTabs>
            </Box>
            <Box sx={{ mx: -3 }}>
              <TabPanel value={tabValue} index={0}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 6 }}
                  columns={{ xs: 1, sm: 12, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => <ArtCardFB key={n} />)
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems.map((sdc) => (
                          <SellerDetailsCard
                            darkMode={darkMode}
                            key={sdc.id}
                            sdc={sdc}
                          />
                        ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, sm: 12, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => <ArtCardFB key={n} />)
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "createdItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, sm: 12, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => <ArtCardFB key={n} />)
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "ownedItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <div
                  style={{
                    position: "fixed",
                    zIndex: 500,
                  }}
                >
                  <img src={Backdrop} alt="Bakcdrop" />
                </div>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 1, sm: 12, md: 12 }}
                >
                  {filteredCreator.length === 0 ? (
                    [1, 2, 3, 4, 5, 6].map((n) => <ArtCardFB key={n} />)
                  ) : (
                    <>
                      {filteredCreator.map((fs) =>
                        fs.sellerItems
                          .filter((si) => si.tag === "auctionItems")
                          ?.map((sdc) => (
                            <SellerDetailsCard
                              darkMode={darkMode}
                              key={sdc.id}
                              sdc={sdc}
                            />
                          ))
                      )}
                    </>
                  )}
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CreatorsDetails;
