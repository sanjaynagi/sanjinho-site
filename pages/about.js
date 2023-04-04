import {
  VStack,
  Heading,
  Text,
  Link,
  Image
} from '@chakra-ui/react';
import { DocumentHead, ContactMe, MDXComponents } from '../src/components';


const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Sanjay Curtis - About" postPath="/about" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <Text>
        Hello! I&apos;m Sanjay Curtis Nagi, currently a post-doc at the <Link href="https://www.lstmed.ac.uk/" color='teal'>
          Liverpool School of Tropical Medicine</Link> in the Vector Informatics and Genomics group. 
        </Text>
        <Text>
        To date, my work has primarily focused on mosquito vectors of disease. In particular, the rapid evolution and spread of resistance 
        in the major malaria vector, <em>Anopheles gambiae</em>, is a major focus, and how we can use population genomics to ultimately inform 
        malaria control programmes. I enjoy developing open-source computational tools that can aid the community and empower researchers 
        to analyse their own data.
        </Text>
        <Text>Feel free to explore some of the <Link href="/software" color="teal" >software tools </Link> I&apos;ve developed, 
        or <Link href="/publications" color="teal">publications</Link> I&apos;ve contributed to.
        </Text>
        <Image src="/runningmalawismall.png" alt="Running through an irrigation system in the Shire Valley, Chikwawa, Malawi." />
        <ContactMe />
      </VStack>
    </>
  );
};

export default AboutPage;
