import axios from "axios";
import { useState, useEffect, use } from "react";

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
          res.map(
            ({
              id,
              image,
              name,
              birth_year,
              nationality,
              biography,
              awards,
            }) => ({
              id: "actor-" + id,
              image,
              name,
              birth_year,
              nationality,
              biography,
              awards,
            })
          )
        );
      })
      .then(() => {
        axios
          .get("https://lanciweb.github.io/demo/api/actresses/")
          .then((response) => {
            const res = response.data;
            setActresses(
              res.map(
                ({
                  id,
                  image,
                  name,
                  birth_year,
                  nationality,
                  biography,
                  awards,
                }) => ({
                  id: "actress-" + id,
                  image,
                  name,
                  birth_year,
                  nationality,
                  biography,
                  awards,
                })
              )
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
      setNewActors(
        newActors.filter((actor) =>
          actor.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setNewActors([...actors, ...actresses]);
    }
  }, [search]);

  return (
    <>
      <div className="container mx-auto flex-grow-1 border-2 border-b-black rounded-lg my-4">
        <div className="flex justify-between items-center p-4 border-b-2">
          <h1 className="text-2xl font-bold ">Lista Attori e Attrici</h1>
          <div className="search-container">
            <label className="mr-2" htmlFor="search">
              Cerca un attore
            </label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2"
              type="text"
              placeholder="Cerca un attore"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap justify-center p-4">
            {newActors.map((actor) => (
              <div
                className="card border-2 border-gray-300 rounded-lg p-4 w-1/4"
                key={actor.id}
              >
                <div className="card-image">
                  <img
                    className="w-full h-64 object-contain"
                    src={actor.image}
                    alt={actor.name}
                  />
                </div>
                <div className="card-content">
                  <h2 className="text-xl font-bold my-2">{actor.name}</h2>
                  <div className="flex flex-col">
                    <span className="font-bold">
                      Bith Year:{" "}
                      <span className="font-normal">{actor.birth_year}</span>
                    </span>
                    <span className="font-bold">
                      Nationality:{" "}
                      <span className="font-normal">{actor.nationality}</span>
                    </span>
                    <span className="font-bold">
                      Biography:{" "}
                      <span className="font-normal">{actor.biography}</span>
                    </span>
                    <span className="font-bold">
                      Awards:{" "}
                      <span className="font-normal">{actor.awards}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
