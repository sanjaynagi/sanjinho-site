import { Link } from '@chakra-ui/react';

const ExternalLink = ({ children, ...linkProps }) => {
  return (
    <span>
      <Link
        {...linkProps}
        color="brand.secondary"
        display="inline-flex"
        alignItems="center"
        isExternal
        target="_blank"
        _hover={{ color: 'brand.primary' }}
        transition="color 0.2s ease"
        textDecoration="underline"
        textUnderlineOffset="3px"
        textDecorationColor="currentColor"
      >
        {children}
      </Link>
    </span>
  );
};

export default ExternalLink;
