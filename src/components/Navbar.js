import { Button, Flex, Box } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Typewriter from 'typewriter-effect';

function Navbar() {
  return (
    <Flex
      w="100%"
      h="100px"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      className="glass-navbar"
      zIndex="2"
    >
      <Box className="navbar-dev-icon">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<<span style="color: white; font-weight: bold;"> DEV </span>/>'
              )
              .start();
          }}
          options={{
            delay: 105,
            cursor: '_',
            autoStart: true,
            loop: false,
          }}
        />
      </Box>
      <Button
        marginRight="30px"
        size="lg"
        bg="none"
        color="#54b3d6"
        border="1px solid #54b3d6"
        textShadow="0 0 5px #54b3d6"
        boxShadow="0 0 10px #54b3d6"
        _hover={{
          bg: '#54b3d6',
          color: 'white',
        }}
        transition="all 0.3s ease"
      >
        Contact
      </Button>
    </Flex>
  );
}

export default Navbar;
