import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutWrapper, TextWrapper } from "./style";



export const About = (): JSX.Element => {
  return (
    <AboutWrapper id="about">
      <Container>
        <Flex>
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Sobre mim
            </Text>
            <TextWrapper>
                <Text type="body1" color="grey2">
                Sou apaixonado por tecnologia. Comecei a me interessar no assunto, pois tenho uma
                paixão pela criatividade e descobri que a programação é a plataforma ideal para
                expressá-la e dar vida aos meus projetos. Comecei aprendendo com Scratch e Unity e
                evolui para aprender JavaScript, TypeScript, HTML, CSS, React, Python, Django,
                consegui assim desenvolver qualquer tipo de site, API e banco de dados. Atualmente,
                atuo como desenvolvedor de aplicações web utilizando essas tecnologias. Possuo
                experiência em monitorar e auxiliar desenvolvedores iniciantes na produção de sites
                Front-end. Meu objetivo com a tecnologia é criar aplicações que possam ensinar as
                pessoas.
                </Text>
            </TextWrapper>
          </Box>
        </Flex>
      </Container>
    </AboutWrapper>
  );
};
