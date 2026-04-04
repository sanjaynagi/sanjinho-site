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
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGoogle, FaOrcid } from 'react-icons/fa';
import { PublicationsList, PostersList } from '../src/data/publications';

const PublicationsPage = () => {
  const mutedColor = useColorModeValue('brand.muted', 'brand.warmGray');

  return (
    <>
      <DocumentHead pageTitle="Publications" postPath="/publications" description="Selected publications and posters by Sanjay Curtis Nagi on genomics, malaria, and vector control." />
      <VStack spacing={4} as="section" pt={28} alignItems="center" w="full">
        <Heading size="lg" fontWeight="600">Publications</Heading>
        <ButtonGroup spacing={4}>
          <Button
            leftIcon={<FaGoogle />}
            color="brand.primary"
            size="md"
            variant="ghost"
            fontFamily="body"
            fontWeight="500"
            _hover={{ bg: 'rgba(196, 93, 62, 0.08)' }}
          >
            <Link href="https://scholar.google.com/citations?user=P-ImwEcAAAAJ&hl=en&oi=ao">
              Google Scholar
            </Link>
          </Button>
          <Button
            leftIcon={<FaOrcid />}
            color="brand.primary"
            size="md"
            variant="ghost"
            fontFamily="body"
            fontWeight="500"
            _hover={{ bg: 'rgba(196, 93, 62, 0.08)' }}
          >
            <Link href="https://orcid.org/0000-0003-1214-8523">ORCID</Link>
          </Button>
        </ButtonGroup>
        <Text pb="5" color={mutedColor}>
          If you need access to any of the below, please get in touch!
        </Text>
        <Divider />

        <Heading size="md" pt={4} fontWeight="600">Selected Publications</Heading>
        <SimpleGrid columns={{ base: 1 }} spacing={4} w="full" pt={2}>
          {PublicationsList.map((publication) => (
            <PublicationCard key={publication.id} {...publication} />
          ))}
        </SimpleGrid>

        <Heading size="md" pt={8} fontWeight="600">Posters</Heading>
        <SimpleGrid columns={{ base: 1 }} spacing={4} w="full" pt={2}>
          {PostersList.map((poster) => (
            <PosterCard key={poster.id} {...poster} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default PublicationsPage;
