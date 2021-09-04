import axios from "axios";
import { useQuery } from "react-query";
import { peopleEndpoint } from "./../utility/constants";

const getPeopleData = async (page = 1) => {
  console.log("get peoplemdata page", page);
  const res = await axios.get(`${peopleEndpoint}?page=${page}`);
  return res;
};
export const usePeople = (page) => {
  return useQuery(["people", page], () => getPeopleData(page), {
    keepPreviousData: true,
  });
};
