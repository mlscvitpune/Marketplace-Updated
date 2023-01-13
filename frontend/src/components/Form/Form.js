import React from 'react'
import {
    FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  HStack,
  Box,
  VStack,
  Heading,
  Divider,
  Button,
  Card,
  Select,
  InputLeftElement,
  Flex,
  } from '@chakra-ui/react'
  import { PhoneIcon } from "@chakra-ui/icons";


const Form = () => {
  return (
      <VStack spacing={10} p={4}>
          <Card p={5}>
            <Box p={4} >
              <Heading size={"md"}>Personal Details</Heading>
            </Box>
            <HStack spacing={"40"} p={5}>
              <FormControl>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input id="name" type="text" placeholder="Enter your name" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name">Last name</FormLabel>
                <Input id="name" type="text" placeholder="Enter your name" />
              </FormControl>
            </HStack>
            <HStack spacing={"40"} p={5}>
              <FormControl>
                <FormLabel htmlFor="date">Birth Date</FormLabel>
                <Input id="date" type="date" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="date">Contact</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Phone number" />
                </InputGroup>
              </FormControl>
            </HStack>
            <HStack spacing={"40"} p={5}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name">PRN/GRN NO.</FormLabel>
                <Input id="name" type="text" placeholder="Enter your PRN/GRN no." />
              </FormControl>
            </HStack>
            <Divider color={"black"} size="2px" orientation="horizontal" />
            <Box p={4}>
              <Heading size={"md"}>Location</Heading>
            </Box>
            <HStack spacing={"28"} p={5}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                  <option>USA</option>
                  <option>INDIA</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                  <option>Pune</option>
                  <option>Mumbai</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="number">Pin Code</FormLabel>
                <Input id="number" type="number" placeholder="Enter your PinCode" />
              </FormControl>
            </HStack>
            <FormControl p={5}>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Textarea placeholder="Enter your address" />
            </FormControl>
            <HStack spacing={"5"} p={5}>
              <Button bgColor={"cyan.500"}>Save</Button>
              <Button bgColor={"grey"}>cancel</Button>
            </HStack>
          </Card>
        </VStack>
  )
}

export default Form