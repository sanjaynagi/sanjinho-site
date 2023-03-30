import { HStack, Text } from '@chakra-ui/react';

import ExternalLink from './ExternalLink';

const ExternalLinksCloud = () => {
  return (
    <HStack>
      <Text>
        <ExternalLink href="https://sanjaycnagi.dev/about">
          🤙 More about me
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://sanjaycnagi.substack.com/">
          📧 Newsletter
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://twitter.com/sanjaycnagi">
          🐦 Twitter
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://github.com/sanjaynagi">
          🐙 GitHub
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="mailto:sanjaymittal.work@gmail.com">
          ✉️ Email
        </ExternalLink>
      </Text>
    </HStack>
  );
};

export default ExternalLinksCloud;
