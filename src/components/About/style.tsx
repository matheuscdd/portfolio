import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";


export const AboutWrapper = styled("footer", {
  backgroundColor: "$grey6",
  padding: "7rem 0",
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});

export const TextWrapper = styled("div", {
    width: "80%"
});