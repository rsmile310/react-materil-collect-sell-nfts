import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TrendingSellersFB = ({ darkMode }) => {
  return (
    <Grid item xs={1} md={3}>
      <Box
        sx={{
          backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          zIndex: "10",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: 3 }}>
          <Box>
            <Skeleton
              sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
              animation="wave"
              variant="circular"
              height={50}
              width={50}
            />
          </Box>
          <Box>
            <Skeleton
              sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
              animation="wave"
              variant="text"
              width={120}
            />
            <Skeleton
              sx={{ backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}` }}
              animation="wave"
              variant="text"
              width={57}
            />
          </Box>
        </Box>
        <Box>
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
          />
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
          />
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
          />
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
            width={200}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
            width={80}
          />
          <Skeleton
            sx={{
              backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
              borderRadius: "20px",
            }}
            animation="wave"
            variant="text"
            width={80}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default TrendingSellersFB;
