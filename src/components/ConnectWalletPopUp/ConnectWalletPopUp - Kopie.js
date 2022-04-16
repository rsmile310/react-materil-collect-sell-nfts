import React, {useState } from "react";
import {
  Backdrop,
  Box,
  Fade,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useLocation } from "react-router-dom";
// Icons
import MetaMaskIcon from "../../assets/Icons/darkUIIcons/metaMaskIcon.svg";
import MetaMaskIconLight from "../../assets/Icons/lightUIIcons/metaMaskIcon.svg";
import BinanceWalletIcon from "../../assets/Icons/darkUIIcons/binanceWalletIcon.svg";
import TrustwalletIcon from "../../assets/Icons/darkUIIcons/trustWalletIcon.svg";
import MathWalletIcon from "../../assets/Icons/darkUIIcons/mathwallet-vector-logo-dark.svg";
import MathWalletIconLight from "../../assets/Icons/lightUIIcons/mathwallet-vector-logo-light.svg";

import { FaWallet } from "react-icons/fa";

import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

import styles from "./PopUp.module.css";

//MDB
import * as Realm from "realm-web";
const APP_ID = "data-qewhf";
const app = new Realm.App({id: APP_ID});
const DATABASE_NAME = "dbdev";
const COLLECTION_NAME = "_User";
const CLUSTER = "GDB1";

const ConnectWalletPopUp = ({
  openModal,
  handleCloseModal,
  darkMode,
  handleConnectWallet,
  handleDisconnectWallet,
}) => {
  const query = new URLSearchParams(useLocation().search);
  const r = query.get("r") || "55732";
  const a = query.get("a") || "48947";
  //const { authenticate, isAuthenticated, username } = user;
  const { t } = useTranslation();
  
  const [walletAddress, setWalletAddress] = useState("");
  const [WID, setWID] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user, setUser] = React.useState(app.currentUser);

  const [currentUser, setCurrentUser] = React.useState(app.currentUser);
  const showAccount = document.querySelector('.showAccount');

  const login = async () => {
    //########
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);
    const walletAddress = (accounts[0]);
    window.WID = walletAddress;
    
    console.log("walletAddress:", walletAddress);
  
    const credentials = Realm.Credentials.function({
      "walletAddress": walletAddress,
      "r": r,
      "a": a,
  });
  
  try {
    
    const user = await app.logIn(credentials);
    console.assert(user.id === app.currentUser.id);
    setCurrentUser(app.currentUser);
    setUser(user);
    localStorage.setItem('user', user)
    console.log("user.id:", user.id);
    console.log("user:", user);
    //console.log("app.currentUser.id:", app.currentUser.id);
    
    
    //const userId = app.currentUser.id;
//###########
/*
  const credentials = Realm.Credentials.anonymous();
try {
  console.log("Ref:", ref);
  console.log("Aff:", aff);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  
  console.log("app.currentUser.id:", app.currentUser.id);
  console.log("user.id:", user.id);
  */
 // const mongo = app.currentUser.mongoClient(CLUSTER);
 // const collection = mongo.db(DATABASE_NAME).collection(COLLECTION_NAME);
  
/*
  await collection.updateOne(
  {"userData.walletAddress": walletAddress},
  //{ userId: app.currentUser.id }, // Query for the user object of the logged in user
  { set: { "user_id": userId } } 
);
*/

  } catch (err) {
    console.error("Failed to log in", err);
  }
