import {
  VStack,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { InternalLink, DocumentHead, ContactMe } from '../src/components';

const InterestsList = () => {
  const mutedColor = useColorModeValue('brand.muted', 'brand.warmGray');
  return (
    <UnorderedList pl={6} spacing={2} color={mutedColor}>
      <ListItem>Music</ListItem>
      <ListItem>The Great Outdoors (hiking, trail-running, camping)</ListItem>
      <ListItem>Sports (football, tennis, darts, cricket, <strong>the cricinfo app</strong>)</ListItem>
      <ListItem>Meditation</ListItem>
      <ListItem>Food</ListItem>
      <ListItem>The Communal Human Spirit</ListItem>
    </UnorderedList>
  );
};

const AboutPage = () => {
  const mutedColor = useColorModeValue('brand.muted', 'brand.warmGray');
  return (
    <>
      <DocumentHead pageTitle="About" postPath="/about" description="About Sanjay Curtis Nagi, a genomic data scientist at the Ellison Institute of Technology." />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1" fontWeight="700">
          About Me
        </Heading>
        <Text lineHeight="1.8" color={mutedColor}>
        Hello! I&apos;m Sanjay Curtis Nagi, a genomic data scientist in the pathogen programme at the <Link href="https://www.eit.org/" color="brand.secondary" _hover={{ color: 'brand.primary' }}>
          Ellison Institute of Technology</Link>, building genomic resources and methods to power the next generation of
        infectious disease diagnostics.
        </Text>
        <Text lineHeight="1.8" color={mutedColor}>
        Before that, I spent several years on the population genomics of mosquito vectors of disease, in particular the rapid
        evolution and spread of insecticide resistance in the major malaria vector, <em>Anopheles gambiae</em>. Much of that work
        centred on computational tools, pipelines and protocols that let researchers carry out effective, reproducible genomic
        surveillance, in <em>Anopheles</em> and other taxa.
        </Text>
        <Text lineHeight="1.8" color={mutedColor}>
        I&apos;ve been lucky that my work has spanned fieldwork and the lab bench, open-source software, large-scale data analysis
        and artificial intelligence, and I most enjoy working where these meet. Agentic AI is transforming data science, and
        I&apos;m especially interested in how we keep rigour and quality at scale. I care about transparent, reproducible
        computational research: work that others can trust, reuse and build on.
        </Text>
        <Text lineHeight="1.8" color={mutedColor}>In no particular order, I enjoy these a lot:</Text>

        <InterestsList />

        <Text lineHeight="1.8" color={mutedColor}>Feel free to explore some of the <InternalLink href="/software" color="brand.secondary" _hover={{ color: 'brand.primary' }} p="0">software tools</InternalLink> I&apos;ve developed,
        or <InternalLink href="/publications" color="brand.secondary" _hover={{ color: 'brand.primary' }} p="0">publications</InternalLink> I&apos;ve contributed to.
        </Text>
        <Image src="/runningmalawismall.webp" alt="Running through an irrigation system in the Shire Valley, Chikwawa, Malawi." borderRadius="12px" />
        <ContactMe />
      </VStack>
    </>
  );
};

export default AboutPage;
