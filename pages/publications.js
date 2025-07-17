import React from 'react';
import Link from 'next/link';
import { DocumentHead } from '../src/components/';
import PublicationCard from '../src/components/PublicationCard';
import PosterCard from '../src/components/PosterCard';
import {
  VStack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';
import { FaGoogle, FaOrcid } from 'react-icons/fa';
import { PublicationsList, PostersList } from '../src/data/publications';

const PublicationsPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Publications" postPath="/cv" />
      <VStack spacing={4} as="section" pt={28}>
        <Heading size="lg">Publications</Heading>
        <ButtonGroup spacing={4}>
          <Button
            leftIcon={<FaGoogle />}
            colorScheme="teal"
            size="lg"
            variant="ghost"
          >
            <Link href="https://scholar.google.com/citations?user=P-ImwEcAAAAJ&hl=en&oi=ao">
              Google Scholar
            </Link>
          </Button>
          <Button
            leftIcon={<FaOrcid />}
            colorScheme="teal"
            size="lg"
            variant="ghost"
          >
            <Link href="https://orcid.org/0000-0003-1214-8523">Orcid</Link>
          </Button>
        </ButtonGroup>
        <Text pb="5">
          If you need access to any of the below, please get in touch!
        </Text>
        <Divider />
        
        {/* Publications Section */}
        <Heading size="md" pt={4}>Selected Publications</Heading>
        <SimpleGrid columns={{ base: 1 }} spacing={6} w="full" pt={2}>
          {PublicationsList.map((publication) => (
            <PublicationCard key={publication.id} {...publication} />
          ))}
        </SimpleGrid>

        {/* Posters Section */}
        <Heading size="md" pt={8}>Posters</Heading>
        <SimpleGrid columns={{ base: 1 }} spacing={6} w="full" pt={2}>
          {PostersList.map((poster) => (
            <PosterCard key={poster.id} {...poster} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default PublicationsPage;