import NextLink from 'next/link';
import {
  Link,
} from '@chakra-ui/react';

const InternalLink = ({ href, _target, children, ...props }) => {
    return (
      <Link
        as={NextLink}
        href={href}
        p={2}
        _hover={{
          textDecoration: 'none',
          backgroundColor: 'undefined',
          borderRadius: 8
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    );
  };

export default InternalLink;