import axios from "axios";

export default async function useFetch({ url, method, body }) {
  try {
    let response = await axios({ method, url, data: { ...body } });
    return response;
  } catch (error) {
    console.error(error);
  }
}
