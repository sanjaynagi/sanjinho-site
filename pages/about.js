import {
  VStack,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Image
} from '@chakra-ui/react';
import { InternalLink, DocumentHead, ContactMe } from '../src/components';

const InterestsList = () => {
  return (
    <UnorderedList pl={6} spacing={2}>
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
  return (
    <>
      <DocumentHead pageTitle="About" postPath="/about" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <Text>
        Hello! I&apos;m Sanjay Curtis Nagi, a genomics research scientist at the <Link href="https://www.eit.org/" color='blue.600'>
          Ellison Institute of Technology</Link> within the pathogen programme. 
        </Text>
        <Text>
        To date, my work has primarily focused on mosquito vectors of disease. In particular, the rapid evolution and spread of resistance 
        in the major malaria vector, <em>Anopheles gambiae</em>, is a major focus, and how we can use population genomics to ultimately inform 
        malaria control programmes. I enjoy developing open-source computational tools that can aid the community and empower researchers 
        to analyse their own data.
        </Text>
        <Text>In no particular order, I enjoy these a lot:</Text>

        <InterestsList></InterestsList>
        
        <Text>Feel free to explore some of the <InternalLink href="/software" color="blue.600" p="0">software tools</InternalLink> I&apos;ve developed, 
        or <InternalLink href="/publications" color="blue.600" p="0">publications</InternalLink> I&apos;ve contributed to.
        </Text>
        <Image src="/runningmalawismall.png" alt="Running through an irrigation system in the Shire Valley, Chikwawa, Malawi." />
        <ContactMe />
      </VStack>
    </>
  );
};

export default AboutPage;
