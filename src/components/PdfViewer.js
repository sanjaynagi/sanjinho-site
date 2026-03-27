import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
} from '@chakra-ui/react';

const PDFDocument = dynamic(
  () => import('react-pdf').then(mod => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.pdfjs.version}/pdf.worker.min.mjs`;
    return { default: mod.Document };
  }),
  { ssr: false }
);

const PDFPage = dynamic(
  () => import('react-pdf').then(mod => ({ default: mod.Page })),
  { ssr: false }
);

const PdfViewer = () => {
  const url = "/SanjayCNagi-CV-2024.pdf";
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Box style={{ display: "flex", flexDirection: "row", gap: "0px" }}>
      <PDFDocument file={url} className="d-flex justify-content-center">
        <PDFPage pageNumber={1} scale={width > 786 ? 1.5 : 0.6} renderAnnotationLayer={false}/>
        <PDFPage pageNumber={2} scale={width > 786 ? 1.5 : 0.6} renderAnnotationLayer={false}/>
      </PDFDocument>
    </Box>
  );
};

export default PdfViewer;
