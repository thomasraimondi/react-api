export default function CardActors({ actor }) {
  return (
    <div
      className="card border-2 border-gray-200 rounded-2xl w-full max-w-xs shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white hover:-translate-y-1 transform cursor-pointer m-4"
      key={actor.id}
    >
      <div className="card-image border-b-2 border-gray-100 p-4 flex justify-center bg-gray-50 rounded-t-2xl">
        <img
          className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-white -mt-12"
          src={actor.image}
          alt={actor.name}
        />
      </div>
      <div className="card-content p-6 flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold my-2 text-gray-800 text-center">
          {actor.name}
        </h2>
        <div className="flex flex-col gap-1 text-gray-600">
          <span className="font-semibold">
            Birth Year:{" "}
            <span className="font-normal text-gray-700">
              {actor.birth_year}
            </span>
          </span>
          <span className="font-semibold">
            Nationality:{" "}
            <span className="font-normal text-gray-700">
              {actor.nationality}
            </span>
          </span>
          <span className="font-semibold">
            Biography:{" "}
            <span className="font-normal text-gray-700 line-clamp-3">
              {actor.biography}
            </span>
          </span>
          {actor.awards && (
            <span className="font-semibold flex items-center gap-2 mt-2">
              Awards:
              <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                {actor.awards}
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
