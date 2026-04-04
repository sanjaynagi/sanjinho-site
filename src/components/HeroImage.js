import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  const shadowColor = useColorModeValue(
    'rgba(196, 93, 62, 0.12)',
    'rgba(196, 93, 62, 0.2)'
  );

  return (
    <Flex
      position="relative"
      justifyContent="center"
      flexShrink={0}
    >
      <Box
        overflow="hidden"
        borderRadius="16px"
        w={{ base: 220, md: 280 }}
        h={{ base: 220, md: 280 }}
        boxShadow={`0 24px 48px -12px ${shadowColor}`}
        transition="transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
        _hover={{ transform: 'translateY(-4px)' }}
      >
        <Image
          src="/avatar.jpg"
          width={314}
          height={278}
          alt="Sanjay Curtis Nagi"
          priority
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Box>
    </Flex>
  );
};

export default HeroImage;
