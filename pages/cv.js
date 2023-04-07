import React from 'react';
import PdfViewer from "../src/components/PdfViewer";
import {
  VStack,
  Heading,
  Button,
} from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { DocumentHead } from '../src/components';

const CvPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Curriculum Vitae" postPath="/cv" />
      <VStack spacing={4} alignItems="center" w="full" as="section" pt={28} >
        <Heading size="lg">
         Curriculum Vitae
        </Heading>
          <Button leftIcon={<FaDownload />} colorScheme='teal' size='lg' variant='ghost'> 
            <Link href="https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf">Download CV</Link>
          </Button>

        <PdfViewer />
      </VStack>
    </>
  )
}

export default CvPage;
