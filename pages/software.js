import React from 'react';
import { SoftwareSectionList } from '../src/components/';
import {
  VStack,
} from '@chakra-ui/react';

import { DocumentHead } from '../src/components';
import { SoftwareList } from '../src/data';

const SoftwarePage = () => {
  return (
    <>
      <DocumentHead pageTitle="Software" postPath="/software" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={12}>
        <SoftwareSectionList projects={SoftwareList} />
      </VStack>
    </>
  )
}

export default SoftwarePage;
