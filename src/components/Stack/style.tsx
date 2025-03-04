import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";
import { Text } from "../../styles/Text";

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export const StackCard = styled("div", {
  borderRadius: "$1",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  flexDirection: "column",
  gap: "1rem",
  transition: "transform 0.5s",

  [`& ${Text}`]: {
    display: "block",
    textAlign: "center",
  },

  "&:hover": {
    transform: "scale(1.1)",
  },
});
