/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Link, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import particlesConfig from './assets/particlesjs-config.json';
import 'particles.js';
import './App.css';

function App() {
  const particlesRef = useRef();
  const sectionsRef = [
    { name: 'Home', link: 'home' },
    { name: 'About me', link: 'about-me' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];
  const [linePosition, setLinePosition] = useState(0);
  const [tempLinePosition, setTempLinePosition] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [visitedHome, setVisitedHome] = useState(false);

  function updateLinePositionFromHash() {
    const hash = window.location.hash.substring(1); // remove the leading '#'
    const sectionIndex = sectionsRef.findIndex(
      (section) => section.link === hash
    );
    if (sectionIndex !== -1) {
      if (sectionIndex > 0) {
        setVisitedHome(true);
      }
      setCurrentSectionIndex(sectionIndex);
      setLinePosition(sectionIndex * 68);
      setTempLinePosition(sectionIndex * 68);
    }
  }

  function updateLinePositionOnScroll(event) {
    if (event.deltaY < 0) {
      // If scrolling up
      setCurrentSectionIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else {
      // If scrolling down
      setCurrentSectionIndex((prevIndex) =>
        Math.min(sectionsRef.length - 1, prevIndex + 1)
      );
    }
  }

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-container', particlesConfig);
    }
    updateLinePositionFromHash();
    // update line position when URL hash changes
    window.addEventListener('hashchange', updateLinePositionFromHash);
    window.addEventListener('wheel', updateLinePositionOnScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('hashchange', updateLinePositionFromHash);
      window.removeEventListener('wheel', updateLinePositionOnScroll);
    };
  }, []);

  useEffect(() => {
    const { link } = sectionsRef[currentSectionIndex];
    window.location.hash = link;
  }, [currentSectionIndex]);

  return (
    <Box>
      <Navbar />
      <Header />
      <div id="particles-container" ref={particlesRef} />
      <VStack
        position="fixed"
        right="10"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        className="glass-navbar"
        color="white"
        borderRight="1px solid gray"
      >
        {sectionsRef.map((text, index) => (
          <Box
            className="box-stack"
            key={text.name}
            as="li"
            listStyleType="none"
            h="60px"
            w="140px"
            onMouseEnter={() => setTempLinePosition(index * 68)} // set line position on mouse enter
            onMouseLeave={() => setTempLinePosition(linePosition)} // reset line position on mouse leave
          >
            <Link
              href={`#${text.link}`}
              w="100%"
              h="100%"
              _hover={{ textDecoration: 'none' }}
              className="sidenav-links"
              onClick={() => {
                setLinePosition(index * 68);
                updateLinePositionFromHash();
              }}
            >
              <Text className="sidenav-text">{text.name}</Text>
            </Link>
          </Box>
        ))}
        <Box
          as="hr"
          position="absolute"
          right="0"
          top={tempLinePosition}
          h="60px"
          w="2px"
          backgroundColor="#54b3d6"
          transition="top 0.7s"
          className="slide-hr"
          border="none"
        />
      </VStack>
      <div className={visitedHome ? 'fadeout' : 'scrolldown-wrapper'}>
        <div className="scrolldown">
          <svg height="30" width="25" style={{ paddingLeft: '8px' }}>
            <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
        <p className="scroll-text">scroll down</p>
      </div>
    </Box>
  );
}

export default App;
