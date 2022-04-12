import { useTheme } from "@emotion/react";
import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children, darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container
        sx={
          darkMode
            ? { backgroundColor: "#040404" }
            : { backgroundColor: "#ffffff" }
        }
      >
        <Navigation darkMode={darkMode} />
        <SideBar darkMode={darkMode} />
        <Container sx={isMobile ? { py: 10 } : { mt: -10 }}>
          {children}
        </Container>
      </Container>
    </>
  );
};

export default Layout;
