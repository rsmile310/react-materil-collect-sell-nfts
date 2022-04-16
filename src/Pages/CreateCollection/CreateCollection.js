import {
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Icons
import { TiTimes } from "react-icons/ti";
import { MdAddToPhotos } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";
import { ImImage } from "react-icons/im";
import { BiMenuAltLeft } from "react-icons/bi";

import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";
import AssetProperModal from "../../components/AssetPropertiesModal/AssetProperModal";

import { useTranslation } from "react-i18next";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AssetProperModalMobile from "../../components/AssetPropertiesModal/AssetProperModalMobile";

const Input = styled("input")({
  display: "none",
});

// const propertiesData = { id: Math.random(), color: "black" };

const CreateAssets = ({ darkMode }) => {
  const [image, setImage] = useState(null);

  const { t } = useTranslation();

  const [fixedButtonToggler, setFixedButtonToggler] = useState(true);
  const [openButtonToggler, setOpenButtonToggler] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [dateValueFrom, setDateValueFrom] = useState(new Date());
  const [dateValueTo, setDateValueTo] = useState(new Date());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [propertiesDataState, setPropertiesDataState] = useState([
    { key: "", value: "" },
  ]);

  const [savedProperties, setSavedProperties] = useState([]);

  const handlePropertiesChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...propertiesDataState];
    list[index][name] = value;
    setPropertiesDataState(list);
  };

  const handlePropertiesRemove = (id) => {
    const filteredRemaining = propertiesDataState.filter(
      (pds) => pds.id !== id
    );
    setPropertiesDataState(filteredRemaining);
  };

  const handlePropertiesAdd = () => {
    setPropertiesDataState([
      ...propertiesDataState,
      { key: "", value: "", id: Math.random() },
    ]);
  };

  const handleSavePropeties = () => {
    setSavedProperties([...propertiesDataState]);
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFixedToggler = () => {
    setFixedButtonToggler(true);
    setOpenButtonToggler(false);
  };

  const handleOpenToggler = () => {
    setOpenButtonToggler(true);
    setFixedButtonToggler(false);
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        {!isMobile ? (
          <AssetProperModal
            handlePropertiesChange={handlePropertiesChange}
            darkMode={darkMode}
            propertiesDataState={propertiesDataState}
            savedProperties={savedProperties}
            handlePropertiesAdd={handlePropertiesAdd}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            handlePropertiesRemove={handlePropertiesRemove}
            handleSavePropeties={handleSavePropeties}
          />
        ) : (
          <AssetProperModalMobile
            handlePropertiesChange={handlePropertiesChange}
            darkMode={darkMode}
            propertiesDataState={propertiesDataState}
            savedProperties={savedProperties}
            handlePropertiesAdd={handlePropertiesAdd}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            handlePropertiesRemove={handlePropertiesRemove}
            handleSavePropeties={handleSavePropeties}
          />
        )}
      </Box>
      {!isMobile ? (
        <Box zIndex={1000}>
          <Box sx={{ mt: 10.5, mb: 4 }}>
            <Typography
              component="div"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                component="span"
                color="secondary"
                fontSize={20}
                mt={1}
              >
                <MdAddToPhotos />
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="secondary"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  borderBottom: `2px solid ${darkMode ? "#ffffff" : "#171c26"}`,
                }}
              >
                {t("CREATE_ASSET")}
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#ffffff"}`,
              pr: 6,
              pl: 4,
              py: 4,
              borderRadius: "16px",
            }}
          >
            <Box sx={{ display: "flex", gap: 5 }}>
              <Button
                disableElevation
                onClick={handleFixedToggler}
                color="blue"
                variant={fixedButtonToggler ? "contained" : "outlined"}
              >
                {t("FIXED_PRICE")}
              </Button>
              <Button
                disableElevation
                onClick={handleOpenToggler}
                color="blue"
                variant={openButtonToggler ? "contained" : "outlined"}
              >
                {t("OPEN_FOR_BID")}
              </Button>
            </Box>
            <Box component="form" sx={{ mt: 5 }}>
              <Grid
                zIndex={1000}
                container
                columns={{ md: 12 }}
                spacing={{ md: 15 }}
              >
                <Grid item md={6}>
                  <Box>
                    <Stack direction="column" spacing={2}>
                      <label
                        style={{
                          color: `${darkMode ? "#ffffff" : "#121212"}`,
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        htmlFor="nftName"
                      >
                        {t("NFT_NAME")} *
                      </label>
                      <input
                        className={darkMode ? "inputField" : null}
                        type="text"
                        placeholder={t(
                          "CREATE_ASSET_PLACEHOLDER_ENTER_NFT_NAME_HERE"
                        )}
                        name="nftName"
                        required
                        style={{
                          fontSize: "14px",
                          border: "1px solid #c4c4c4",
                          borderRadius: "6px",
                          padding: "1rem 1.5rem",
                          color: `${darkMode ? "#ffffff" : "#121212"}`,
                          backgroundColor: `${
                            darkMode ? "#171c26" : "#ffffff"
                          }`,
                          width: "90%",
                          zIndex: 1000,
                        }}
                      />
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                      <label
                        style={{
                          color: `${darkMode ? "#ffffff" : "#121212"}`,
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        htmlFor="nftDescription"
                      >
                        {t("DESCRIPTION")} *
                      </label>
                      <textarea
                        placeholder={t(
                          "CREATE_ASSET_PLACEHOLDER_PROVIDE_A_DETAILED_DESCRIPTION_OF_THE_ITEM"
                        )}
                        name="nftDescription"
                        required
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          border: "1px solid #c4c4c4",
                          borderRadius: "6px",
                          padding: "1rem 1.5rem",
                          color: `${darkMode ? "#ffffff" : "#121212"}`,
                          backgroundColor: `${
                            darkMode ? "#171c26" : "#ffffff"
                          }`,
                          width: "90%",
                          row: 5,
                          resize: "vertical",
                          zIndex: 1000,
                        }}
                      />
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                      <label
                        style={{
                          color: `${darkMode ? "#ffffff" : "#121212"}`,
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        htmlFor="nftPrice"
                      >
                        {t("PRICE")} *
                      </label>
                      <Stack direction="row" spacing={-9.5}>
                        <input
                          className={darkMode ? "inputField" : null}
                          type="number"
                          placeholder={t(
                            "CREATE_ASSET_PLACEHOLDER_ENTER_NFT_BASE_PRICE"
                          )}
                          name="nftPrice"
                          style={{
                            fontSize: "14px",
                            border: "1px solid #c4c4c4",
                            borderRadius: "6px",
                            padding: "1rem 1.5rem",
                            color: `${darkMode ? "#ffffff" : "#121212"}`,
                            backgroundColor: `${
                              darkMode ? "#171c26" : "#ffffff"
                            }`,
                            width: "90%",
                            zIndex: 1000,
                          }}
                        />
                        <Button
                          disableElevation
                          color="secondary"
                          variant="contained"
                        >
                          {t("MINTO")}
                        </Button>
                      </Stack>
                    </Stack>

                    <Box>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ mt: 5, mb: 3 }}
                      >
                        <Typography
                          component="div"
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Typography
                            component="span"
                            color="secondary"
                            fontSize={18}
                            mt={0.5}
                          >
                            <BiMenuAltLeft />
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            sx={{
                              color: `${darkMode ? "#ffffff" : "#121212"}`,
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            {t("PROPERTIES")}
                          </Typography>
                        </Typography>
                        <IconButton onClick={handleOpenModal}>
                          <Typography
                            component="span"
                            color="secondary"
                            fontSize={18}
                            mt={1}
                          >
                            <RiAddBoxFill />
                          </Typography>
                        </IconButton>
                      </Stack>
                      <Box>
                        <Grid
                          container
                          columns={{ md: 12 }}
                          spacing={{ md: 4 }}
                        >
                          {savedProperties.map((pds, index) => (
                            <Grid item md={4} key={index}>
                              {pds.key === "" && pds.value === "" ? null : (
                                <Box
                                  bgcolor={darkMode ? "#040404" : "#ffffff"}
                                  sx={{
                                    borderRadius: "6px",
                                    px: 4,
                                    py: 2,
                                    textAlign: "center",
                                    border: "1px solid #01D4FA",
                                  }}
                                >
                                  <Typography
                                    variant="button"
                                    component="p"
                                    color="#01D4FA"
                                  >
                                    {pds.key}
                                  </Typography>
                                  <Typography variant="body2" color="secondary">
                                    {pds.value}
                                  </Typography>
                                </Box>
                              )}
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box>
                    <Typography
                      color="secondary"
                      variant="body2"
                      component="p"
                      fontWeight={500}
                    >
                      {t("UPLOAD_IMAGE(PNG,JPEG/SVG)")}
                    </Typography>
                    <Box>
                      <Box>
                        {!image ? (
                          <Box
                            sx={{
                              my: 2,
                              width: "60%",
                              height: "150px",
                              border: "1px solid #c4c4c4",
                              borderStyle: "dashed",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              p: 3,
                            }}
                          >
                            <label htmlFor="icon-button-file-front">
                              <Input
                                accept="image/*"
                                id="icon-button-file-front"
                                type="file"
                                onChange={handleImageUpload}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <Typography
                                  component="span"
                                  color="secondary"
                                  fontSize={30}
                                >
                                  <ImImage />
                                </Typography>
                              </IconButton>
                            </label>
                          </Box>
                        ) : (
                          <Box sx={{ my: 2, position: "relative" }}>
                            <Box
                              sx={{
                                position: "absolute",
                                left: "1%",
                                top: "4%",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor: `${
                                    darkMode ? "#fff2f8" : "#171c26"
                                  }`,
                                }}
                                onClick={() => setImage(null)}
                              >
                                <TiTimes
                                  fontSize={"1rem"}
                                  color={darkMode ? "#171c26" : "#ffffff"}
                                />
                              </IconButton>
                            </Box>
                            <Box
                              sx={{
                                border: "1px solid #c4c4c4",
                                borderStyle: "dashed",
                                padding: "5px",
                                width: "315px",
                                height: "200px",
                              }}
                            >
                              <img
                                style={{ height: "200px", width: "315px" }}
                                src={image}
                                alt="Uploaded"
                              />
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    {openButtonToggler ? (
                      <Stack direction="column" spacing={2} sx={{ mt: 5 }}>
                        <label
                          style={{
                            color: `${darkMode ? "#ffffff" : "#121212"}`,
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                          htmlFor="nftName"
                        >
                          {t("AUCTION_EXPIARY_DATE")}
                        </label>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Typography
                              variant="body2"
                              component="span"
                              color="secondary"
                              sx={{ fontSize: "12px", fontWeight: "500" }}
                            >
                              {t("FROM")}
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <MobileDatePicker
                                inputFormat="dd/MM/yyyy"
                                value={dateValueFrom}
                                onChange={(newValue) => {
                                  setDateValueFrom(newValue);
                                }}
                                renderInput={({
                                  inputRef,
                                  inputProps,
                                  InputProps,
                                }) => (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "14px",
                                        border: "1px solid #c4c4c4",
                                        borderRadius: "6px",
                                        paddingTop: "5px",
                                        paddingLeft: "16px",
                                        paddingBottom: "5px",
                                        color: `${
                                          darkMode ? "#ffffff" : "#121212"
                                        }`,
                                        backgroundColor: `${
                                          darkMode ? "#171c26" : "#ffffff"
                                        }`,
                                        width: "50%",
                                      }}
                                      ref={inputRef}
                                      {...inputProps}
                                    />
                                  </Box>
                                )}
                              />
                            </LocalizationProvider>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{ ml: -10 }}
                          >
                            <Typography
                              variant="body2"
                              component="span"
                              color="secondary"
                              sx={{ fontSize: "12px", fontWeight: "500" }}
                            >
                              {t("TO")}
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <MobileDatePicker
                                inputFormat="dd/MM/yyyy"
                                value={dateValueTo}
                                onChange={(newValue) => {
                                  setDateValueTo(newValue);
                                }}
                                renderInput={({
                                  inputRef,
                                  inputProps,
                                  InputProps,
                                }) => (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "14px",
                                        border: "1px solid #c4c4c4",
                                        borderRadius: "6px",
                                        paddingTop: "5px",
                                        paddingLeft: "16px",
                                        paddingBottom: "5px",
                                        color: `${
                                          darkMode ? "#ffffff" : "#121212"
                                        }`,
                                        backgroundColor: `${
                                          darkMode ? "#171c26" : "#ffffff"
                                        }`,
                                        width: "50%",
                                      }}
                                      ref={inputRef}
                                      {...inputProps}
                                    />
                                  </Box>
                                )}
                              />
                            </LocalizationProvider>
                          </Stack>
                        </Box>
                      </Stack>
                    ) : null}
                  </Box>
                </Grid>
              </Grid>
              <GradientButtonPrimary
                type="submit"
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 5 }}
              >
                <Typography component="span" color="#ffffff">
                  <MdAddToPhotos />
                </Typography>
                <Typography variant="body2" component="span">
                  {t("CREATE_ASSET")}
                </Typography>
              </GradientButtonPrimary>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                top: "0%",
                left: "44%",
                transform: "translate(-50%, -50%)",
                zIndex: "10000",
                mt: 6,
              }}
            >
              <Box
                pb={2}
                ml={7}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <Typography variant="subtitle1" color="secondary" mt={1.2}>
                  <MdAddToPhotos fontSize={20} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  component="div"
                  sx={{
                    borderBottom: `${
                      darkMode ? "2px solid #ffffff" : "1px solid #171c26"
                    }`,
                  }}
                >
                  {t("CREATE_ASSET")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1,
              // backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              py: 2,
              borderRadius: "16px",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button
                disableElevation
                onClick={handleFixedToggler}
                color="blue"
                variant={fixedButtonToggler ? "contained" : "outlined"}
              >
                {t("FIXED_PRICE")}
              </Button>
              <Button
                disableElevation
                onClick={handleOpenToggler}
                color="blue"
                variant={openButtonToggler ? "contained" : "outlined"}
              >
                {t("OPEN_FOR_BID")}
              </Button>
            </Box>
            <Box component="form">
              <Typography
                color="secondary"
                sx={{ mt: 5 }}
                variant="body2"
                component="p"
              >
                {t("UPLOAD_IMAGE(PNG,JPEG/SVG)")}
              </Typography>
              <Box>
                {!image ? (
                  <Box
                    sx={{
                      my: 2,
                      border: "1px solid #c4c4c4",
                      borderStyle: "dashed",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px",
                      p: 5,
                    }}
                  >
                    <label htmlFor="icon-button-file-front">
                      <Input
                        accept="image/*"
                        id="icon-button-file-front"
                        type="file"
                        onChange={handleImageUpload}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <Typography component="span" color="secondary">
                          <ImImage />
                        </Typography>
                      </IconButton>
                    </label>
                  </Box>
                ) : (
                  <Box sx={{ my: 2, position: "relative" }}>
                    <Box sx={{ position: "absolute", left: "1%", top: "4%" }}>
                      <IconButton
                        sx={{
                          backgroundColor: `${
                            darkMode ? "#fff2f8" : "#171c26"
                          }`,
                        }}
                        onClick={() => setImage(null)}
                      >
                        <Typography component="span" color="secondary">
                          <TiTimes />
                        </Typography>
                      </IconButton>
                    </Box>
                    <img
                      style={{
                        border: "1px solid #c4c4c4",
                        borderStyle: "dashed",
                        width: "97%",
                        height: "136px",
                        padding: "5px",
                      }}
                      src={image}
                      alt="Uploaded"
                    />
                  </Box>
                )}
              </Box>
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#121212"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="nftName"
                >
                  {t("NFT_NAME")} *
                </label>
                <input
                  className={darkMode ? "inputFieldMobile" : null}
                  type="text"
                  placeholder={t(
                    "CREATE_ASSET_PLACEHOLDER_ENTER_NFT_NAME_HERE"
                  )}
                  name="nftName"
                  required
                  style={{
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#121212"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                  }}
                />
              </Stack>
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#121212"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="nftDescription"
                >
                  {t("DESCRIPTION")} *
                </label>
                <textarea
                  placeholder={t(
                    "CREATE_ASSET_PLACEHOLDER_PROVIDE_A_DETAILED_DESCRIPTION_OF_THE_ITEM"
                  )}
                  name="nftDescription"
                  required
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    border: "1px solid #c4c4c4",
                    borderRadius: "6px",
                    padding: "1rem 1.5rem",
                    color: `${darkMode ? "#ffffff" : "#121212"}`,
                    backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                    row: 5,
                    resize: "vertical",
                  }}
                />
              </Stack>
              <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                <label
                  style={{
                    color: `${darkMode ? "#ffffff" : "#121212"}`,
                    fontSize: "14px",
                  }}
                  htmlFor="nftPrice"
                >
                  {t("PRICE")} *
                </label>
                <Stack direction="row" spacing={-9.5}>
                  <input
                    className={darkMode ? "inputFieldMobile" : null}
                    type="number"
                    placeholder={t(
                      "CREATE_ASSET_PLACEHOLDER_ENTER_NFT_BASE_PRICE"
                    )}
                    name="nftPrice"
                    style={{
                      fontSize: "14px",
                      border: "1px solid #c4c4c4",
                      borderRadius: "6px",
                      padding: "1rem 1.5rem",
                      color: `${darkMode ? "#ffffff" : "#121212"}`,
                      backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                      width: "90%",
                    }}
                  />
                  <Button
                    disableElevation
                    color="secondary"
                    variant="contained"
                  >
                    {t("MINTO")}
                  </Button>
                </Stack>
              </Stack>
              {openButtonToggler ? (
                <Stack direction="column" spacing={2} sx={{ mt: 5 }}>
                  <label
                    style={{
                      color: `${darkMode ? "#ffffff" : "#121212"}`,
                      fontSize: "14px",
                      marginBottom: "1rem",
                    }}
                    htmlFor="nftName"
                  >
                    {t("AUCTION_EXPIARY_DATE")}
                  </label>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography
                        variant="body2"
                        component="span"
                        color="secondary"
                        sx={{ fontSize: "12px" }}
                      >
                        {t("EXPIARY_FROM")}
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={dateValueFrom}
                          onChange={(newValue) => {
                            setDateValueFrom(newValue);
                          }}
                          renderInput={({
                            inputRef,
                            inputProps,
                            InputProps,
                          }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <input
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "14px",
                                  border: "1px solid #c4c4c4",
                                  borderRadius: "6px",
                                  paddingTop: "5px",
                                  paddingLeft: "16px",
                                  paddingBottom: "5px",
                                  color: `${darkMode ? "#ffffff" : "#121212"}`,
                                  backgroundColor: `${
                                    darkMode ? "#121212" : "#ffffff"
                                  }`,
                                }}
                                ref={inputRef}
                                {...inputProps}
                              />
                            </Box>
                          )}
                        />
                      </LocalizationProvider>
                    </Stack>
                    <Stack direction="row" spacing={4} alignItems="center">
                      <Typography
                        variant="body2"
                        component="span"
                        color="secondary"
                        sx={{ fontSize: "12px" }}
                      >
                        {t("EXPIARY_TO")}
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={dateValueTo}
                          onChange={(newValue) => {
                            setDateValueTo(newValue);
                          }}
                          renderInput={({
                            inputRef,
                            inputProps,
                            InputProps,
                          }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <input
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "14px",
                                  border: "1px solid #c4c4c4",
                                  borderRadius: "6px",
                                  paddingTop: "5px",
                                  paddingLeft: "16px",
                                  paddingBottom: "5px",
                                  color: `${darkMode ? "#ffffff" : "#121212"}`,
                                  backgroundColor: `${
                                    darkMode ? "#121212" : "#ffffff"
                                  }`,
                                }}
                                ref={inputRef}
                                {...inputProps}
                              />
                            </Box>
                          )}
                        />
                      </LocalizationProvider>
                    </Stack>
                  </Box>
                </Stack>
              ) : null}
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 5 }}
                >
                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Typography component="span" color="secondary">
                      <RiAddBoxFill />
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{
                        color: `${darkMode ? "#ffffff" : "#121212"}`,
                        fontSize: "14px",
                      }}
                    >
                      {t("PROPERTIES")}
                    </Typography>
                  </Typography>
                  <IconButton onClick={handleOpenModal}>
                    <Typography component="span" color="secondary">
                      <RiAddBoxFill />
                    </Typography>
                  </IconButton>
                </Stack>
                <Box mt={2}>
                  <Grid container columns={{ xs: 12 }} spacing={{ xs: 2 }}>
                    {savedProperties.map((pds, index) => (
                      <Grid item xs={6} key={index}>
                        {pds.key === "" && pds.value === "" ? null : (
                          <Box
                            bgcolor={darkMode ? "#040404" : "#ffffff"}
                            sx={{
                              borderRadius: "6px",
                              px: 4,
                              py: 2,
                              textAlign: "center",
                              border: "1px solid #01D4FA",
                            }}
                          >
                            <Typography
                              variant="button"
                              component="p"
                              color="#01D4FA"
                            >
                              {pds.key}
                            </Typography>
                            <Typography variant="body2" color="secondary">
                              {pds.value}
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <GradientButtonPrimary
                type="submit"
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 5 }}
              >
                <Typography component="span" color="secondary">
                  <MdAddToPhotos />
                </Typography>
                <Typography variant="body2" component="span">
                  {t("CREATE_ASSET")}
                </Typography>
              </GradientButtonPrimary>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CreateAssets;
