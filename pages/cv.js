import React from 'react';
import PdfViewer from "../src/components/PdfViewer";
import {
  VStack,
  Heading,
} from '@chakra-ui/react';

import { DocumentHead } from '../src/components';

const CvPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Sanjay Curtis - CV" postPath="/cv" />
      <VStack spacing={0} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
         Curriculum Vitae
        </Heading>
        <PdfViewer />
      </VStack>
    </>
  )
}

export default CvPage;
