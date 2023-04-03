import React from 'react';
import { NextSeo } from 'next-seo';
import { Box, Heading } from '@chakra-ui/react'
//Custom Components
import Pdf from '../src/components/PdfViewer/';

function CvPage() {
    //Optimize for phone
    return (
        <React.Fragment>
            <NextSeo
                title='CV | Sanjay Curtis Nagi'
                description='My CV'
            />

            <Heading
                title='Curriculum Vitae'
            />

            <Box id='resume' maxWidth='lg'>
                <Pdf data='https://sanjaynagi.github.io/files/SanjayCNagi-CV-2022.pdf' pagination />
            </Box>
        </React.Fragment>
    );
}

export default CvPage;
