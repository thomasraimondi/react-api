import axios from "axios";
import { useState, useEffect } from "react";

export default function Main() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [newActors, setNewActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getActors = () => {
    setIsLoading(true);
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        setActors(response.data);
      })
      .then(() => {
        axios
          .get("https://lanciweb.github.io/demo/api/actresses/")
          .then((response) => {
            setActresses(response.data);
          });
      });
    setNewActors([...actors, ...actresses]);
    setIsLoading(false);
  };

  //   const getActresses = () => {
  //     setIsLoading(true);
  //     axios
  //       .get("https://lanciweb.github.io/demo/api/actresses/")
  //       .then((response) => {
  //         setActresses(response.data);
  //       });
  //   };

  useEffect(() => {
    getActors();
    setIsLoading(false);
  }, []);

  //   useEffect(() => {
  //     getActresses();
  //     setIsLoading(false);
  //   }, []);

  return (
    <>
      <div className="container mx-auto flex-grow-1 border-2 border-b-black rounded-lg my-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold p-4 border-b-2">Lista Attrici</h1>
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
      {/* <div className="container mx-auto flex-grow-1 border-2 border-b-black rounded-lg my-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold p-4 border-b-2">Lista Attori</h1>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap justify-center p-4">
            {actors.map((actor) => (
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
      </div> */}
    </>
  );
}
