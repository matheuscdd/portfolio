import { colors } from "@/styles/Global";
import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export type iVariant = "grey6" | "grey7" | "grey8" | "grey9" | "grey10";

export const SegmentList = styled("div", {
  paddingTop: "2rem",
  borderBottom: "5px solid",
  borderBottomColor: colors.color.grey5.color,
  variants: {
    type: {
      grey6: {
        backgroundColor: colors.color.grey6.color
      },
      grey7: {
        backgroundColor: colors.color.grey7.color
      },
      grey8: {
        backgroundColor: colors.color.grey8.color
      },
      grey9: {
        backgroundColor: colors.color.grey9.color
      },
      grey10: {
        backgroundColor: colors.color.grey10.color
      },
    }
  }
});
