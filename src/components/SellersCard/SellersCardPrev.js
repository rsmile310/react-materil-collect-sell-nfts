import React from "react";
import { Avatar, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

// Icon
import { AiFillCrown } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

const SellersCardPrev = ({ tsp, darkMode, handleDetails }) => {
  const {
    id,
    sellerUserName,
    sellerInfo,
    sellerImage,
    sellerItems,
    sellerName,
  } = tsp;

  const { t } = useTranslation();

  const createdItems = sellerItems.filter((si) => si.tag === "createdItems");
  const ownedItems = sellerItems.filter((si) => si.tag === "ownedItems");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      onClick={() => handleDetails(id)}
      className="auctionCardAuction"
      style={{
        marginRight: `${isMobile ? "1rem" : "4rem"}`,
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <div
        className="auctionCardGradientBorder"
        style={{
          padding: "1px",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            borderRadius: "16px",
            p: 2,
            cursor: "pointer",
            backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
            boxShadow: `${!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}`,
          }}
        >
          <Box
            color="secondary"
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar
                src={sellerImage}
                alt={sellerUserName}
                sx={{
                  width: "50px",
                  height: "50px",
                  border: `2px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                }}
              />
            </Box>
            <Box>
              <Typography
                color="secondary"
                variant="caption"
                component="h3"
                sx={{ fontWeight: "500" }}
              >
                {sellerName}
              </Typography>
              <Typography
                color="secondary"
                variant="caption"
                component="h2"
                sx={{ fontWeight: 500 }}
              >
                {sellerUserName}
              </Typography>
            </Box>
          </Box>
          <Typography
            color="secondary"
            variant="caption"
            component="div"
            sx={{
              fontWeight: 400,
              my: 3,
              fontSize: "10px",
              textAlign: "justify",
            }}
          >
            {sellerInfo}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography component="span" color="secondary">
                <MdAddToPhotos />
              </Typography>
              <Typography
                color="secondary"
                variant="caption"
                sx={{ fontSize: "8px" }}
              >
                {createdItems?.length} {t("ITEMS_CREATED")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography component="span" color="secondary">
                <AiFillCrown />
              </Typography>
              <Typography
                color="secondary"
                variant="caption"
                sx={{ fontSize: "8px" }}
              >
                {ownedItems?.length} {t("ITEMS_OWNED")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SellersCardPrev;
