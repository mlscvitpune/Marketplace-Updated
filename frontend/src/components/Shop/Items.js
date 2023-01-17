import React from "react";
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
  useAccordion,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { displayItem, deleteItem } from "../../api/api.item";
import { createCartItem } from "../../api/api.cart";
import {
  BASE_URL,
  ITEM_DESCRIPTION_VIEW_SIZE,
} from "../../constants/appConstants";
import getAuthenticatedUser from "../../hooks/isAuth.middleware";

const Items = (props) => {
  const [items, setItems] = React.useState();

  useEffect(() => {
    const display = async () => {
      const user = await getAuthenticatedUser();
      console.log(user);
      const response = await displayItem(
        BASE_URL + "/item/read",
        props.userprofile,
        user.name
      );
      setItems(response.items);
    };
    display();
  }, [props.userprofile]);

  const remove = async (id) => {
    console.log(id);
    const res = await deleteItem(BASE_URL + "/item/delete", id);
    window.alert(res.message);
    window.location.reload();
  };

  const addToCart = async (id) => {
    // console.log(username);
    const user = await getAuthenticatedUser();
    const { data } = await createCartItem("/cart/add", id, user.name);
    window.alert(data.message);
  };

  return (
    <div>
      <Flex className="p-2" mt="20px" flexDirection="column">
        <Flex
          display="flex"
          justifyContent="flex-start"
          w={["70vw", "30em", "48em", "62em", "80em"]}
          mb="20px"
        ></Flex>
        <SimpleGrid columns={["2", "3", "3", "5"]} spacing={10} gap="10px">
          {items &&
            items
              .map((item) => {
                return (
                  <Box
                    bg="blue.100"
                    height={["10rem", "15rem", "19rem"]}
                    borderRadius="5px"
                    className="flex flex-col justify-center p-4"
                  >
                    <a href={`/item/${item._id}`}>
                      <Text
                        className="p-2 flex justify-center text-black underline"
                        fontSize="xl"
                      >
                        Title: {item.title}
                      </Text>
                    </a>
                    <hr />
                    <Text className="p-2 " fontSize="md">
                      Category: {item.category}
                    </Text>
                    <Text className="p-2 " fontSize="md">
                      Description:{" "}
                      {item.description.length > ITEM_DESCRIPTION_VIEW_SIZE
                        ? item.description.substring(
                            0,
                            ITEM_DESCRIPTION_VIEW_SIZE
                          ) + "..."
                        : item.description}
                    </Text>
                    <Text className="p-2 " fontSize="md">
                      Price: {item.price}
                    </Text>
                    <Text className="p-2 " fontSize="md">
                      Quantity: {item.quantity}
                    </Text>
                    <hr />
                    <Text
                      className="text-black flex justify-center my-3"
                      fontSize="xl"
                    >
                      Seller: {item.username}
                    </Text>
                    {props.userprofile ? (
                      <Button
                        onClick={() => {
                          remove(item._id);
                        }}
                        className="flex p-0.5 justify-center"
                      >
                        Delete
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          addToCart(item._id);
                        }}
                        className="flex justify-center p-0.5"
                      >
                        Add to cart
                      </Button>
                    )}
                  </Box>
                );
              })
              .reverse()}
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Items;
