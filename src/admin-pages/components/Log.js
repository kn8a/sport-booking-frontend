import React, { useEffect, useState } from 'react';

import {
  useColorModeValue,
  Flex,
  Text,
  Button,
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
  FormLabel,
  Textarea,
  Select,
  Divider,
} from '@chakra-ui/react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router';
import { FaEdit } from 'react-icons/fa';

function Log(props) {
    const [color, setColor] = useState('')
    useEffect(()=>{
        switch (props.log.type) {
            case 'booking':
                setColor('green')
                break;
            case 'topup':
                setColor('yellow')
                break
            case 'registration':
                setColor('cyan')
                break
            case 'edit':
                setColor('purple')
                break
            
        }
    })
  return (
    <div>

    <Flex
        rounded={'lg'}
        bg={useColorModeValue(`${color}.100`, `${color}.700`)}
        boxShadow={'md'}
        p={2}
        w="full"
        justifyContent={'space-between'}
        flexDirection={'column'}
        gap={2}
      >
        <Flex gap={4}>
      <Text fontSize={'sm'}>{props.log.text}</Text>
      <Flex flexDirection={'column'}>
        <Text fontSize={'sm'} textAlign='right'>
            {DateTime.fromISO(props.log.createdAt).toLocaleString(
            DateTime.DATE_SHORT
            )}
        </Text>
        <Text fontSize={'sm'} textAlign='right'>
            {props.log.type}
        </Text>
      </Flex>
      
    </Flex>
      </Flex>
    
    
    <Divider/>
    </div>
  );
}

export default Log;
