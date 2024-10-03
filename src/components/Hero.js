import { Box, Stack, VStack, Heading, Text, HStack } from '@chakra-ui/react';
import useBetterMediaQuery from './BetterMediaQuery';
import HeroImage from "./HeroImage"
import ContactIcons from './ContactIcons';

const Hero = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)');
  return (
    <Box pt={28}>
      <Stack 
        pb={8}
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            alignItems="center"
          >
          {isMobile ? (
            <VStack width="100%" justifyContent={'space-between'}>
              <Heading size="lg" as="h1">
                Hey, I&apos;m Sanjay
              </Heading>     
              <HeroImage />
            </VStack>  
          ) : (
            <HStack width="100%" justifyContent={'space-between'}>
              <Heading size="lg" as="h1">
                 Hey, I&apos;m Sanjay
              </Heading>     
              <HeroImage />
             </HStack>  
            )
          }
          </Stack>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m a Post-Doc studying genomics of the major malaria mosquito, <em>Anopheles gambiae </em> 
            at the Liverpool School of Tropical Medicine. 
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            A major focus of my research is the rapid evolution and spread of resistance 
            in the major malaria vector, and how we can use population genomics to 
            ultimately inform malaria control programmes. I enjoy developing open-source 
            computational tools that can aid the community and empower researchers to analyse 
            their own data.
          </Text>
        </VStack>
      </Stack>
      <ContactIcons />   

    </Box>
  );
};

export default Hero;
