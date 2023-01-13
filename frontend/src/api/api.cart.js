import axiosInstance from "../constants/axiosInstance";

const displayCart = async (url) => {
    const response = await axiosInstance.get(url);
    return response.json();
};

const deleteCartItem = async (url, id, username) => {
    const response = await axiosInstance.delete(url, {
        data: {
            id: id,
            username: username
        }
    });
    return response.json();
};


export { displayCart, deleteCartItem };
