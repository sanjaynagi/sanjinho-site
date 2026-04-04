import { Text, useMediaQuery, useColorModeValue } from '@chakra-ui/react';
import dayjs from 'dayjs';

const PublishedDate = ({ date }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const textColor = useColorModeValue('brand.muted', 'brand.warmGray');
  return (
    <>
      {isMobile ? (
        <Text color={textColor} fontSize="sm">
          {dayjs(date).format('MMM D, YYYY')}
        </Text>
      ) : (
        <Text color={textColor} fontSize="sm">
          {dayjs(date).format('MMM D, YYYY')}
        </Text>
      )}
    </>
  );
};

export default PublishedDate;
