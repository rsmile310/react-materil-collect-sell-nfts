import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ContactUsImage from "../../assets/contact-us-writing.svg";
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";

// Icons
import { BiLogIn } from "react-icons/bi";
import { useTheme } from "@emotion/react";

const UserLogin = ({ darkMode }) => {
    const { t } = useTranslation();  
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {!isMobile ? (
                <div>
                    <Box
                        color={darkMode ? "#ffffff" : "#121212"}
                        sx={{
                            position: "relative",
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                            mt: 11,
                            mb: 5,
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                borderBottom: `2px solid ${darkMode ? "#ffffff" : "#121212"}`,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                // onClick={() => navigate("/explore?type=all")}
                                variant="h6"
                                component="p"
                                sx={{ zIndex: 2, cursor: "pointer" }}
                            >
                                {t("LOGIN")}
                            </Typography>
                            <Typography
                                variant="h1"
                                component="p"
                                sx={{
                                    background:
                                        "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                                    borderRadius: "4px",
                                    width: "30px",
                                    height: "24px",
                                    ml: -3,
                                }}
                            ></Typography>
                        </Typography>
                    </Box>
                    <Box
                        bgcolor={darkMode ? "#171c26" : "#fff2f8"}
                        sx={{ px: 5, py: 5, borderRadius: "16px" }}
                    >
                        <Box
                            bgcolor={darkMode ? "#040404" : "#ffffff"}
                            sx={{
                                p: 5,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderRadius: "16px",
                            }}
                        >
                            <Box sx={{ width: "25%" }}>
                                <img
                                    style={{ display: "block" }}
                                    src={ContactUsImage}
                                    alt="Login to GenZers NFT Marketplace"
                                />
                            </Box>
                            <Box component="form" sx={{ width: "60%" }}>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="username"
                                    >
                                        {t("USER_NAME")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="text"
                                        placeholder="Enter your username here"
                                        name="username"
                                        id="username"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "90%",
                                        }}
                                    />
                                </Stack>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="email"
                                    >
                                        {t("YOUR_EMAIL")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="email"
                                        placeholder="Enter your email here"
                                        name="email"
                                        id="email"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "90%",
                                        }}
                                    />
                                </Stack>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="password"
                                    >
                                        {t("YOUR_PASSWORD")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="password"
                                        placeholder="Enter your password here"
                                        name="password"
                                        id="password"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "90%",
                                        }}
                                    />
                                </Stack>
                                <Stack alignItems="flex-end">
                                    <GradientButtonPrimary
                                        type="submit"
                                        //onClick={() => Login(username, password, email, aff, ref)}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Typography component="span" color="#ffffff">
                                            <BiLogIn />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            sx={{ textTransform: "capitalize", color: "#ffffff" }}
                                        >
                                            {t("LOGINNOW")}
                                        </Typography>
                                    </GradientButtonPrimary>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </div>
            ) : (
                <div style={{ marginBottom: "2.5rem" }}>
                    <Box
                        sx={{
                            position: "fixed",
                            top: "3%",
                            zIndex: "10000",
                            left: "40%",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            color="secondary"
                            component="div"
                            sx={{
                                borderBottom: `${darkMode ? "2px solid #ffffff" : "1px solid #171c26"
                                    }`,
                            }}
                        >
                            {t("LOGIN")}
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Box
                            bgcolor={darkMode ? "#040404" : "#ffffff"}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderRadius: "16px",
                            }}
                        >
                            <Box /*onSubmit={ handleSubmitUserLogin }*/ component="form" width={"80%"}>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="username"
                                    >
                                        {t("USER_NAME")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="text"
                                        placeholder="Enter your username here"
                                        name="username"
                                        id="username"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "100%",
                                        }}
                                    />
                                </Stack>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="useremail"
                                    >
                                        {t("YOUR_EMAIL")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="email"
                                        placeholder="Enter your email here"
                                        name="useremail"
                                        id="useremail"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "100%",
                                        }}
                                    />
                                </Stack>
                                <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                                    <label
                                        style={{
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            fontSize: "14px",
                                        }}
                                        htmlFor="password"
                                    >
                                        {t("YOUR_PASSWORD")}
                                    </label>
                                    <input
                                        className={darkMode && "inputField"}
                                        type="password"
                                        placeholder="Enter your password here"
                                        name="password"
                                        id="password"
                                        required
                                        style={{
                                            fontSize: "14px",
                                            border: "1px solid #c4c4c4",
                                            borderRadius: "6px",
                                            padding: "1rem 1.5rem",
                                            color: `${darkMode ? "#ffffff" : "#040404"}`,
                                            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
                                            width: "100%",
                                        }}
                                    />
                                </Stack>                            
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        width: "100%",
                                        ml: 6,
                                    }}
                                >
                                    <GradientButtonPrimary
                                        type="submit"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Typography component="span" color="#ffffff">
                                            <BiLogIn />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            sx={{ textTransform: "capitalize", color: "#ffffff" }}
                                        >
                                            {t("LOGINNOW")}
                                        </Typography>
                                    </GradientButtonPrimary>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
            )}
        </>
    );
};

export default UserLogin;
