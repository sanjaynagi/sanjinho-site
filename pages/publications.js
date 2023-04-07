import React from 'react';
import Link from 'next/link';
import { DocumentHead } from '../src/components/';
import {
  VStack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider
} from '@chakra-ui/react';
import { FaGoogle, FaOrcid } from "react-icons/fa";
import PUBLICATIONS from '../src/data/publications.mdx';

const PublicationsPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Publications" postPath="/cv" />
      <VStack spacing={4} as="section" pt={28} >
        <Heading size="lg">
         Publications
        </Heading>
          <ButtonGroup spacing={4}>
            <Button leftIcon={<FaGoogle/>} colorScheme='teal' size='lg' variant='ghost'> 
             <Link href="https://scholar.google.com/citations?user=P-ImwEcAAAAJ&hl=en&oi=ao">Google Scholar</Link>
           </Button>
           <Button leftIcon={<FaOrcid/>} colorScheme='teal' size='lg' variant='ghost'> 
              <Link href="https://orcid.org/0000-0003-1214-8523">Orcid</Link>
           </Button>
          </ButtonGroup>
          <Text pb="5">if you need access to any of the below, please get in touch!</Text>
          <Divider />
            <PUBLICATIONS />
      </VStack>
    </>
  )
}

export default PublicationsPage;
