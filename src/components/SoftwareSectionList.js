import { VStack, Heading, List, ListItem, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ProjectInfoCard from './ProjectInfoCard';

const SoftwareSectionList = ({ projects }) => {
  return (
    <VStack w="full" alignItems="center" spacing={4} as="section" mt={16}>
      <Heading size="lg" fontWeight="700" textAlign="center">Open Source Software</Heading>

      <VStack spacing={4} alignItems="center" w="full" as="section" pt={2}>
        <Button
          leftIcon={<FaGithub />}
          color="brand.primary"
          size="md"
          variant="ghost"
          fontFamily="body"
          fontWeight="500"
          _hover={{ bg: 'rgba(196, 93, 62, 0.08)' }}
        >
          <Link href="https://github.com/sanjaynagi">GitHub</Link>
        </Button>
      </VStack>

      <List spacing={4} w="full">
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
