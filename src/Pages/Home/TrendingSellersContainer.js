import { useTheme } from "@emotion/react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// Icons
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

import TrendingSellersHome from "../../components/Skeletons/TrendingSellersHome";
import SellersCardPrev from "../../components/SellersCard/SellersCardPrev";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 3.2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 3.2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2.2,
        initialSlide: 2.2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const TrendingSellerContainer = ({ darkMode }) => {
  const [trendingSellers, setTrendingSellers] = useState([]);

  const trendingSellersRef = useRef();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Live Auctions
  useEffect(() => {
    axios.get("/sellerData.json").then((res) => {
      setTrendingSellers(res.data);
    });
  }, []);

  // Slide Handler for trending nft's
  const nextButtonSeller = () => {
    trendingSellersRef.current.slickNext();
  };
  const previousButtonSeller = () => {
    trendingSellersRef.current.slickPrev();
  };

  // handle seller details
  const handleDetails = (id) => {
    navigate(`/trending-sellers/${id}`);
  };

  return (
    <>
      {/* Web */}
      {!isMobile ? (
        <Box
          sx={{
            mt: 10,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Typography
              component="div"
              sx={{
                borderBottom: `${
                  darkMode ? "2px solid #ffffff" : "2px solid #040404"
                }`,
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                {t("TRENDING_SELLERS")}
              </Typography>
              <Typography
                variant="h1"
                component="p"
                sx={{
                  background:
                    "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                  borderRadius: "4px",
                  width: "35px",
                  height: "24px",
                  ml: -2,
                  display: `${darkMode ? "block" : "none"}`,
                }}
              ></Typography>
            </Typography>
            <Typography varaint="body2" component="div">
              <Button
                onClick={() => navigate("/trending-sellers")}
                color="secondary"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ textTransform: "capitalize" }}
                >
                  {t("VIEW_ALL")}
                </Typography>
              </Button>
            </Typography>
          </Box>
          {trendingSellers.length === 0 && (
            <Slider ref={trendingSellersRef} {...sliderSettings}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <TrendingSellersHome darkMode={darkMode} key={n} />
              ))}
            </Slider>
          )}
          {trendingSellers.length > 0 && (
            <Slider ref={trendingSellersRef} {...sliderSettings}>
              {trendingSellers.map((tsp) => (
                <div key={tsp.id}>
                  <SellersCardPrev
                    handleDetails={handleDetails}
                    darkMode={darkMode}
                    tsp={tsp}
                  />
                </div>
              ))}
            </Slider>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Button onClick={previousButtonSeller} color="secondary">
              <Typography component="span" color="secondary" fontSize={25}>
                <HiArrowNarrowLeft />
              </Typography>
            </Button>
            <Button onClick={nextButtonSeller} color="secondary">
              <Typography component="span" color="secondary" fontSize={25}>
                <HiArrowNarrowRight />
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        // Mobile
        <Box
          sx={{
            py: 5,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="div"
              sx={{
                borderBottom: `${
                  darkMode ? "2px solid #ffffff" : "2px solid #040404"
                }`,
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                sx={{ zIndex: 2, cursor: "pointer" }}
              >
                {t("TRENDING_SELLERS")}
              </Typography>
            </Typography>
            <Typography varaint="body2" component="div">
              <Button
                onClick={() => navigate("/trending-sellers")}
                color="secondary"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ textTransform: "capitalize" }}
                >
                  {t("VIEW_ALL")}
                </Typography>
              </Button>
            </Typography>
          </Box>
          {trendingSellers.length === 0 && (
            <Slider ref={trendingSellersRef} {...sliderSettings}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <TrendingSellersHome darkMode={darkMode} key={n} />
              ))}
            </Slider>
          )}
          {trendingSellers.length > 0 && (
            <Slider ref={trendingSellersRef} {...sliderSettings}>
              {trendingSellers.map((tsp) => (
                <div key={tsp.id}>
                  <SellersCardPrev
                    handleDetails={handleDetails}
                    darkMode={darkMode}
                    tsp={tsp}
                  />
                </div>
              ))}
            </Slider>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Button onClick={previousButtonSeller} color="secondary">
              <Typography component="span" color="secondary">
                <HiArrowNarrowLeft />
              </Typography>
            </Button>
            <Button onClick={nextButtonSeller} color="secondary">
              <Typography component="span" color="secondary">
                <HiArrowNarrowRight />
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TrendingSellerContainer;
