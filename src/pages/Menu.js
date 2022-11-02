import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PhoneIcon, AddIcon, WarningIcon, InfoOutlineIcon, CalendarIcon, EditIcon, PlusSquareIcon, LockIcon } from '@chakra-ui/icons'

function Menu(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.loggedIn.token) {
      navigate('/login');
    }
  });

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>
            Welcome {`${props.loggedIn.name_first}`}
          </Heading>
          <Text fontSize={'lg'}>
            {`Your account balance is ${props.loggedIn.balance}`}
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack
            spacing={6}
            alignContent="center"
            alignItems={'center'}
            width="full"
          >
            <RouteLink to={'/book'}>
              <Button colorScheme={'green'} width="full" leftIcon={<EditIcon/>} size={'lg'}>
                New booking
              </Button>
            </RouteLink>
            <RouteLink to={'/Bookings'}>
              <Button colorScheme={'blue'} width="full" leftIcon={<CalendarIcon/>}>
                My bookings
              </Button>
            </RouteLink>
            <RouteLink to={'/howto'}>
              <Button colorScheme={'blue'} leftIcon={<InfoOutlineIcon/>} width="full">
                How to use?
              </Button>
            </RouteLink>
            {/* <Button colorScheme={'blue'}>My account</Button> */}
            <Button onClick={() => {props.setLogin({}); props.logout()}} leftIcon={<LockIcon/>} colorScheme={'red'}>
              Logout
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Menu;
