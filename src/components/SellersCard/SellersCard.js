import React from "react";
import { Avatar, Grid, Typography, Grow } from "@mui/material";
import { Box } from "@mui/system";

// Icon
import { AiFillCrown } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SellersCard = ({ ts, handleSellerDetails, darkMode }) => {
  const { t } = useTranslation();
  const {
    id,
    sellerName,
    sellerUserName,
    sellerInfo,
    sellerImage,
    sellerItems,
  } = ts;

  const createdItems = sellerItems.filter((si) => si.tag === "createdItems");
  const ownedItems = sellerItems.filter((si) => si.tag === "ownedItems");

  const parsedId = parseInt(id) * 100;

  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 + parsedId } : {})}
    >
      <Grid item xs={1} sm={6} md={3} zIndex={1000}>
        <Box
          style={{
            background: `${
              darkMode
                ? "linear-gradient(to right, #AD18C7, #11C4E3)"
                : "inherit"
            }`,
            padding: `${darkMode ? "1px" : "0"}`,
            borderRadius: "16px",
          }}
        >
          <Box
            bgcolor={darkMode ? "#121212" : "#ffffff"}
            onClick={() => handleSellerDetails(id)}
            sx={{
              borderRadius: "16px",
              p: 2,
              cursor: "pointer",
              boxShadow: `${!darkMode && "0px 4px 4px rgba(0, 0, 0, 0.25)"}`,
            }}
          >
            <Box
              color={darkMode ? "#ffffff" : "#121212"}
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
                    border: `3px solid ${darkMode ? "#ffffff" : "#01D4FA"}`,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  component="h3"
                  sx={{ fontWeight: "500" }}
                >
                  {sellerName}
                </Typography>
                <Typography
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
                color={darkMode ? "#ffffff" : "#121212"}
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
        </Box>
      </Grid>
    </Grow>
  );
};

export default SellersCard;
