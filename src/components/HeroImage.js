import { Box, AspectRatio, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Flex position="relative" pb={4} justifyContent="center">
      <AspectRatio flexShrink={0} ratio={1} w={285} h={200} as="figure">
        <Box rounded="full" overflow="hidden" borderRadius={20}>
          <Image
            src="/avatar.jpg"
            width={266}
            height={200}
            alt="Avatar Image"
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
