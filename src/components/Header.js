/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Flex, Text, Heading, Link, Icon } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { FaChevronRight } from 'react-icons/fa';
import LottieAnimation from '../LottieAnimation';

function Header() {
  return (
    <Flex
      bg="var(--color-background)"
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection={['column', 'row']}
    >
      <Flex
        flexDirection="column"
        alignItems={['center', 'flex-start']}
        textAlign={['center', 'left']}
        maxWidth="750px" // Establecer un ancho máximo para el texto
        marginRight="700px"
      >
        <Text fontSize="x-large" color="var(--color-text-secondary-light)">
          Hi, my name is Tomas Moscarelli
        </Text>
        <Heading as="h1" size="4xl" color="var(--color-text-white)">
          <span style={{ color: '#54b3d6' }}>Full-Stack </span>
          Developer
        </Heading>
        <Text
          fontSize="large"
          color="var(--color-text-white)"
          mt={6}
          maxW="650px"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'I am a web developer who is passionate about creating elegant and efficient solutions. Find out more about my work and skills below.'
                )
                .start();
            }}
            options={{
              delay: 35, // Ajusta la velocidad de escritura en milisegundos
            }}
          />
        </Text>
        <Flex alignItems="center" className="link-container" mt={6}>
          <Link
            href="#about-me"
            color="#54b3d6"
            className="projects-link"
            textDecoration="none"
            fontWeight="bold"
            fontSize="large"
            _hover={{ textDecoration: 'none' }}
            zIndex="2"
          >
            About me
          </Link>
          <Box ml={2} className="arrow-icon">
            <Icon as={FaChevronRight} boxSize={3} color="#54b3d6" />
          </Box>
        </Flex>
      </Flex>
      <Box
        zIndex="2"
        className="svg-coding-box"
        position="absolute"
        right="0"
        maxWidth="1000px"
      >
        <LottieAnimation data="https://assets4.lottiefiles.com/packages/lf20_gssu2dkm.json" />
      </Box>
    </Flex>
  );
}

export default Header;
