import axios from "axios";

const eirAxios = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const api = {
  searchForBook: (query) =>
    eirAxios.get("/", {
      params: {
        q: query,
        key: process.env.REACT_APP_API_KEY,
      },
    }),
  searchForABook: (volumeId) =>
    eirAxios.get(`/${volumeId}`, {
      params: {
		volumeId: volumeId,
        key: process.env.REACT_APP_API_KEY,
      },
    }),
};

export default api;
