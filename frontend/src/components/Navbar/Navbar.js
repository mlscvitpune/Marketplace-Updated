import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Avatar,
  AvatarGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ padding: "15px", border: "1px solid lightgray" }}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Marketplace</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          {
            (() => {
              if (location.pathname === '/home' || location.pathname === '/signup' || location.pathname === '/login') {
                return (
                  <>
                    <Button colorScheme='teal' onClick={() => { navigate('/login') }}>Login</Button>
                    <Button colorScheme='teal' onClick={() => { navigate('/signup') }}>Sign Up</Button>
                  </>
                );
              } else {
                return (
                  <>
                    <Button colorScheme='teal' onClick={() => { navigate('/shop') }}>Shop</Button>
                    <IconButton as={FaShoppingCart} onClick={() => { navigate('/cart') }}></IconButton>
                    <Button colorScheme='teal' onClick={() => { navigate('/login') }}>Logout</Button>
                    <Button colorScheme='teal' onClick={() => { navigate('/newItem') }}>Add Item</Button>
                    <Button colorScheme='teal' onClick={() => { 
                      window.localStorage.removeItem("token") 
                      navigate('/login') }}>Logout</Button>
                    <AvatarGroup spacing='1rem'>
                      <Avatar bg='teal.500' onClick={() => { navigate('/UserProfile') }}/>
                    </AvatarGroup>
                  </>
                );
              }
            })()
          }
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
