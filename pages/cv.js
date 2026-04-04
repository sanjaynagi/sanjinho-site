import React from 'react';
import PdfViewer from '../src/components/PdfViewer';
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
      <DocumentHead pageTitle="Curriculum Vitae" postPath="/cv" description="Curriculum Vitae of Sanjay Curtis Nagi — genomics researcher and bioinformatics developer." />
      <VStack spacing={4} alignItems="center" w="full" as="section" pt={28}>
        <Heading size="lg" fontWeight="700">
          Curriculum Vitae
        </Heading>
        <Button
          leftIcon={<FaDownload />}
          color="brand.primary"
          size="md"
          variant="ghost"
          fontFamily="body"
          fontWeight="500"
          _hover={{ bg: 'rgba(196, 93, 62, 0.08)' }}
        >
          <Link href="/SanjayCNagi-CV-2024.pdf">Download CV</Link>
        </Button>
        <PdfViewer />
      </VStack>
    </>
  );
};

export default CvPage;
