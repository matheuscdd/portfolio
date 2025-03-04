import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { iStack } from "@/utils/types";

type StackProps = iStack & {
  key: number
}

export const Stack = (
  { title, icon: Icon, key, color, filter }: StackProps,

) => {
  const isString = typeof Icon === "string";
  const hover = { color, filter: `drop-shadow(0 0 0.3rem ${color}) ${filter}` };
  return (
    <StackCard key={key} css={{ '&:hover svg, &:hover img, &:hover p': hover }}>
      {isString ? (
        <img src={Icon} height="84px" width="84px" />
      ) : (
        <Icon size={84} color="#868E96" />
      )}
      <Text color="grey3">{title}</Text>
    </StackCard>
  );
};
