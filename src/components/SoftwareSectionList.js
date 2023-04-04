import { VStack, Heading, List, ListItem } from '@chakra-ui/react';

import ProjectInfoCard from './ProjectInfoCard';

const SoftwareSectionList = ({ projects }) => {
  return (
    <VStack w="full" alignItems="center" spacing={4} as="section" mt={16}>
      <Heading size="lg">Open Source Software I&#39;ve Worked on</Heading>
      <List spacing={6}>
        {projects.map(project => (
          <ListItem key={project.href}>
            <ProjectInfoCard {...project} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default SoftwareSectionList;
