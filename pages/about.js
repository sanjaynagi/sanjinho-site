import {
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

import { DocumentHead, ExternalLink } from '../src/components';

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Sanjay Curtis - About" postPath="/about" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <small>Last Update: December 21, 2022</small>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          Hi! My name is Sanjay Curtis Nagi. I am a researcher at
          the Liverpool School of Tropical Medicine.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          Currently, I&apos;m a Post-Doc with Professor Martin Donnelly, under
          whos supervision I have just completed my PhD on genomic
          surveillance of the major malaria mosquito, <em>Anopheles gambiae.</em>
        </Text>
      </VStack>
    </>
  );
};

export default AboutPage;
