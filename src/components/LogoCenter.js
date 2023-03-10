import React,{useState} from "react";
// import { Box, Icon, Flex } from "@chakra-ui/react";
// import { GrReactjs } from "react-icons/gr";
import { FaBoxes as GrReactjs } from "react-icons/fa";
import logo from "../Images/logo_poms.png";
import {
  Box,
  Button,
  Icon,
  VStack,
  Flex,
  Input,
  NumberInputField,
  Image,
  // FormControl,
  // Input
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function LogoCenter(props) {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
    
  return (
    <VStack align="stretch">
      <Box maxW="960px" mx="auto" h={80}>
        {/* <Icon as={GrReactjs} w={250} h={250} /> */}
        <Image src={logo} boxSize='250px'/>
      </Box>
      <Box >
        <Flex ml={450} mr={450}>
          <Input type="text" pattern="[0-9]*" id="search" placeholder="Track product using Code" onChange={event => setSearch(event.currentTarget.value)} />
          {/* <NumberInputField id="search" placeholder="Track product using Code" onChange={event => setSearch(event.currentTarget.value)} /> */}
          <Button background="gray.700" color="white"  leftIcon={<BiSearch />} variant="solid" onClick={() => { navigate('/history/' + search); setSearch(""); }} >
            Search
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
}
