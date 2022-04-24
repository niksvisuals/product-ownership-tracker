import {
    Box, useDisclosure, Button, ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl, FormLabel, Input, Text
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const CustomerModal = (props) => {
    const address = props.address
    const { isOpen, onOpen, onClose } = useDisclosure()

    axios.post("http://localhost:5000/api/customer/createCustomer", {
        customerAddress: address,
    })
    .then(function(res){
        console.log(res);
    })

    return (
        <Box p={4} >
            <Box as='button' onClick={onOpen} border='1px solid #2D3748' py={51} px={26} textAlign="left" w='255px' >
                <Text fontSize='18px' fontWeight='normal' lineHeight='32px' textAlign="left" >Enroll as</Text>
                <Text fontWeight='black' fontSize='28px' lineHeight='32px' >Customer</Text>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
                <ModalOverlay bg='blackAlpha.600' />
                <ModalContent bg="#E1E3E5" py={100}  >
                    {/* <ModalHeader textAlign="center" fontSize={12} fontWeight='thin' >Oops you are not a manufacturer</ModalHeader> */}
                    <ModalHeader textAlign="center" fontWeight='bold' >Apply to be a Customer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>
                    <FormControl w='50%' m='auto' isRequired lineHeight={1.5} color="#2D3748">
                        <FormLabel htmlFor='company-name' fontWeight='medium' >Name</FormLabel>
                        <Input bg="white" border='1px solid #E2E8F0' id='company-name' placeholder='John Doe' />
                        <FormLabel mt={4} htmlFor='company-prefix' fontWeight='medium' >Phone</FormLabel>
                        <Input bg="white" border='1px solid #E2E8F0' id='company-prefix' placeholder='93223 92322' />
                        <ButtonGroup>
                            <Button
                                mt={10}
                                colorScheme='green'
                                // isLoading={props.isSubmitting}
                                type='submit'
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
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default CustomerModal;