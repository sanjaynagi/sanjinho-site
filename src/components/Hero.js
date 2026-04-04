import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import useBetterMediaQuery from './BetterMediaQuery';
import HeroImage from './HeroImage';
import ContactIcons from './ContactIcons';

const Hero = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)');
  return (
    <Box pt={28}>
      <Stack
        pb={10}
        alignItems="center"
        spacing={{ base: 8, md: 16 }}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={5} alignItems="flex-start" w="full">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="700"
            lineHeight="1.15"
          >
            Hey, I&apos;m Sanjay
          </Heading>
          <Text
            lineHeight="1.8"
            as="h2"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="300"
            color="brand.muted"
          >
            I&apos;m a research scientist at the Ellison Institute of Technology, developing methods and resources
            to improve the diagnosis and treatment of infectious pathogens. I enjoy developing open-source
            computational tools that can aid the community and empower researchers to analyse their own data.
          </Text>
          <Box pt={2}>
            <ContactIcons />
          </Box>
        </VStack>
        <HeroImage />
      </Stack>
    </Box>
  );
};

export default Hero;
