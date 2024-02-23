import axios from "axios";

const apiurl = "http://192.168.11.95:3003/"

const api = axios.create({
  baseURL: apiurl,
});

const useApi = () => ({
  signin: async (email: string, password: string) => {
    const response = await api.post('signin', {
      email,
      password,
    });

    return response.data;
  },
})

export default useApi;