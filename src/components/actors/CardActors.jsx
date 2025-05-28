export default function CardActors({ actor }) {
  return (
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
            Bith Year: <span className="font-normal">{actor.birth_year}</span>
          </span>
          <span className="font-bold">
            Nationality:{" "}
            <span className="font-normal">{actor.nationality}</span>
          </span>
          <span className="font-bold">
            Biography: <span className="font-normal">{actor.biography}</span>
          </span>
          <span className="font-bold">
            Awards: <span className="font-normal">{actor.awards}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
