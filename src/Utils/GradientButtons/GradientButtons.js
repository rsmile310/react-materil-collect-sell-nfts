import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientButtonPrimary = styled(Button)({
  color: "#ffffff",
  border: "none",
  background: "linear-gradient(91.93deg, #AD18C7 1.75%, #E552FF 98.27%)",
  borderRadius: "10px",
  boxShadow: "none",
  padding: "8px 1.5rem",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
  "&:active": {
    boxShadow: "none",
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
  "&:focus": {
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
});
const GradientButtonSecondary = styled(Button)({
  color: "#ffffff",
  border: "none",
  background: "linear-gradient(91.95deg, #06BFDF 1.75%, #00D9FF 98.13%)",
  borderRadius: "10px",
  boxShadow: "none",
  padding: "8px 1.5rem",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
  "&:active": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
  "&:focus": {
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
});

export { GradientButtonPrimary, GradientButtonSecondary };
