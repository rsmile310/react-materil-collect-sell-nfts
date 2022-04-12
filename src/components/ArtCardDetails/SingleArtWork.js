import React, { useState } from "react";

// From Material UI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Backdrop,
  Button,
  Divider,
  Fade,
  IconButton,
  Modal,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

// Custom Gradient button
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineClock } from "react-icons/hi";
import { BsFillBookmarkFill, BsBookmark, BsChevronDown } from "react-icons/bs";
import { HiTemplate } from "react-icons/hi";
import { IoCart } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

import { biddingData } from "./biddingData";

// Tabpanel
import { TabPanel } from "./TabPanel";

// Styles
import styles from "./SingleArtWork.module.css";

const SingleArtWork = ({ fa, darkMode }) => {
  const {
    artworkImage,
    artworkTitle,
    artworkDetails,
    artworkPrice,
    creator,
    creatorImage,
    owner,
    ownerImage,
    uploaded,
    likes,
  } = fa;

  // States
  const [openModal, setOpenModal] = React.useState(false);
  const [likeState, setLikeState] = useState(false);
  const [bookmarkState, setBookmarkState] = useState(false);
  const [tabValue, setTabValue] = useState(0); // setting tab value for changing

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Tab handler
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Custom Mobile Tabs
  const MobileTabs = styled(Tabs)({
    border: "none",
    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
    "& .MuiTabs-indicator": {
      backgroundColor: "inherit",
    },
  });

  const MobileTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    "&.Mui-selected": {
      color: "#ffffff",
      backgroundColor: "#01D4FA",
      borderRadius: "4px",
      fontWeight: theme.typography.fontWeightMedium,
    },
  }));

  return (
    // Artwork details information
    <>
      <Modal
        sx={{ zIndex: 500000 }}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            bgcolor={darkMode ? "#171c26" : "#fff2f8"}
            className={
              !isMobile ? styles.modalStyleWeb : styles.modalStyleMobile
            }
          >
            <Typography
              className={styles.itemDetailsModalTitle}
              color="secondary"
              variant="h6"
              component="div"
            >
              <Typography component="span" color="secondary" sx={{ mt: 0.3 }}>
                <HiTemplate fontSize={"1.5rem"} />
              </Typography>
              <Typography variant="h6" component="span" mt={-0.2}>
                {t("ITEM_DETAILS")}
              </Typography>
            </Typography>
            <Typography
              // This is global styles
              className={
                !isMobile
                  ? styles.readMoreModalText
                  : styles.readMoreModalTextMobile
              }
              variant="body2"
              component="p"
              color="secondary"
              lineHeight={2}
              height={250}
              pr={2.5}
            >
              {artworkDetails}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Box mt={11} className={styles.detailsContainerBox}>
        <Box>
          {/* Top navigation */}
          {!isMobile ? (
            <Box className={styles.topNavigationBox}>
              <FiChevronLeft fontSize={"1.5rem"} />
              <Typography
                className={styles.topNavigationTypo}
                component="div"
                borderBottom={`2px solid ${darkMode ? "#ffffff" : "#121212"}`}
              >
                <Typography
                  onClick={() => window.history.back()}
                  variant="h6"
                  component="p"
                  sx={{ cursor: "pointer" }}
                  zIndex={2}
                >
                  {t("ITEM_DETAILS")}
                </Typography>
                {darkMode && (
                  <Typography
                    variant="h1"
                    component="p"
                    ml={-3}
                    className={styles.labelHighLighter}
                  ></Typography>
                )}
              </Typography>
            </Box>
          ) : (
            <Box className={styles.topNavigationBoxMobile}>
              <Box
                width={"70px"}
                height={"60px"}
                mt={-1}
                bgcolor={`${darkMode ? "#040404" : "#ffffff"}`}
              >
                <FiChevronLeft
                  onClick={() => window.history.back()}
                  fontSize={"1.5rem"}
                />
              </Box>
              <Box
                sx={{
                  position: "fixed",
                  top: "3%",
                  zIndex: "10000",
                  width: "70%",
                  display: "flex",
                  justifyContent: "center",
                  ml: 4,
                }}
              >
                <Typography
                  component="div"
                  borderBottom={`2px solid ${darkMode ? "#ffffff" : "#121212"}`}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  ml={4}
                >
                  <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{ zIndex: 2 }}
                  >
                    {t("ITEM_DETAILS")}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          )}
          {/* Details container */}
          {!isMobile ? (
            <Box className={styles.detailsContainer}>
              <Box zIndex={10}>
                <img
                  className={styles.artDisplayImage}
                  src={artworkImage}
                  alt={artworkTitle}
                />
              </Box>
              <Box
                className={styles.detailsContainerContentBox}
                bgcolor={`${darkMode ? "#171C26" : "#FFF2F8"}`}
              >
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    color="secondary.main"
                    mb={4}
                    fontWeight={500}
                  >
                    {artworkTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    lineHeight={1.5}
                    mb={2}
                    textAlign="justify"
                  >
                    {artworkDetails.slice(0, 200)}
                    <Button
                      variant="text"
                      onClick={handleOpenModal}
                      sx={{ color: "#01D4FA", textTransform: "lowercase" }}
                    >
                      ...{t("READ_MORE")}
                    </Button>
                  </Typography>
                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      backgroundColor: `${darkMode ? "#171c26" : "#fff2f8"}`,
                      mb: 3,
                      border: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Typography component="span" color="secondary">
                          <BsChevronDown
                            fontSize={"1rem"}
                            style={{ marginTop: "5px" }}
                          />
                        </Typography>
                      }
                    >
                      <Typography
                        variant="h6"
                        color="secondary"
                        ml={-2}
                        fontWeight={500}
                      >
                        {t("PROPERTIES")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border: "none", ml: -2 }}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box
                          className={styles.propBox}
                          bgcolor={darkMode ? "#040404" : "#ffffff"}
                        >
                          <Typography
                            variant="button"
                            component="p"
                            color="#01D4FA"
                          >
                            Color
                          </Typography>
                          <Typography variant="body2" color="secondary">
                            Pink
                          </Typography>
                        </Box>
                        <Box
                          className={styles.propBox}
                          bgcolor={darkMode ? "#040404" : "#ffffff"}
                        >
                          <Typography
                            variant="button"
                            component="p"
                            color="#01D4FA"
                          >
                            Material
                          </Typography>
                          <Typography variant="body2" color="secondary">
                            Cotton
                          </Typography>
                        </Box>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    variant="h6"
                    component="p"
                    color={darkMode ? "#FFFFFF" : "#121212"}
                    mb={2}
                    fontWeight={500}
                  >
                    {t("PRICE")}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    color="secondary.main"
                    mb={3}
                    fontWeight={500}
                  >
                    {artworkPrice}
                  </Typography>
                  <Divider className={styles.dividerBox} />
                  <Box className={styles.singleArtCardInfo}>
                    <Box className={styles.avatarBox}>
                      <Box>
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={creatorImage}
                          alt={creator}
                        />
                      </Box>
                      <Stack direction="column">
                        <Typography variant="caption" gutterBottom color="gray">
                          {t("CREATOR")}
                        </Typography>
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="secondary.main"
                        >
                          {creator}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box className={styles.avatarBox}>
                      <Box>
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={ownerImage}
                          alt={owner}
                        />
                      </Box>
                      <Stack direction="column">
                        <Typography variant="caption" gutterBottom color="gray">
                          {t("OWNER")}
                        </Typography>
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="secondary.main"
                        >
                          {owner}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                  <Divider className={styles.dividerBox} />
                  <Box className={styles.cardFooter}>
                    <Stack direction="row" alignItems="center">
                      <IconButton>
                        <Typography component="span" color="secondary">
                          <HiOutlineClock className={styles.footerIcons} />
                        </Typography>
                      </IconButton>
                      <Typography
                        variant="caption"
                        component="span"
                        color={darkMode ? "#ffffff" : "#121212"}
                      >
                        {uploaded} {t("HOURS_AGO")}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Box className={styles.userInteractionBox}>
                        <IconButton onClick={() => setLikeState(!likeState)}>
                          {likeState ? (
                            <Typography color="#e23e58" component="span">
                              <AiFillHeart className={styles.footerIcons} />
                            </Typography>
                          ) : (
                            <Typography component="span" color="secondary">
                              <AiOutlineHeart className={styles.footerIcons} />
                            </Typography>
                          )}
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="span"
                          color={darkMode ? "#ffffff" : "#121212"}
                        >
                          {likes}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={() => setBookmarkState(!bookmarkState)}
                        >
                          {bookmarkState ? (
                            <Typography component="span" color="#01D4FA">
                              <BsFillBookmarkFill
                                className={styles.footerIcons}
                              />
                            </Typography>
                          ) : (
                            <Typography component="span" color="secondary">
                              <BsBookmark className={styles.footerIcons} />
                            </Typography>
                          )}
                        </IconButton>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box className={styles.footerButtonContainer}>
                  <GradientButtonPrimary
                    className={styles.gradientButtonClass}
                    variant="contained"
                  >
                    <Typography
                      color="#ffffff"
                      component="span"
                      fontSize={20}
                      mt={0.5}
                    >
                      <IoCart />
                    </Typography>
                    <Typography variant="body1" component="span">
                      {t("BUY_NOW")}
                    </Typography>
                  </GradientButtonPrimary>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className={styles.detailsContainerMobile}>
              <Box zIndex={10}>
                <img
                  className={styles.artDisplayImageMobile}
                  src={artworkImage}
                  alt={artworkTitle}
                />
              </Box>
              <Box className={styles.userInteractionBoxMobile}>
                <Stack direction="row" alignItems="center">
                  <IconButton>
                    <Typography component="span" color="secondary">
                      <HiOutlineClock className={styles.footerIcons} />
                    </Typography>
                  </IconButton>
                  <Typography
                    variant="caption"
                    component="span"
                    color={darkMode ? "#ffffff" : "#121212"}
                  >
                    {uploaded} {t("HOURS_AGO")}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box className={styles.userInteractionBoxMobile}>
                    <IconButton onClick={() => setLikeState(!likeState)}>
                      {likeState ? (
                        <Typography color="#e23e58" component="span">
                          <AiFillHeart className={styles.footerIcons} />
                        </Typography>
                      ) : (
                        <Typography component="span" color="secondary">
                          <AiOutlineHeart className={styles.footerIcons} />
                        </Typography>
                      )}
                    </IconButton>
                    <Typography
                      variant="caption"
                      component="span"
                      color={darkMode ? "#ffffff" : "#121212"}
                    >
                      {likes}
                    </Typography>
                  </Box>
                  <Box mt={-0.5}>
                    <IconButton
                      onClick={() => setBookmarkState(!bookmarkState)}
                    >
                      {bookmarkState ? (
                        <Typography component="span" color="#01D4FA">
                          <BsFillBookmarkFill className={styles.footerIcons} />
                        </Typography>
                      ) : (
                        <Typography component="span" color="secondary">
                          <BsBookmark className={styles.footerIcons} />
                        </Typography>
                      )}
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Box className={styles.cardFooterMobile}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box>
                      <Avatar
                        sx={{
                          border: `2px solid ${
                            darkMode ? "#ffffff" : "#01D4FA"
                          }`,
                        }}
                        src={creatorImage}
                        alt={creator}
                      />
                    </Box>
                    <Stack direction="column" alignItems="center">
                      <Typography variant="caption" gutterBottom color="gray">
                        {t("CREATOR")}
                      </Typography>
                      <Typography
                        variant="caption"
                        gutterBottom
                        color="secondary.main"
                      >
                        {creator}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box>
                      <Avatar
                        sx={{
                          border: `2px solid ${
                            darkMode ? "#ffffff" : "#01D4FA"
                          }`,
                        }}
                        src={ownerImage}
                        alt={owner}
                      />
                    </Box>
                    <Stack direction="column" alignItems="center">
                      <Typography variant="caption" gutterBottom color="gray">
                        {t("OWNER")}
                      </Typography>
                      <Typography
                        variant="caption"
                        gutterBottom
                        color="secondary.main"
                      >
                        {owner}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    color="secondary.main"
                    mb={2}
                  >
                    {artworkTitle}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    lineHeight={1.8}
                    mb={2}
                    textAlign="left"
                  >
                    {artworkDetails.slice(0, 200)}
                    <Button
                      variant="text"
                      onClick={handleOpenModal}
                      sx={{ fontSize: "11px", color: "#01D4FA" }}
                    >
                      ...{t("READ_MORE")}
                    </Button>
                  </Typography>
                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      mb: 3,
                      background: `${darkMode ? "#040404" : "#ffffff"}`,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Typography component="span" color="secondary">
                          <BsChevronDown
                            fontSize={"1rem"}
                            style={{ marginTop: "5px" }}
                          />
                        </Typography>
                      }
                    >
                      <Typography
                        variant="h6"
                        color="secondary"
                        ml={-2}
                        fontWeight={500}
                        fontSize={16}
                      >
                        {t("PROPERTIES")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ border: "none", ml: -2 }}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box
                          className={styles.propBox}
                          // bgcolor={darkMode ? "#040404" : "#ffffff"}
                        >
                          <Typography
                            variant="button"
                            component="p"
                            color="#01D4FA"
                            fontSize={12}
                          >
                            Color
                          </Typography>
                          <Typography variant="body2" color="secondary">
                            Pink
                          </Typography>
                        </Box>
                        <Box
                          className={styles.propBox}
                          // bgcolor={darkMode ? "#040404" : "#ffffff"}
                        >
                          <Typography
                            variant="button"
                            component="p"
                            color="#01D4FA"
                            fontSize={12}
                          >
                            Material
                          </Typography>
                          <Typography variant="body2" color="secondary">
                            Cotton
                          </Typography>
                        </Box>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color={darkMode ? "#FFFFFF" : "#121212"}
                    mb={1}
                  >
                    {t("PRICE")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="secondary.main"
                    mb={1}
                    fontWeight={500}
                  >
                    {artworkPrice}
                  </Typography>
                </Box>
                <Box className={styles.footerButtonContainerMobile}>
                  <GradientButtonPrimary
                    variant="contained"
                    className={styles.gradientButtonClass}
                  >
                    <Typography color="#ffffff" component="span">
                      <IoCart className={styles.footerIcons} />
                    </Typography>
                    <Typography variant="caption" component="span">
                      {t("BUY_NOW")}
                    </Typography>
                  </GradientButtonPrimary>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        {/* Tabs and panels*/}
        {!isMobile ? (
          <Box className={styles.tabBox}>
            <Box sx={{ width: "100%", my: 16 }}>
              <Box
                bgcolor={`${darkMode ? "#171c26" : "#fff2f8"}`}
                borderRadius="10px"
              >
                <Tabs
                  textColor="secondary"
                  indicatorColor="secondary"
                  value={tabValue}
                  onChange={handleChange}
                >
                  <Tab
                    sx={{ color: "gray", ml: 5, textTransform: "capitalize" }}
                    label={t("RECENT_BID")}
                  />
                  <Tab
                    sx={{ color: "gray", ml: 12, textTransform: "capitalize" }}
                    label={t("HISTORY")}
                  />
                </Tabs>
              </Box>
              <TabPanel value={tabValue} index={0}>
                {/* Global tab styles */}
                <div className="tabStyles">
                  {biddingData[0].bidder.map((bd) => (
                    <Box mb={2} key={bd.id}>
                      <Typography
                        variant="body1"
                        className={styles.tabBoxContent}
                      >
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={bd.avatar}
                          alt={bd.name}
                        />
                        <Typography variant="body2" component="p">
                          {t("BIDDING_PRICE")}{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {bd.amount}
                          </span>{" "}
                          {t("BIDDING_BY")}{" "}
                          <span style={{ fontWeight: "bold" }}>{bd.name}</span>{" "}
                          {t("BIDDING_AT")} {bd.date} {bd.time}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <div className="tabStyles">
                  {biddingData[0].acceptee.map((bd) => (
                    <Box mb={2} key={bd.id}>
                      <Typography className={styles.tabBoxContent}>
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={bd.avatar}
                          alt={bd.name}
                        />
                        <Typography variant="body2" component="p">
                          {t("BIDDING_PRICE")}{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {bd.amount}
                          </span>{" "}
                          {t("BIDDING_BY")}{" "}
                          <span style={{ fontWeight: "bold" }}>{bd.name}</span>{" "}
                          {t("BIDDING_AT")} {bd.date} {bd.time}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </div>
              </TabPanel>
            </Box>
          </Box>
        ) : (
          <Box width="90%" className={styles.tabBox}>
            <Box mt={5} mb={-3}>
              <Box ml={-2} mb={2}>
                <MobileTabs
                  darkMode={darkMode}
                  textColor="secondary"
                  indicatorColor="secondary"
                  value={tabValue}
                  onChange={handleChange}
                >
                  <MobileTab
                    sx={{ color: "gray", textTransform: "capitalize" }}
                    label={t("RECENT_BID")}
                  />
                  <MobileTab
                    sx={{ color: "gray", ml: 3, textTransform: "capitalize" }}
                    label={t("HISTORY")}
                  />
                </MobileTabs>
              </Box>
              <TabPanel value={tabValue} index={0}>
                <div className="tabStylesMobile">
                  {biddingData[0].bidder.map((bd) => (
                    <Box pr={2} my={3} key={bd.id}>
                      <Typography
                        className={styles.tabBoxMobile}
                        variant="body2"
                      >
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={bd.avatar}
                          alt={bd.name}
                        />
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "12px", lineHeight: 2 }}
                          component="p"
                        >
                          {t("BIDDING_PRICE")}{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {bd.amount}
                          </span>{" "}
                          {t("BIDDING_BY")}{" "}
                          <span style={{ fontWeight: "bold" }}>{bd.name}</span>{" "}
                          {t("BIDDING_AT")} {bd.date} {bd.time}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <div className="tabStylesMobile">
                  {biddingData[0].acceptee.map((bd) => (
                    <Box pr={2} my={3} key={bd.id}>
                      <Typography
                        variant="body1"
                        className={styles.tabBoxMobile}
                      >
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                          }}
                          src={bd.avatar}
                          alt={bd.name}
                        />
                        <Typography
                          variant="body2"
                          component="p"
                          sx={{ fontSize: "12px", lineHeight: 2 }}
                        >
                          {t("BIDDING_PRICE")}{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {bd.amount}
                          </span>{" "}
                          {t("BIDDING_BY")}{" "}
                          <span style={{ fontWeight: "bold" }}>{bd.name}</span>{" "}
                          {t("BIDDING_AT")} {bd.date} {bd.time}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </div>
              </TabPanel>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default SingleArtWork;
