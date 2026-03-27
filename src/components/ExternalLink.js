import { Link } from '@chakra-ui/react';

const ExternalLink = ({ children, ...linkProps }) => {
  return (
    <span>
      <Link
        {...linkProps}
        color="brand.primary"
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
