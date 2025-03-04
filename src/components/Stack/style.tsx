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
  transition: "0.5s",

  [`& ${Text}`]: {
    display: "block",
    textAlign: "center",
  },
  //   opacity: 0,
  //   position: "absolute",
  //   transform: "translateY(-15%)",
  //   background: "$whiteFixed",
  //   boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",
  //   padding: "0.4rem 1rem",
  //   borderRadius: "$1",
  //   textAlign: "center",
  //   fontSize: "1rem",
  //   fontWeight: "500",
  //   whiteSpace: "nowrap",
  //   color: "$blackFixed",

  //   "&:before": {
  //     content: "",
  //     zIndex: "-1",
  //     bottom: "-5px",
  //     position: "absolute",
  //     width: 0,
  //     height: 0,
  //     borderLeft: "25px solid transparent",
  //     borderRight: "25px solid transparent",
  //     borderTop: "25px solid $whiteFixed",
  //     transform: "translateX(-50%)",
  //     left: "50%",
  //   },
  // },

  "&:hover": {
    transform: "scale(1.1)",
    filter: "brightness(0) saturate(100%) invert(56%) sepia(19%) saturate(3107%) hue-rotate(79deg) brightness(111%) contrast(87%) drop-shadow(0 0 0.5rem #22d825);"
  },
});
