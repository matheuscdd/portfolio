import { StackCards } from "@/pages/home/style";
import { SegmentList, iVariant } from "./style";
import { Text } from "@/styles/Text";
import { iSegment } from "@/utils/types";
import { Stack } from "../Stack";
import { Container } from "@/styles/Global";

type SegmentProps = {
  title: string;
  color: iVariant,
  stacks: iSegment,
  key: number
}

export const Segment = (
  { title, stacks, color, key }: SegmentProps,
) => {
  return (
    <SegmentList key={key} type={color}>
        <Container>
          <Text color="grey4" type="heading3">{title}</Text>
          <StackCards>
            {stacks.map(stack => (
              <Stack key={Math.random()} title={stack.title} icon={stack.icon} color={stack.color} filter={stack.filter}/>
            ))}
          </StackCards>
      </Container>
    </SegmentList>
  );
};
