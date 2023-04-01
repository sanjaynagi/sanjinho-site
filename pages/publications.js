import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  VStack,
  Heading,
} from '@chakra-ui/react';

import { DocumentHead } from '../src/components';

const PublicationsPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../src/data/publications.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  return (
      <>
        <DocumentHead pageTitle="Sanjay Curtis - Publications" postPath="/publications" />
        <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
          <Heading size="lg" as="h1">
           Publications
          </Heading>
          <ReactMarkdown>
          source={markdown}
        </ReactMarkdown>        
        </VStack>
      </>
    )
  }

export default PublicationsPage;
