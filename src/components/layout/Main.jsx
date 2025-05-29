import axios from "axios";
import { useState, useEffect } from "react";
import CardActors from "../actors/CardActors";
import Search from "../ui/Search";

export default function Main() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [newActors, setNewActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getActors = () => {
    setIsLoading(true);
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        const res = response.data;
        setActors(
          res.map(({ id, image, name, birth_year, nationality, biography, awards }) => ({
            id: "actor-" + id,
            image,
            name,
            birth_year,
            nationality,
            biography,
            awards,
          }))
        );
      })
      .then(() => {
        axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => {
          const res = response.data;
          setActresses(
            res.map(({ id, image, name, birth_year, nationality, biography, awards }) => ({
              id: "actress-" + id,
              image,
              name,
              birth_year,
              nationality,
              biography,
              awards,
            }))
          );
        });
      });
    setIsLoading(false);
  };

  useEffect(() => {
    setNewActors([...actors, ...actresses]);
  }, [actors, actresses]);

  useEffect(() => {
    getActors();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (search.length > 2) {
      setNewActors(newActors.filter((actor) => actor.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      setNewActors([...actors, ...actresses]);
    }
  }, [search]);

  return (
    <>
      <div className="container mx-auto border-2 border-b-black rounded-lg my-4">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold ">Lista Attori e Attrici</h1>
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="container mx-auto flex-grow-1 border-2 border-b-black rounded-lg my-4 p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap justify-center p-4">
            {newActors.map((actor) => (
              <CardActors key={actor.id} actor={actor} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
