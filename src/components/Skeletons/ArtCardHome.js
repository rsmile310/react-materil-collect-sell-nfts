import React from "react";
import { Grid, Skeleton, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";

const ArtCardHome = ({ darkMode }) => {
  return (
    <Grid item xs={1} md={4}>
      <Box
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
        <Box sx={{ mt: 3 }}>
          <Skeleton
            sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
            animation="wave"
            variant="text"
            width={176}
          />
          <Skeleton
            sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
            animation="wave"
            variant="text"
            width={40}
          />
          <Divider
            style={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              margin: "16px 0",
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <Divider
            style={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              margin: "10px 0",
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Skeleton
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                width: "40%",
              }}
              animation="wave"
              variant="text"
            />
            <Skeleton
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                width: "40%",
              }}
              animation="wave"
              variant="text"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ArtCardHome;
