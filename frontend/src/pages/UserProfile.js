import React, { useState } from 'react'
import Form from '../components/Form/Form'
import img from '../components/Images/Profile.jpeg'
import { SocialIcon } from "react-social-icons";
import {
  Image,
  Button,
  Box,
  Text,
  HStack,
  Stack,
  Card,
  CardBody,
  Center,
  Heading,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react'

import { StarIcon, EditIcon } from '@chakra-ui/icons'
import Items from '../components/Shop/Items'


const UserProfile = () => {
  const [file, setFile] = useState(img);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const property = {
    reviewCount: 34,
    rating: 4,
  };

  const [isSmallViewport ] = useMediaQuery("(max-width:600px)")

  return (
    <>
      <Stack spacing={"44"} direction={isSmallViewport  ? "column" : "row"}>  
        <Box p={5} >
          <Center>
            <Card p={4} size={"lg"}>
              <Box alignSelf={'center'}>
                <Heading size={"md"}>Profile</Heading>
              </Box>
              <CardBody>
                <Stack align="center" justify="center">
                  <Image
                    p={5}
                    border="4px"
                    borderColor="Black.500"
                    borderRadius="full"
                    boxSize="130px"
                    src={file}
                    alt="User"
                  />
                  <Button
                    colorScheme="teal"
                    variant="solid"
                  >
                    Upload Photo
                    <input
                      type="file"
                      multiple
                      onChange={handleChange}
                      style={{ width: "30px", height: "50px", opacity: 0 }}
                    />
                  </Button>
                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="blue.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Stack>
              </CardBody>
              <Stack spacing="1">
                <Text textAlign={"center"}>name</Text>
                <Text textAlign={"center"}>Email ID</Text>
              </Stack>
            </Card>
          </Center>
          <Card p={5}>
            <Heading size={"md"}>Social Media</Heading>
            <Box position="absolute" right={2} top={2}>
              <IconButton
                onClick={() => console.log("Edit button clicked")}
                icon={<EditIcon />}
              />
            </Box>
            <HStack spacing={"5"} align="center" p={5}>
              ReactDOM.render(
              <SocialIcon url="https://linkedin.com/" />, document.body);
              ReactDOM.render(
              <SocialIcon url="https://instagram.com/" />, document.body);
              ReactDOM.render(
              <SocialIcon url="https://twitter.com/" />, document.body);
            </HStack>
          </Card>
        </Box>
        <Form />
      </Stack>
      
      <Items userprofile={true} />
    </>
  )
}

export default UserProfile