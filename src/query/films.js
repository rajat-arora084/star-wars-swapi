import axios from "axios";
import { useQuery } from "react-query";
import { filmsEndpoint } from "./../utility/constants";

const getFilmsData = async (page = 1) => {
  const res = await axios.get(`${filmsEndpoint}?page=${page}`);
  return res;
};
export const useFilms = (page) => {
  return useQuery(["films", page], () => getFilmsData(page), {
    keepPreviousData: true,
  });
};
