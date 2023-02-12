import React from "react";
import { useState } from "react";
import { createItem } from "../api/api.item";
import {
  Box,
  Button,
  Text,
  Input,
  Heading,
  Select,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { BASE_URL } from "../constants/appConstants";
import getAuthenticatedUser from "../hooks/isAuth.middleware";

function AddNewItem() {
  const [TITLE, setTITLE] = useState("");
  const [Category, setCategory] = useState("");
  const [SP, setSP] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Description, setDesc] = useState("");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // const UserName = localStorage.getItem("user");

  const handleSubmit = async () => {
    if (TITLE === "") {
      window.alert("Please enter title");
      return;
    }
    if (SP === "") {
      window.alert("Please enter selling price");
      return;
    }
    if (Quantity === "") {
      window.alert("Please enter quantity");
      return;
    }
    if (Description === "") {
      window.alert("Please enter description");
      return;
    }

    const user = await getAuthenticatedUser();

    const data = {
      username: user.name,
      title: TITLE,
      category: Category,
      price: SP,
      quantity: Quantity,
      description: Description,
    };
    // console.log(data);
    const res = await createItem(BASE_URL + "/item/create", data);
    // console.log(res);
    if (!res.error) {
      window.alert("Item added successfully");
    } else if (res.error === 11000) {
      window.alert(res.error);
    } else {
      window.alert("Error adding item");
    }

  }
  return (
    <>
      <Box
        display="flex"
        w="100%"
        bg="blue"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="center"
          w={["85%", "70%"]}
          bg="white"
          flexDirection="column"
          mt="5rem"
          mb="5rem"
          borderRadius="5px"
        >
          <Box display="flex" justifyContent="center" w="100%" mt="1rem">
            <Heading fontWeight="normal">ITEM DETAILS</Heading>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="100%"
            flexDirection={["column", "column", "row"]}
          >
            <Box
              w={["100%", "100%", "48%"]}
              h="100%"
              display="flex"
              justifyContent="flex-start"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                m="2rem"
                flexDirection="column"
                w="90%"
              >
                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  Item Name
                </Text>
                <Input
                  placeholder="Item Name"
                  size="lg"
                  mb="2rem"
                  w="100%"
                  value={TITLE}
                  onChange={(e) => setTITLE(e.target.value)}
                />
                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  category
                </Text>
                <Select
                  variant="filled"
                  placeholder="select category"
                  size="lg"
                  mb="2rem"
                  w="100%"
                  value={Category}
                  onChange={(e) => {
                    if (e.target.value) {
                      setCategory(e.target.value);
                    }
                  }}
                >
                  <option values="Hardware">Hardware</option>
                  <option values="Home Appliances">Home Appliances</option>
                  <option values="Other">Other</option>
                </Select>

                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  Images
                </Text>
                <input
                  type="file"
                  className="
              file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
              file:px-6 file:py-2 
             
              file:rounded-full
              file:text-white
              file:cursor-pointer
              file:border-none
              fileshadow-lg file:shadow-blue-600/50
              text-black/80
              rounded-2
              cursor-pointer
          

              "
                  onChange={handleChange}
                ></input>

                <Image src={file}></Image>
              </Box>
            </Box>
            <Box
              w={["100%", "100%", "48%"]}
              h="100%"
              display="flex"
              justifyContent="flex-start"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                m="2rem"
                flexDirection="column"
                w="90%"
              >
                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  Description
                </Text>
                <Textarea
                  placeholder="Item Description"
                  size="lg"
                  mb="2rem"
                  w="100%"
                  type="text"
                  value={Description}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  Quantity
                </Text>
                <Input
                  placeholder="Qunatity"
                  size="lg"
                  mb="2rem"
                  w="100%"
                  type="number"
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Text mb="1rem" color="black" fontSize={["lg", "lg", "xl"]}>
                  Selling Price
                </Text>
                <Input
                  placeholder="Selling Price"
                  size="lg"
                  mb="2rem"
                  w="100%"
                  type="number"
                  value={SP}
                  onChange={(e) => setSP(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
          <Box w="100%" display="flex" justifyContent="center" mb="2rem">
            <Button
              onClick={handleSubmit}
              bg="black"
              _hover={{ opacity: "0.8" }}
              color="white"
              w={["100px", "200px"]}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AddNewItem;
