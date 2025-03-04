import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutWrapper, TextWrapper } from "./style";
import { userData } from "@/utils/userData";


export const About = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <Flex>
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Sobre mim
            </Text>
            <TextWrapper>
                <Text type="body1" color="grey2">{ userData.about }</Text>
            </TextWrapper>
          </Box>
        </Flex>
      </Container>
    </AboutWrapper>
  );
};
