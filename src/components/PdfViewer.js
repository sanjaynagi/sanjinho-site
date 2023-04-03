import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import {
  Box,
} from '@chakra-ui/react';
import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css"

const PdfViewer = () => {
  const url = "https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf";
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

    // set the worker source
    pdfjs.GlobalWorkerOptions.workerSrc =
    pdfjs.version === "2.9.359" 
    ? "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.js"
    : `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <Box style={{ display: "flex", flexDirection: "row", gap: "0px" }}>
      <Document file={url} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
        <Page pageNumber={2} scale={width > 786 ? 1.5 : 0.6} />
      </Document>    
    </Box>
  );
};

export default PdfViewer;
