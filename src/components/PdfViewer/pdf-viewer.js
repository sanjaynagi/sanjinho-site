import React, { useState, useMemo } from 'react';
import { saveAs } from 'file-saver';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Document as ReactPDFDocument, Page } from 'react-pdf/dist/esm/entry.webpack5';

import { Box, Stack, Heading, IconButton, Text, VStack} from '@chakra-ui/react';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Document = styled(ReactPDFDocument)({
    lineHeight: 1
});

function PdfViewer({ data, pagination = false }) {
    const theme = useTheme();

    const file = useMemo(() => {
        const file = data;

        if (file instanceof Object) {
            if (!(file.data instanceof Uint8Array))
                file.data = new Uint8Array(file.data);
        }

        return file;
    }, [data]);

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [hover, setHover] = useState(false);

    const next = () => setPageNumber(pageNumber + 1);
    const prev = () => setPageNumber(pageNumber - 1);

    const isAboveLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isBetweenMdandLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isBetweenSmandMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isVerySmall = useMediaQuery('@media only screen and (max-width: 300px)');

    let scale;
    if (isAboveLg)
        scale = 2;
    else if (isBetweenMdandLg)
        scale = 1.4;
    else if (isBetweenSmandMd)
        scale = 1;
    else if (isVerySmall)
        scale = 0.4;
    else
        scale = 0.57;

    return (
        <VStack>
        <Heading pt="50">
            Curriculum Vitae
        </Heading>
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(error) => console.log(error)}
                externalLinkRel='noopener noreferrer'
                externalLinkTarget='_blank'
            >
                <Page
                    pageNumber={pageNumber}
                    renderForms={false}
                    renderAnnotationLayer={false}
                    renderMode='canvas'
                    rotate={0}
                    scale={scale}
                />
            </Document>
            <Stack
                component={Paper}
                elevation={10}
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={2}
                sx={{
                    mt: 2,
                    position: 'absolute',
                    bottom: 80,
                    userSelect: 'none',
                    opacity: (pagination && hover) ? 1 : 0,
                    transition: theme.transitions.create(['opacity']),
                    backgroundColor: theme.palette.background.default
                }}
            >
                <IconButton disabled={pageNumber === 1} onClick={prev} size='large'>
                    <KeyboardArrowLeftIcon fontSize='inherit' />
                </IconButton>
                <Text>
                    Page {Math.min(pageNumber, numPages)} of {numPages}
                </Text>
                <IconButton disabled={pageNumber === numPages || !numPages} onClick={next} size='large'>
                    <KeyboardArrowRightIcon fontSize='inherit' />
                </IconButton>
            </Stack>


        </Box>
        </VStack>
    );
}

export default PdfViewer;