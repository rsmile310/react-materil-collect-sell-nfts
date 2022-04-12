import React, { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import cardStyles from "./cardStyle.module.css";
import { Box } from "@mui/system";
import axios from "axios";
import { Avatar, Divider, Stack, Typography } from "@mui/material";
import { HiOutlineClock } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: i * 1,
  y: i * -4,
  scale: 0.9,
  rot: 0, //-10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.1, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(5000px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function MobileCardDeck({ darkMode }) {
  const [artWorks, setArtWorks] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/artWorkData.json").then((res) => setArtWorks(res.data));
  }, []);

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(artWorks.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === artWorks.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      <Box
        sx={{
          mt: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={cardStyles.deck} key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                background: `${
                  darkMode
                    ? "linear-gradient(to right, #ad18c7, #11c4e3)"
                    : null
                }`,
                padding: "1px",
                borderRadius: "20px",
                // marginBottom: "2rem",
                boxShadow: `${
                  !darkMode ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : null
                }`,
              }}
            >
              <div
                style={{
                  backgroundColor: `${darkMode ? "#121212" : "#ffffff"}`,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  padding: "1rem",
                  zIndex: "10",
                  cursor: "pointer",
                }}
              >
                <div onClick={() => navigate(`/explore/${artWorks[i].id}`)}>
                  <img
                    style={{
                      width: "100%",
                      height: "185px",
                      borderRadius: "20px",
                    }}
                    src={artWorks[i].artworkImage}
                    alt={artWorks[i].artworkTitle}
                  />
                </div>
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    color="secondary.main"
                    mb={1}
                    sx={{ fontSize: "14px" }}
                  >
                    {artWorks[i].artworkTitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="gray"
                    sx={{ fontSize: "12px" }}
                  >
                    {t("PRICE")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="secondary"
                    sx={{ fontSize: "14px" }}
                  >
                    {artWorks[i].artworkPrice}
                  </Typography>
                  <Divider
                    style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box>
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                            height: "30px",
                            width: "30px",
                          }}
                          src={artWorks[i].creatorImage}
                          alt={artWorks[i].creator}
                        />
                      </Box>
                      <Stack direction="column" alignItems="center">
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="gray"
                          sx={{ fontSize: "10px" }}
                        >
                          {t("CREATOR")}
                        </Typography>
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="secondary"
                          sx={{ fontSize: "10px" }}
                        >
                          {artWorks[i].creator}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box>
                        <Avatar
                          sx={{
                            border: `2px solid ${
                              darkMode ? "#ffffff" : "#01D4FA"
                            }`,
                            height: "30px",
                            width: "30px",
                          }}
                          src={artWorks[i].ownerImage}
                          alt={artWorks[i].owner}
                        />
                      </Box>
                      <Stack direction="column" alignItems="center">
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="gray"
                          sx={{ fontSize: "10px" }}
                        >
                          {t("OWNER")}
                        </Typography>
                        <Typography
                          variant="caption"
                          gutterBottom
                          color="secondary"
                          sx={{ fontSize: "10px" }}
                        >
                          {artWorks[i].owner}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                  <Divider
                    style={{ backgroundColor: "#8E8E8E", margin: "10px 0" }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack direction="row" gap={2} alignItems="center">
                      <HiOutlineClock
                        style={{ color: `${darkMode ? "#ffffff" : "#121212"}` }}
                      />
                      <Typography
                        variant="caption"
                        component="span"
                        color="gray"
                        sx={{ fontSize: "10px" }}
                      >
                        {artWorks[i].uploaded} {t("HOURS_AGO")}
                      </Typography>
                    </Stack>
                    <Stack direction="row" gap={2} alignItems="center">
                      <AiOutlineHeart
                        style={{ color: `${darkMode ? "#ffffff" : "#121212"}` }}
                      />
                      <Typography
                        variant="caption"
                        component="span"
                        color="gray"
                        sx={{ fontSize: "10px" }}
                      >
                        {artWorks[i].likes}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </Box>
    </>
  );
}

export default MobileCardDeck;
