import React, { useEffect } from "react";

import styles from "./statsComponent.module.css";

import anime from "animejs";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StatsComponent = ({
  isMobile,
  darkMode,
  totalNFT = 80,
  totalSeller = 30,
  totalSold = 50,
}) => {
  const { t } = useTranslation();

  // Outer paths
  useEffect(() => {
    const outerPathEls = document.querySelectorAll(".outerPath");
    // var pathEls = document.getElementsByClassName("path");
    for (var i = 0; i < outerPathEls.length; i++) {
      let pathEl = outerPathEls[i];
      let offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 1000),
        delay: function (el, i) {
          return i * 250;
        },
        loop: false,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  }, []);

  // Inner Paths
  useEffect(() => {
    const innerPathEls = document.querySelectorAll(".innerPath");
    for (var i = 0; i < innerPathEls.length; i++) {
      let pathEl = innerPathEls[i];
      let offset = anime.setDashoffset(pathEl);
      let x = 0.5;
      let y = -0.5;
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: function (el, i) {
          return i * 150;
        },
        loop: false,
        direction: "alternate",
        translateX: function () {
          return x * 3;
        },
        translateY: function () {
          return y * 3;
        },
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="topPart"
        style={
          !isMobile
            ? { position: "relative" }
            : { position: "relative", marginBottom: -40 }
        }
      >
        <div className="totalNFT" style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <svg
              className={styles.svg}
              width={!isMobile ? "186" : "150"}
              height={!isMobile ? "205" : "180"}
              viewBox="0 0 186 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="outerPath"
                d="M0.765381 56.7247C0.765381 53.2821 2.62787 50.1088 5.63362 48.4303L88.1233 2.36635C91.0023 0.758649 94.509 0.758868 97.3878 2.36693L179.851 48.4301C182.857 50.1087 184.719 53.2817 184.719 56.7239V148.284C184.719 151.726 182.857 154.899 179.851 156.578L97.3879 202.641C94.509 204.249 91.0023 204.249 88.1233 202.642L5.63362 156.578C2.62787 154.899 0.765381 151.726 0.765381 148.283V56.7247Z"
                stroke="url(#paint0_linear_986_1351)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1351"
                  x1="2.96261"
                  y1="20.7271"
                  x2="231.466"
                  y2="29.996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AD18C7" />
                  <stop offset="1" stopColor="#11C4E3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", left: "5%", top: "6%" }}>
            <svg
              width={!isMobile ? "163" : "133"}
              height={!isMobile ? "182" : "162"}
              viewBox="0 0 163 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="innerPath"
                d="M1.99976 46.456L81.5672 2L161.135 46.456V135.315L81.5672 179.745L1.99976 135.315V46.456Z"
                stroke="url(#paint0_linear_986_1352)"
                strokeWidth="3.03"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1352"
                  x1="81.5398"
                  y1="-1.87497"
                  x2="81.5398"
                  y2="183.62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCE3F7" />
                  <stop offset="0.3" stopColor="#FCE1F7" stopOpacity="0.99" />
                  <stop offset="0.44" stopColor="#FBDCF7" stopOpacity="0.96" />
                  <stop offset="0.54" stopColor="#FAD2F8" stopOpacity="0.91" />
                  <stop offset="0.63" stopColor="#F9C5F8" stopOpacity="0.84" />
                  <stop offset="0.71" stopColor="#F7B3F9" stopOpacity="0.74" />
                  <stop offset="0.78" stopColor="#F59EFA" stopOpacity="0.63" />
                  <stop offset="0.84" stopColor="#F384FB" stopOpacity="0.49" />
                  <stop offset="0.9" stopColor="#F066FC" stopOpacity="0.33" />
                  <stop offset="0.96" stopColor="#ED46FE" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#EA29FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", top: "30%", left: "27%" }}>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "h4" : "h5"}
              component="p"
              fontWeight={700}
              mb={1}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #E552FF, 0 0 20px #E552FF, 0 0 40px #E552FF, 0 0 80px #E552FF, 0 0 120px #E552FF",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {totalNFT}
            </Typography>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "subtitle1" : "body2"}
              component="p"
              fontWeight={500}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #01D4FA, 0 0 20px #01D4FA, 0 0 40px #01D4FA, 0 0 80px #01D4FA, 0 0 120px #01D4FA",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {t("TOTAL_NFT")}
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="bottomPart"
        style={
          !isMobile
            ? { display: "flex", position: "relative", gap: 65 }
            : { display: "flex", position: "relative", gap: 20 }
        }
      >
        <div className="totalSeller" style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <svg
              className={styles.svg}
              width={!isMobile ? "186" : "150"}
              height={!isMobile ? "205" : "180"}
              viewBox="0 0 186 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="outerPath"
                d="M0.765381 56.7247C0.765381 53.2821 2.62787 50.1088 5.63362 48.4303L88.1233 2.36635C91.0023 0.758649 94.509 0.758868 97.3878 2.36693L179.851 48.4301C182.857 50.1087 184.719 53.2817 184.719 56.7239V148.284C184.719 151.726 182.857 154.899 179.851 156.578L97.3879 202.641C94.509 204.249 91.0023 204.249 88.1233 202.642L5.63362 156.578C2.62787 154.899 0.765381 151.726 0.765381 148.283V56.7247Z"
                stroke="url(#paint0_linear_986_1351)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1351"
                  x1="2.96261"
                  y1="20.7271"
                  x2="231.466"
                  y2="29.996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AD18C7" />
                  <stop offset="1" stopColor="#11C4E3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", left: "5%", top: "6%" }}>
            <svg
              width={!isMobile ? "163" : "133"}
              height={!isMobile ? "182" : "162"}
              viewBox="0 0 163 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="innerPath"
                d="M1.99976 46.456L81.5672 2L161.135 46.456V135.315L81.5672 179.745L1.99976 135.315V46.456Z"
                stroke="url(#paint0_linear_986_1352)"
                strokeWidth="3.03"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1352"
                  x1="81.5398"
                  y1="-1.87497"
                  x2="81.5398"
                  y2="183.62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCE3F7" />
                  <stop offset="0.3" stopColor="#FCE1F7" stopOpacity="0.99" />
                  <stop offset="0.44" stopColor="#FBDCF7" stopOpacity="0.96" />
                  <stop offset="0.54" stopColor="#FAD2F8" stopOpacity="0.91" />
                  <stop offset="0.63" stopColor="#F9C5F8" stopOpacity="0.84" />
                  <stop offset="0.71" stopColor="#F7B3F9" stopOpacity="0.74" />
                  <stop offset="0.78" stopColor="#F59EFA" stopOpacity="0.63" />
                  <stop offset="0.84" stopColor="#F384FB" stopOpacity="0.49" />
                  <stop offset="0.9" stopColor="#F066FC" stopOpacity="0.33" />
                  <stop offset="0.96" stopColor="#ED46FE" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#EA29FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", top: "30%", left: "20%" }}>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "h4" : "h5"}
              component="p"
              fontWeight={700}
              mb={1}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #E552FF, 0 0 20px #E552FF, 0 0 40px #E552FF, 0 0 80px #E552FF, 0 0 120px #E552FF",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {totalSeller}
            </Typography>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "subtitle1" : "body2"}
              component="p"
              fontWeight={500}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #01D4FA, 0 0 20px #01D4FA, 0 0 40px #01D4FA, 0 0 80px #01D4FA, 0 0 120px #01D4FA",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {t("TOTAL_SELLER")}
            </Typography>
          </div>
        </div>
        <div className="totalSold" style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <svg
              className={styles.svg}
              width={!isMobile ? "186" : "150"}
              height={!isMobile ? "205" : "180"}
              viewBox="0 0 186 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="outerPath"
                d="M0.765381 56.7247C0.765381 53.2821 2.62787 50.1088 5.63362 48.4303L88.1233 2.36635C91.0023 0.758649 94.509 0.758868 97.3878 2.36693L179.851 48.4301C182.857 50.1087 184.719 53.2817 184.719 56.7239V148.284C184.719 151.726 182.857 154.899 179.851 156.578L97.3879 202.641C94.509 204.249 91.0023 204.249 88.1233 202.642L5.63362 156.578C2.62787 154.899 0.765381 151.726 0.765381 148.283V56.7247Z"
                stroke="url(#paint0_linear_986_1351)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1351"
                  x1="2.96261"
                  y1="20.7271"
                  x2="231.466"
                  y2="29.996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AD18C7" />
                  <stop offset="1" stopColor="#11C4E3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", left: "5%", top: "6%" }}>
            <svg
              width={!isMobile ? "163" : "133"}
              height={!isMobile ? "182" : "162"}
              viewBox="0 0 163 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="innerPath"
                d="M1.99976 46.456L81.5672 2L161.135 46.456V135.315L81.5672 179.745L1.99976 135.315V46.456Z"
                stroke="url(#paint0_linear_986_1352)"
                strokeWidth="3.03"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_986_1352"
                  x1="81.5398"
                  y1="-1.87497"
                  x2="81.5398"
                  y2="183.62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCE3F7" />
                  <stop offset="0.3" stopColor="#FCE1F7" stopOpacity="0.99" />
                  <stop offset="0.44" stopColor="#FBDCF7" stopOpacity="0.96" />
                  <stop offset="0.54" stopColor="#FAD2F8" stopOpacity="0.91" />
                  <stop offset="0.63" stopColor="#F9C5F8" stopOpacity="0.84" />
                  <stop offset="0.71" stopColor="#F7B3F9" stopOpacity="0.74" />
                  <stop offset="0.78" stopColor="#F59EFA" stopOpacity="0.63" />
                  <stop offset="0.84" stopColor="#F384FB" stopOpacity="0.49" />
                  <stop offset="0.9" stopColor="#F066FC" stopOpacity="0.33" />
                  <stop offset="0.96" stopColor="#ED46FE" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#EA29FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", top: "30%", left: "15%" }}>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "h4" : "h5"}
              component="p"
              fontWeight={700}
              mb={1}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #E552FF, 0 0 20px #E552FF, 0 0 40px #E552FF, 0 0 80px #E552FF, 0 0 120px #E552FF",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {totalSold}
            </Typography>
            <Typography
              color="secondary"
              textAlign="center"
              variant={!isMobile ? "subtitle1" : "body2"}
              component="p"
              fontWeight={500}
              fontSize={isMobile ? 12 : null}
              sx={
                darkMode
                  ? {
                      textShadow:
                        "0 0 10px #01D4FA, 0 0 20px #01D4FA, 0 0 40px #01D4FA, 0 0 80px #01D4FA, 0 0 120px #01D4FA",
                      letterSpacing: "0.1rem",
                    }
                  : {
                      textShadow: "0 0 10px rgba(0,0,0,0.1)",
                      letterSpacing: "0.1rem",
                    }
              }
            >
              {t("TOTAL_NFT_SOLD")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
