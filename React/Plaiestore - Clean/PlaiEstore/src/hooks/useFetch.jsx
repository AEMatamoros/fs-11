import axios from "axios";

export default async function useFetch({ url, method }) {
  let response = await axios({ method, url });
  return response;
}
