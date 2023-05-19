// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  StackSection,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

import devImg from "../../public/static/img/logo/dev_profile.png";
import { About } from "@/components/About";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={devImg}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                amo
              </Text>{" "}
              criar{" "}
              <Text as="span" type="heading1" color="brand1">
                tecnologias
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              Conheça mais sobre os as minhas produções
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href="https://drive.google.com/file/d/16xiU1HTK6l_ZLQastX8dNaVkMxzThNoj/view?usp=sharing">
                Curriculum
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
              
          </HeaderContent>
        </Container>
        <StackSection>
                <Container>
                  <StackCards>
                    {stackData.map((stack, index) => (
                      <Stack key={index} title={stack.title} icon={stack.img} />
                    ))}
                  </StackCards>
                </Container>
        </StackSection>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos{" "}
                <Text as="span" color="brand5">
                  meus projetos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <About/>
      <Contacts />
    </main>
  );
};
