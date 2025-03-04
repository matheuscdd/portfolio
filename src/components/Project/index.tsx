import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = () => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json: ReposType[] = await data.json();
      const scratchRepos = ["amoung_us_da_redacao", "naruto_da_redacao"];
      const notUsed = ["coding"];
      let repos: ReposType[] = json.map(repo => {
        if (scratchRepos.includes(repo.name)) {
          repo.language = "Scratch";
        }
        if (!repo.name.includes("_")) {
          let noun = "claus";
          if (repo.name.includes(noun)) {
            repo.name = repo.name.split(noun).join("_") + noun;
          }
          noun = "matheus";
          if (repo.name.includes(noun)) {
            repo.name = repo.name.split(noun).join("_") + noun;
          }
        }
        return repo
      })
      repos = repos.filter(repo => !notUsed.includes(repo.name!));

      setRepositories(repos);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Linguagem Principal:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="brand1" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={repository.homepage}
                >
                  <MdPreview /> Demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
