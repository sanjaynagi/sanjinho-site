import { Box, Stack, VStack, Heading, Text, Divider, HStack } from '@chakra-ui/react';
import HeroImage from "./HeroImage"
import ContactIcons from './ContactIcons';

const Hero = () => {
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
            <HStack>
              <Heading size="lg" as="h1" mr="80" >
                Hey, I&apos;m Sanjay
              </Heading>     
            </HStack>
            <HStack>
              <HeroImage />
            </HStack>
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
