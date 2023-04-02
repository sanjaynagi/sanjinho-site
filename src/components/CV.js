import React from "react";
import { Document, Page } from 'react-pdf';
import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';

const PdfViewer = () => {
  const url = "https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf";

  return (
      <Document file={url}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    );
};

export default PdfViewer;
