import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('rgba(26, 26, 26, 0.06)', 'rgba(232, 224, 212, 0.1)');
  const hoverBg = useColorModeValue('rgba(26, 26, 26, 0.1)', 'rgba(232, 224, 212, 0.15)');
  const iconColor = useColorModeValue('#7a756e', '#b8b2a8');

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label="Toggle theme"
          size="sm"
          variant="ghost"
          color={iconColor}
          bg={bg}
          _hover={{ bg: hoverBg }}
          icon={useColorModeValue(<FiMoon size={16} />, <FiSun size={16} />)}
          onClick={toggleColorMode}
          borderRadius="full"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
