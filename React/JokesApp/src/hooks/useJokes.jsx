import { useState, useEffect } from "react";
import axios from "axios";
export default function useJokes() {
  const [search, setSearch] = useState("");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchJoke();
  }, []);

  async function searchJoke() {
    try {
      setLoading(true);
      let response = await axios.get(
        `https://v2.jokeapi.dev/joke/Programming??blacklistFlags=sexist,explici&type=single&contains=${
          !!search.trim() !== "" ? search : "man"
        }`
      );
      let { id, joke } = response.data;
      setJokes((oldState) => {
        console.log(oldState);
        return [...oldState, { id, joke }];
      });
    } catch (error) {
      console.log(error);
      alert("Ocurrio un error");
    } finally {
      setLoading(false);
    }
  }
  return {
    search,
    setSearch,
    jokes,
    setJokes,
    loading,
    setLoading,
    searchJoke,
  };
}
