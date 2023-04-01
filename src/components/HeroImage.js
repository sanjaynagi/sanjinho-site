import { Box, AspectRatio, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Flex position="relative" pb={4} justifyContent="center">
      <AspectRatio flexShrink={0} ratio={1} w={200} h={140} as="figure">
        <Box rounded="full" overflow="hidden" borderRadius={10}>
          <Image
            src="/avatar.png"
            width={200}
            height={140}
            alt="Avatar Image"
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
