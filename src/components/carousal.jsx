import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import ReactDOM from "react-dom";
import theme from "./theme";
import { Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Icon, AddIcon } from "@chakra-ui/react";
import Abhishek from "./ok";
import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

export default function Carousal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <ChakraProvider >
      <Container
        py={8}
        px={0} pos="absolute"
        top='235px'
        left='131px'
        maxW={{
          base: "90%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
        w='90%'
      >
        <ChakraCarousel Width={200} sliderWidth={5} gap={40} >
          {data.slice(5, 15).map((post, index) => (
            <Abhishek name={index} />
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}
