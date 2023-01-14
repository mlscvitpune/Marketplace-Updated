import axiosInstance from "../constants/axiosInstance";

const displayCart = async (url) => {
  const response = await axiosInstance.get(url);
  return response;
};

const deleteCartItem = async (url, id, username) => {
  const response = await axiosInstance.delete(url, {
    data: {
      id: id,
      username: username,
    },
  });
  return response;
};

const createCartItem = async (url, id, username) => {
  console.log(id, username, url);
  const response = await axiosInstance.post(url, {
    data: {
      id: id,
      username: username,
    },
  });
  return response;
};

export { displayCart, deleteCartItem, createCartItem };
