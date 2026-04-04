import { Text, useColorModeValue } from '@chakra-ui/react';

const TimeToRead = ({ timeToRead }) => {
  const textColor = useColorModeValue('brand.muted', 'brand.warmGray');

  return (
    <Text color={textColor} fontSize="sm">
      {timeToRead}
    </Text>
  );
};

export default TimeToRead;