/*
await collection.insertOne({
  
  // Include both the internal ID and external ID
  userId: app.currentUser.id, 
  walletAddress: walletAddress,
  id: walletAddress,
  // Add any other data you want to include
  created_at: new Date()
  //role: 'user',
})
.then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  .catch(err => console.error(`Failed to insert item: ${err}`))
// Refresh the user's local customData property
//await app.currentUser.refreshCustomData();
// Log the user's new favorite color
*/
//#####
/*
console.log(
  "WalletAddressLog: ",
  app.currentUser.customData.walletAddress
);
console.log(
  "Refferal: ",
  app.currentUser.customData.refferal
);
  
  console.log("User ID:", user.id);
} catch(err) {
  console.error("Failed to log in", err);
}*/
//###############
  /*
    if (!isAuthenticated) {
     
     
      await authenticate({ signingMessage: "Log in to GenZers" })
      
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          console.log("Ref:", ref);
          console.log("Aff:", aff);
          console.log("Username:", username);
          user.set("ref", ref);
          user.set("aff", aff);
          user.save()

        })

        .catch(function (error) {
          console.log(error);
        });
    }*/
  }  
  return (
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
        {!isMobile ? (
          <Box
            bgcolor={darkMode ? "#040708" : "#fff2f8"}
            className={styles.modalStyle}
          >
            <Box display="flex" alignItems="center" gap={4}>
              <Typography component="span" color="secondary" mt={0.5}>
                <FaWallet fontSize={28} />
              </Typography>
              <Typography
                variant="h5"
                borderBottom={`2px solid ${darkMode ? "#ffffff" : "#121212"}`}
                pb={"5px"}
                color="secondary"
              >
                {t("CONNECT_TO_WALLET")}
              </Typography>
            </Box>
            <Box mt={6} Navigation WID={WID}>
              <Grid
                container
                columns={{ xs: 12, md: 12 }}
                spacing={{ xs: 4, md: 4 }}
              >
                <Grid item xs={6} md={6}>
                  <Box
                    bgcolor={darkMode ? "#171c26" : "#fff2f8"}
                    onClick={() => { login(); handleConnectWallet(); }}
                  //onClick={() => { handleConnectWallet();}}
                    className={styles.buttonStyle}
                  >
                    {darkMode ? (
                      <img src={MetaMaskIcon} alt="Meta Mask" />
                    ) : (
                      <img src={MetaMaskIconLight} alt="Meta Mask" />
                    )}
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      MetaMask
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box
                    bgcolor={darkMode ? "#171c26" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyle}
                  >
                    <img
                      // style={{ width: "30px" }}
                      src={BinanceWalletIcon}
                      alt="Binance Wallet"
                    />
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Binance
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box
                    bgcolor={darkMode ? "#171c26" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyle}
                  >
                    <img
                      // style={{ width: "30px" }}
                      src={TrustwalletIcon}
                      alt="Trust Wallet"
                    />
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Trust Wallet
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box
                    bgcolor={darkMode ? "#171c26" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    sx={{
                      padding: "1.8rem 0",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {darkMode ? (
                      <img
                        style={{ width: "30%" }}
                        src={MathWalletIcon}
                        alt="Math Wallet"
                      />
                    ) : (
                      <img
                        style={{ width: "30%" }}
                        src={MathWalletIconLight}
                        alt="Math Wallet"
                      />
                    )}
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Math Wallet
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box
            className={styles.modalStyleMobile}
            bgcolor={darkMode ? "#171c26" : "#fff2f8"}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContect="center"
            >
              <Typography component="span" color="secondary">
                <FaWallet />
              </Typography>
              <Typography
                variant="subtitle1"
                color="secondary"
                pb={"5px"}
                borderBottom={`2px solid ${darkMode ? "#ffffff" : "#121212"}`}
              >
                {t("CONNECT_TO_WALLET")}
              </Typography>
            </Box>
            <Box mt={4}>
              <Grid
                container
                columns={{ xs: 1, sm: 12 }}
                spacing={{ xs: 2, sm: 4 }}
              >
                <Grid item xs={6} sm={6}>
                  <Box
                    bgcolor={darkMode ? "#000000" : "#fff2f8"}
                   // onClick={() => { login(); handleConnectWallet();}}
                   onClick={ handleConnectWallet }
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyleMobile}
                  >
                    {darkMode ? (
                      <img
                        style={{ width: "30px" }}
                        src={MetaMaskIcon}
                        alt="Meta Mask"
                      />
                    ) : (
                      <img
                        style={{ width: "30px" }}
                        src={MetaMaskIconLight}
                        alt="Meta Mask"
                      />
                    )}
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {t("METAMASK")}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Box
                    bgcolor={darkMode ? "#000000" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyleMobile}
                  >
                    <img
                      style={{ width: "30px" }}
                      src={BinanceWalletIcon}
                      alt="Binance Wallet"
                    />
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Binance
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Box
                    bgcolor={darkMode ? "#000000" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyleMobile}
                  >
                    <img
                      style={{ width: "30px" }}
                      src={TrustwalletIcon}
                      alt="Trust Wallet"
                    />
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Trust Wallet
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Box
                    bgcolor={darkMode ? "#000000" : "#fff2f8"}
                    // onClick={handleDisconnectWallet}
                    disableElevation
                    color="accent"
                    variant="contained"
                    className={styles.buttonStyleMobile}
                  >
                    {darkMode ? (
                      <img
                        style={{ width: "30px" }}
                        src={MathWalletIcon}
                        alt="Math Wallet"
                      />
                    ) : (
                      <img
                        style={{ width: "30px" }}
                        src={MathWalletIconLight}
                        alt="Math Wallet"
                      />
                    )}
                    <Typography
                      variant="span"
                      color="secondary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Math Wallet
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Fade>
    </Modal>
  );
};

export default ConnectWalletPopUp;