import { StackCards } from "@/pages/home/style";
import { SegmentList, iVariant } from "./style";
import { Text } from "@/styles/Text";
import { iSegment } from "@/utils/types";
import { Stack } from "../Stack";
import { Container } from "@/styles/Global";

interface SegmentProps {
  title: string;
  color: iVariant,
  stacks: iSegment,
}

export const Segment = (
  { title, stacks, color }: SegmentProps,
  key: number
): JSX.Element => {
  return (
    <SegmentList key={key} type={color}>
        <Container>
          <Text color="grey4" type="heading3">{title}</Text>
          <StackCards>
            {stacks.map(stack => (
              <Stack key={stack.title} title={stack.title} icon={stack.icon} />
            ))}
          </StackCards>
      </Container>
    </SegmentList>
  );
};
