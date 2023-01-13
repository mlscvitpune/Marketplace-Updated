import {
  Box,
  Button,
  Container,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Dash from "../components/DashStart/Dash";
import { display } from "../apiCalls";
import Items from "../components/Shop/Items";


const Shop = (userprofile, username = "") => {
  return (
    <>
      <div>
        <Container centerContent p="0">
          <Dash />
          <Box
            width={["70vw", "30em", "48em", "62em", "80em"]}
            display="flex"
            justifyContent="center"
            m="10px"
          >
            <Button
              margin={["8px", "15px"]}
              borderRadius="0"
              border="0"
              variant="link"
              _hover="none"
            >
              <Text
                border="0"
                fontFamily="sans-serif"
                fontWeight="normal"
                fontSize={["13px", "md", "lg", "2xl"]}
                color="black"
                _hover={{ color: "black", borderBottom: "2px" }}
              >
                Latest
              </Text>{" "}
            </Button>
            <Button
              margin={["8px", "15px"]}
              borderRadius="0"
              border="0"
              variant="link"
              _hover="none"
            >
              <Text
                border="0"
                fontFamily="sans-serif"
                fontWeight="normal"
                fontSize={["13px", "md", "lg", "2xl"]}
                color="black"
                _hover={{ color: "black", borderBottom: "2px" }}
              >
                Hardware
              </Text>{" "}
            </Button>
            <Button
              margin={["8px", "15px"]}
              borderRadius="0"
              border="0"
              variant="link"
              _hover="none"
            >
              <Text
                border="0"
                fontFamily="sans-serif"
                fontWeight="normal"
                fontSize={["13px", "md", "lg", "2xl"]}
                color="black"
                _hover={{ color: "black", borderBottom: "2px" }}
              >
                Appliances
              </Text>{" "}
            </Button>
          </Box>
          <Box
            width={["70vw", "30em", "48em", "62em", "80em"]}
            display="flex"
            justifyContent="center"
          >
            <InputGroup>
              <Input
                type="text"
                placeholder="What are you Looking For...."
                bg="white"
              />
              <InputRightAddon
                children={
                  <Text fontSize={["sm", "md", "lg", "xl"]} color="white">
                    Search
                  </Text>
                }
                w={["15vw", "8em", "15em"]}
                display="flex"
                justifyContent="center"
                bg="#0926B8"
                _hover={{ opacity: "0.8" }}
                border="0"
              />
            </InputGroup>
          </Box>

          <Items userprofile = {false}/>

          <Flex mt="20px" flexDirection="column">
            <Flex
              display="flex"
              justifyContent="flex-start"
              w={["70vw", "30em", "48em", "62em", "80em"]}
              mb="20px"
            >
              <Text fontSize={["md", "md", "lg", "3xl"]} color="black">
                Fresh Recommendations
              </Text>
            </Flex>
            <SimpleGrid columns={["2", "3", "3", "5"]} spacing={10} gap="10px">
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
              <Box
                bg="blue.100"
                height={["10rem", "15rem", "19rem"]}
                borderRadius="5px"
              ></Box>
            </SimpleGrid>
          </Flex>
          <Box
            w={["70vw", "30em", "48em", "62em", "80em"]}
            display="flex"
            justifyContent="center"
            mt="10px"
            mb="10px"
          >
            <Button bg="grey" color="white">
              Load More
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Shop;
