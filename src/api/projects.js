import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get("http://localhost:3000/projects");
  return response.data;
};
