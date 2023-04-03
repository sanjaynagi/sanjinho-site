import { Link, useColorModeValue as mode } from '@chakra-ui/react';

const ExternalLink = ({ children, ...linkProps }) => {
  return (
    <span>
      <Link
        {...linkProps}
        color={mode('teal.500', 'teal.300')}
        display="inline-flex"
        alignItems="center"
        isExternal
        target="_blank"
      >
        {children}
      </Link>
    </span>
  );
};

export default ExternalLink;
