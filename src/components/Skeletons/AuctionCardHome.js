import React from "react";
import { Skeleton, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";

const AuctionCardHome = ({ isPast, darkMode }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          padding: "1rem",
          zIndex: "10",
          cursor: "pointer",
          width: 270,
        }}
      >
        <Box>
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="rectangular"
            height={250}
            width={270}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              width: "176px",
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  width: "63px",
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  width: "110px",
                }}
              />
            </Box>
            <Box>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  width: "63px",
                  ml: 6,
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  width: "110px",
                }}
              />
            </Box>
          </Box>
          {!isPast && (
            <Skeleton
              sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
              animation="wave"
              variant="rectangular"
              height={50}
            />
          )}
          <Divider
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              mt: 2,
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box>
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </Box>
              <Stack direction="column">
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="text"
                  width={37}
                />
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="text"
                  width={57}
                />
              </Stack>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box>
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </Box>
              <Stack direction="column">
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="text"
                  width={37}
                />
                <Skeleton
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  }}
                  animation="wave"
                  variant="text"
                  width={57}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Skeleton variant="rectangular" height={60} width={80} />
      </Box>
    </div>
  );
};

export default AuctionCardHome;
