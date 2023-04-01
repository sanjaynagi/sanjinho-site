import React from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = () => {
  const url = "https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf";

  return (
    <div>
      <Document file={url}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
};

export default PdfViewer;
