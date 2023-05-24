import { Box, AspectRatio, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Flex position="relative" pb={4} justifyContent="center">
      <AspectRatio flexShrink={0} ratio={1} w={240} h={170} as="figure">
        <Box rounded="full" overflow="hidden" borderRadius={20}>
          <Image
            src="/avatar.jpg"
            width={240}
            height={170}
            alt="Avatar Image"
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
