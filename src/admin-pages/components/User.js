import React, { useState } from 'react';
import {
  Box,
  Stack,
  useColorModeValue,
  Flex,
  Text,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  useToast,
  FormControl,
  Input,
  HStack,
  FormLabel,
  InputGroup
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function User(props) {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [user, setUser] = useState(props.user)
    
    
    return (
      <Flex w={'full'}>
        <Flex
          rounded={'lg'}
          bg={useColorModeValue('green.50', 'green.700')}
          boxShadow={'md'}
          p={2}
          w="full"
          justifyContent={'space-between'}
          //flexDirection={'column'}
          gap={2}
        >
          <Flex flexDirection={'column'}>
            <Text>
              <strong>{props.user.address}</strong>
              {` - ${props.user.name_first} ${props.user.name_last}`}
            </Text>
            <small><Text>{`${props.user.email}`}</Text></small>
  
            <Flex gap={2}>
                <small><Text>Balance: <strong>{props.user.balance}</strong></Text></small>
                <small><Text>Status: <strong>{props.user.status}</strong></Text></small>
            </Flex>
            
          </Flex>
          <Flex alignItems={'center'}>
          <Button colorScheme={'blue'} size={'md'} onClick={onOpen}>
              Edit
            </Button>
          </Flex>
          
        </Flex>
  
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`Editing ${props.user.name_first} ${props.user.name_last}`}</DrawerHeader>
  
            <DrawerBody justifyContent={'space-evenly'} p={4}>
              <Flex direction={'column'} gap={2}>
                <Flex gap={2} shadow='md' rounded={'md'} p={2}>
                <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.name_first}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                <FormControl id="firstName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.name_first}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                </Flex>
                <Flex shadow='md' rounded={'md'} p={2}>
                <FormControl id="firstName" >
                    <FormLabel>Email</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.email}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                </Flex>
                
                <Flex gap={2} shadow='md' rounded={'md'} p={2}>
                <FormControl id="firstName" >
                    <FormLabel>Address</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.address}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                <FormControl id="firstName" >
                    <FormLabel>Balance</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.balance}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                </Flex>
                
                <Flex gap={2} shadow='md' rounded={'md'} p={2}>
                <FormControl id="firstName" >
                    <FormLabel>Status</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.status}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                <FormControl id="firstName" >
                    <FormLabel>Role</FormLabel>
                    <Input
                        required
                        // onChange={onRegChange}
                        value={user.role}
                        name="name_first"
                        type="text"
                        placeholder="John"
                    />
                </FormControl>
                </Flex>
                
              </Flex>
            </DrawerBody>
  
            <DrawerFooter
              justifyContent={'space-evenly'}
              display="flex"
              flexDirection={'column'}
            >
              <Text pb={4}>
                <strong>⚠️ Ensure information accuracy</strong>
              </Text>
              <Flex>
                <Button colorScheme={'blue'} mr={3} onClick={onClose} size="lg">
                  Go back
                </Button>
                <Button colorScheme="green" size={'lg'} >
                  Submit changes
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    );
}

export default User