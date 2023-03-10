import {
    Box, useDisclosure, Button, ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl, FormLabel, Input, Text, HStack, Tooltip
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai"


const ManufacturerModal = (props) => {
    const address = props.address.toLowerCase()
    const [Name, setName] = useState('');
    const [Code, setCode] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [prefixErr, setPrefixErr] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const createManufacturer = () => {
        axios.post("http://localhost:5000/api/manufacturer/createManufacturer", {
            manufacturerAddress: address,
            manufacturerEmail: "",
            companyCode: Code.toString()
        })
            .then(function (res) {
                console.log('Request sent to admin for verification.');
                // console.log(res);
                onClose();
            }).catch((e) => console.log(e))
    }

    function companyNameHandler(event) {
        let cName = event.currentTarget.value;
        if (cName === "") {
            // console.log("company name is not invalid");
            setNameErr(true);
        } else {
            setNameErr(false);
            setName(cName);
        }


    }

    function companyPrefixHandler(event) {
        let cPrefix = event.currentTarget.value;
        if (cPrefix === "") {
            // console.log("company prefix is not invalid");
            setPrefixErr(true);
        } else {
            setPrefixErr(false);
            setCode(cPrefix);
        }

    }


    return (
        <Box p={4} >
            <Box as='button' onClick={onOpen} border='1px solid #2D3748' py={51} px={26} textAlign="left" w='255px' >
                <Text fontSize='18px' fontWeight='normal' lineHeight='32px' textAlign="left" >Enroll as</Text>
                <Text fontWeight='black' fontSize='28px' lineHeight='32px' >Manufacturer</Text>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
                <ModalOverlay bg='blackAlpha.600' />
                <ModalContent bg="#E1E3E5" py={100}>
                    {/* <ModalHeader textAlign="center" fontSize={12} fontWeight='thin' >Oops you are not a manufacturer</ModalHeader> */}
                    <ModalHeader textAlign="center" fontWeight='bold' >Apply to be a Manufacturer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>
                    {/* <form onSubmit={manufacturerSubmitHandler}> */}
                    <FormControl w='50%' m='auto' isRequired lineHeight={1.5} color="#2D3748" >
                        <FormLabel
                            htmlFor='company-name'
                            fontWeight='medium'
                        >Company name</FormLabel>
                        <Input bg="white" border='1px solid #E2E8F0' id='company-name' placeholder='Rolex Inc.'  /*onChange={event => setName(event.currentTarget.value)}*/ onChange={companyNameHandler} />
                        {nameErr ? <Text color="red">Please enter a valid name</Text> : ""}
                        <HStack spacing={0} alignItems='baseline'>
                            <FormLabel mr={1} mt={4} htmlFor='company-prefix' fontWeight='medium' >Company prefix</FormLabel>
                            <Tooltip label='3 digit number that identifies your company'
                                fontSize='small'
                                bg='gray.300'
                                color='black'
                                placement='top-start'
                            >
                                <InfoOutlineIcon w={3} h={3} color='gray.600' />
                            </Tooltip>
                        </HStack>
                        <Input type="text" pattern="[0-9]*" bg="white" border='1px solid #E2E8F0' id='company-prefix' placeholder='546' /*onChange={event => setCode(event.currentTarget.value)}*/ maxLength="3" onChange={companyPrefixHandler} />
                        {prefixErr ? <Text color="red">Please enter a valid prefix</Text> : ""}
                        <ButtonGroup>
                            <Button
                                mt={10}
                                colorScheme='green'
                                // isLoading={props.isSubmitting}
                                type='submit'
                                onClick={() => createManufacturer()}
                            >
                                Apply
                            </Button>
                            <Button
                                mt={10}
                                variant='ghost'
                                mr={3}
                                onClick={onClose}
                                colorScheme='red'
                            >
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </FormControl>
                    {/* </form> */}
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ManufacturerModal;