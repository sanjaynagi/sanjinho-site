import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = () => {
  const url = "https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf";

    // set the worker source
    pdfjs.GlobalWorkerOptions.workerSrc =
    pdfjs.version === "2.9.359" 
    ? "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.js"
    : `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "0px" }}>
      <Document file={url}>
        <Page pageNumber={1} renderTextLayer={false}/>
        <Page pageNumber={2} renderTextLayer={false}/>
      </Document>
    </div>
  );
};

export default PdfViewer;
