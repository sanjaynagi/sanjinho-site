import NextLink from 'next/link';
import {
  Link,
} from '@chakra-ui/react'; 

const InternalLink = ({ href, _target, children, ...props }) => {
    return (
      <NextLink href={href} passHref>
        <Link
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
      </NextLink>
    );
  };

export default InternalLink;