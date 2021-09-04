import axios from "axios";
import { useQuery } from "react-query";
import { starshipsEndpoint } from "./../utility/constants";

const getStarshipsDetails = async (page = 1) => {
  const res = await axios.get(`${starshipsEndpoint}?page=${page}`);
  return res;
};
export const useStarships = (page) => {
  // useQuery takes 2 arguments.
  // 1. The unique string.
  // 2. The function for calling the api.
  return useQuery(["starships", page], () => getStarshipsDetails(page), {
    keepPreviousData: true, //it will keep prevs page data until the new data is fetched.
  });
};
