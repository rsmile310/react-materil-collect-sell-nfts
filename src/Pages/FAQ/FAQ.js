import React, { useEffect } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";

// Icons
import { AiFillCaretDown } from "react-icons/ai";

import { useTranslation } from "react-i18next";

import { useTheme } from "@emotion/react";

const FAQ = ({ darkMode }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {!isMobile ? (
        <div style={{ overflowY: "hidden" }}>
          <Box
            color={darkMode ? "#ffffff" : "#121212"}
            sx={{
              position: "relative",
              display: "flex",
              gap: 2,
              alignItems: "center",
              mt: 11.5,
              mb: 5,
            }}
          >
            <Typography
              component="div"
              sx={{
                borderBottom: `2px solid ${darkMode ? "#ffffff" : "#121212"}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                // onClick={() => navigate("/explore?type=all")}
                variant="h6"
                component="p"
                sx={{ zIndex: 2, cursor: "pointer" }}
              >
                {t("FOOTER_LINK_FAQS")}
              </Typography>
              <Typography
                variant="h1"
                component="p"
                sx={{
                  background:
                    "linear-gradient(91.95deg, #2175D7 1.75%, #5ACDFE 98.13%)",
                  borderRadius: "4px",
                  width: "30px",
                  height: "24px",
                  ml: -3,
                }}
              ></Typography>
            </Typography>
          </Box>
          <Box>
            <Accordion
              defaultExpanded
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                  color: `${darkMode ? "#ffffff" : "#121212"}`,
                }}
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">{t("FAQ_QUES")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#171C26" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      ) : (
        <div style={{ paddingBottom: "1rem" }}>
          <Box
            sx={{
              position: "fixed",
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "10000",
              mt: 5,
            }}
          >
            <Typography
              variant="subtitle1"
              color="secondary"
              component="div"
              sx={{
                borderBottom: `${
                  darkMode ? "2px solid #ffffff" : "1px solid #171c26"
                }`,
              }}
            >
              {t("FOOTER_LINK_FAQS")}
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Accordion
              defaultExpanded
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                  color: `${darkMode ? "#ffffff" : "#121212"}`,
                }}
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                color: `${darkMode ? "#ffffff" : "#121212"}`,
              }}
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={
                  <Typography component="span" color="secondary">
                    <AiFillCaretDown />
                  </Typography>
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography variant="subtitle1">
                  {t("FAQ_QUES").slice(0, 50)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: `${darkMode ? "#040404" : "#fff2f8"}`,
                    color: `${darkMode ? "#c4c4c4" : "GrayText"}`,
                    opacity: 0.9,
                    lineHeight: 1.8,
                    textAlign: "justify",
                    pr: 2,
                  }}
                >
                  {t("FAQ_ANS")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      )}
    </>
  );
};

export default FAQ;
