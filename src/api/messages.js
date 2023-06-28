import axios from "axios";

export const saveMessage = async (message) => {
  const response = await axios.post("http://localhost:3000/messages", message);
  return response.data;
};
