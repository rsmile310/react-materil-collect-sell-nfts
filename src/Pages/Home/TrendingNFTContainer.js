import { useTheme } from "@emotion/react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// Icons
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import ArtCardHome from "../../components/Skeletons/ArtCardHome";
import FavoriteCardPrev from "../../components/FavouriteCard/FavoriteCardPrev";

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
      breakpoint: 966,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2.2,
        initialSlide: 2.2,
      },
    },
    {
      breakpoint: 500,
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

const TrendingNFTContainer = ({ darkMode }) => {
  const [trendingNFT, setTrendingNFT] = useState([]);

  const trendingSlideRef = useRef();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Live Auctions
  useEffect(() => {
    axios.get("/artWorkData.json").then((res) => {
      setTrendingNFT(res.data);
    });
  }, []);

  // Slide Handler for trending nft's
  const nextButtonTrending = () => {
    trendingSlideRef.current.slickNext();
  };
  const previousButtonTrending = () => {
    trendingSlideRef.current.slickPrev();
  };

  // Handle details
  const handleDetails = (id) => {
    navigate(`/explore/${id}`);
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
                {t("TRENDING_NFTS")}
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
                onClick={() => navigate("/explore?type=all")}
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
          {trendingNFT.length === 0 && (
            <Slider ref={trendingSlideRef} {...sliderSettings}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <ArtCardHome darkMode={darkMode} key={n} />
              ))}
            </Slider>
          )}
          {trendingNFT.length > 0 && (
            <Slider ref={trendingSlideRef} {...sliderSettings}>
              {trendingNFT.map((tnft) => (
                <div key={tnft.id}>
                  <FavoriteCardPrev
                    handleDetails={handleDetails}
                    darkMode={darkMode}
                    tnft={tnft}
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
            <Button onClick={previousButtonTrending} color="secondary">
              <Typography component="span" color="secondary" fontSize={25}>
                <HiArrowNarrowLeft />
              </Typography>
            </Button>
            <Button onClick={nextButtonTrending} color="secondary">
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
                {t("TRENDING_NFTS")}
              </Typography>
            </Typography>
            <Typography varaint="body2" component="div">
              <Button
                onClick={() => navigate("/explore?type=all")}
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
          {trendingNFT.length === 0 && (
            <Slider ref={trendingSlideRef} {...sliderSettings}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <ArtCardHome darkMode={darkMode} key={n} />
              ))}
            </Slider>
          )}
          {trendingNFT.length > 0 && (
            <Slider ref={trendingSlideRef} {...sliderSettings}>
              {trendingNFT.map((tnft) => (
                <div key={tnft.id}>
                  <FavoriteCardPrev
                    handleDetails={handleDetails}
                    darkMode={darkMode}
                    tnft={tnft}
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
            <Button onClick={previousButtonTrending} color="secondary">
              <Typography component="span" color="secondary">
                <HiArrowNarrowLeft />
              </Typography>
            </Button>
            <Button onClick={nextButtonTrending} color="secondary">
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

export default TrendingNFTContainer;
