import React, { useState, useEffect } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate} from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  HStack,
  Stack,
  Image,
  VStack,
  Text,
  Flex,
  Box,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import img1 from "../components/Images/nodeMCU.jpeg";
import img2 from "../components/Images/arduinoUNO.jpeg";
import axios from "axios";
import { displayCart, deleteCartItem } from "../api/api.cart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  let netPrice = 0;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await displayCart(`/cart/read/${localStorage.getItem("user")}`);
      if (data.error) {
        window.alert(data.error);
      }
      if (data.items)
        setCartItems(data.items);
    };
    fetchData();
  }, []);

  const delete_item = async (username, id) => {
    const res = await deleteCartItem(url='/cart/delete', id=id, username=username)  
    window.alert(res.data.message);
    window.location.reload();
  };

  const navigate = useNavigate();
  const Imgs = { img1, img2 };
  return (
    <>
      <Flex p={10} justify="space-between">
        <HStack alignItems={"flex-start"} spacing={"12"}>
          <Button
            colorScheme="teal"
            onClick={() => {
              navigate("/shop");
            }}
          >
            CONTINUE SHOPPING
          </Button>

          <VStack>
            <Card p={5}>
              <Box>
                <Flex justify="space-between">
                  <Text color={"black"}> Shopping Cart</Text>
                  <Text color={"black"}> Price</Text>
                </Flex>
              </Box>
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    item != null && (
                      <Flex>
                        {/* <Checkbox colorScheme="green" defaultChecked /> */}
                        {/* {console.log(item)} */}
                        <Image src={item.images[0] ? item.images[0] : "/placeholder.png"} />
                        <Flex className="p-2" justify={"space-between"}>
                          <Stack spacing={"5"} pt={4}>
                            <Text color={"black"}>{item.title}</Text>
                            <Text color={"black"} maxWidth={"500px"}>
                              Product details : {item.description}
                            </Text>
                            <Text color={"black"}>
                              Category : {item.category}
                            </Text>
                            <Text color={"black"}>
                              Seller : {item.username}
                            </Text>
                            <Flex pb={5} justify={"space-between"}>
                              <Select maxW="100px" placeholder="Qty">
                                {[...Array(11).keys()].map((i) => (
                                  <option key={i} value={i}>
                                    {i}
                                  </option>
                                ))}
                              </Select>
                              <DeleteIcon
                                onClick={() => {
                                  delete_item(item.username, item._id);
                                }}
                                color={"red"}
                              />
                            </Flex>
                          </Stack>
                          <Text color={"black"} pt={5} pl={5}>
                            Price: ₹{item.price}
                            <div className="hidden">
                             { netPrice +=  item.price };
                            </div>
                          </Text>
                        </Flex>
                      </Flex>
                    )
                  );
                }).reverse()}
              <Flex>
                <Checkbox colorScheme="green" defaultChecked />
                <Image src={Imgs.img1} />
                <Flex justify={"space-between"}>
                  <Stack spacing={"5"} pt={4}>
                    <Text color={"black"}>Product name : name of item</Text>
                    <Text color={"black"} maxWidth={"500px"}>
                      Product details : Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. A, eos eveniet ex recusandae in adipisci
                      consequuntur suscipit quisquam ad fuga, magni enim
                      voluptatem modi magnam dolorem rem quae repellat numquam.
                    </Text>
                    <Text color={"black"}>Category : Hardware</Text>
                    <Flex pb={5} justify={"space-between"}>
                      <Select maxW="100px" placeholder="Qty">
                        {[...Array(11).keys()].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </Select>
                      <DeleteIcon
                        onClick={() => {
                          delete_item();
                        }}
                        color={"red"}
                      />
                    </Flex>
                  </Stack>
                  <Text color={"black"} pt={5} pl={5}>
                    ₹500
                  </Text>
                </Flex>
              </Flex>
              <Divider borderWidth="1px" />

              <Flex>
                <Checkbox colorScheme="green" defaultChecked />
                <Image src={Imgs.img2} />
                <Flex justify={"space-between"}>
                  <Stack spacing={"5"} pt={4}>
                    <Text color={"black"}>Product name : name of item</Text>
                    <Text color={"black"} maxWidth={"500px"}>
                      Product details : Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. A, eos eveniet ex recusandae in adipisci
                      consequuntur suscipit quisquam ad fuga, magni enim
                      voluptatem modi magnam dolorem rem quae repellat numquam.
                    </Text>
                    <Text color={"black"}>Category : Hardware</Text>
                    <Flex pb={5} justify={"space-between"}>
                      <Select maxW="100px" placeholder="Qty">
                        {[...Array(11).keys()].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </Select>
                      <DeleteIcon color={"red"} />
                    </Flex>
                  </Stack>
                  <Text color={"black"} pt={5} pl={5}>
                    ₹500
                  </Text>
                </Flex>
              </Flex>
              <Divider borderWidth="1px" />
            </Card>
          </VStack>

          <Card p={"5"}>
            <Text fontWeight={"bold"} color={"black"}>
              {" "}
              Product Summary
            </Text>
            <Box pt={5} pb={5}>
              <Text>SubTotal : ₹{netPrice}</Text>
              <Text>Item count : {cartItems.length}</Text>
              <Divider borderWidth="1px" />
            </Box>

            <Button bgColor={"teal"}>CHECK OUT</Button>
          </Card>
        </HStack>
      </Flex>
    </>
  );
};

export default Cart;
