import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number
}

export const Stack = (
  { title, icon: Icon, key }: StackProps,
) => {
  const isString = typeof Icon === "string";

  return (
    <StackCard key={key}>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color="#868E96" />
      )}
      <Text color="grey3">{title}</Text>
    </StackCard>
  );
};
