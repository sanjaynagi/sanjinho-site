import { VStack, Heading, List, ListItem, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import ProjectInfoCard from './ProjectInfoCard';

const SoftwareSectionList = ({ projects }) => {
  return (
    <VStack w="full" alignItems="center" spacing={4} as="section" mt={16}>
      <Heading size="lg">Open Source Software I&#39;ve developed or contributed to</Heading>

      <VStack spacing={4} alignItems="center" w="full" as="section" pt={2} >
        <Button leftIcon={<FaGithub/>} colorScheme='teal' size='lg' variant='ghost'> 
          <Link href="https://github.com/sanjaynagi">GitHub</Link>
        </Button>
      </VStack>      

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
