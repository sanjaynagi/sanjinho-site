import React from 'react';
import { HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';

const ContactIcons = () => {
  const iconColor = useColorModeValue('#7a756e', '#b8b2a8');
  const hoverColor = useColorModeValue('#c45d3e', '#c45d3e');

  return (
    <HStack spacing={5} as="ul" listStyleType="none">
      {data.map((s) => (
        <li key={s.label}>
          <Link
            href={s.link}
            isExternal
            color={iconColor}
            _hover={{ color: hoverColor }}
            transition="color 0.2s ease"
            fontSize="lg"
            aria-label={s.label}
          >
            <FontAwesomeIcon icon={s.icon} />
          </Link>
        </li>
      ))}
    </HStack>
  );
};

export default ContactIcons;
