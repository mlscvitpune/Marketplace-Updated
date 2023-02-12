import axiosInstance from "../constants/axiosInstance";

const getAuthenticatedUser = async () => {
  const PATH = "/isAuth/";
  const TOKEN = localStorage.getItem("token");

  const { data } = await axiosInstance.get(PATH, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (data.message !== "Authorized") {
    return data.message;
  }
  return data.user;
};

export default getAuthenticatedUser;
