import axios from "axios";
import { useQuery } from "react-query";
import { planetsEndpoint } from "./../utility/constants";

const getPlanetDetails = async (page = 1) => {
  const res = await axios.get(`${planetsEndpoint}?page=${page}`);
  return res;
};
export const usePlanets = (page) => {
  // useQuery takes 2 arguments.
  // 1. The unique string.
  // 2. The function for calling the api.
  return useQuery(["planets", page], () => getPlanetDetails(page), {
    keepPreviousData: true,
  });
};
