import { Link } from "react-router";
import type { Recipes } from "../types/recipes";

type cardPrpos = {
  recipe: Recipes;
};
function Card({ recipe }: cardPrpos) {
  return (
    <Link
      to={`/recipe/${String(recipe.id)}`}
      className="bg-gray-100 p-4 rounded-md"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="rounded-md object-cover"
      />
      <h2 className="text-xl font-bold my-2 line-clamp-1">{recipe.name}</h2>
      <p className="text-sm font-medium">difficulty - {recipe.difficulty}</p>
      <p className="text-sm font-medium">rating - {recipe.rating}</p>
    </Link>
  );
}

export default Card;
