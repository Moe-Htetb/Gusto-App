import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Recipes } from "../types/recipes";

function Gusto() {
  const [recipe, setRecipe] = useState<Recipes | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const getSingleRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
        console.log(data);
      } catch (error) {
        console.log("Single Api" + error);
      } finally {
        setLoading(false);
      }
    };

    getSingleRecipes();
  }, [id]);

  return (
    <>
      {loading && <p>Recipe is loading ...</p>}
      {!loading && !recipe && <p>No recipe found.</p>}
      {!loading && recipe && (
        <main className="grid  grid-cols-1 lg:grid-cols-2 gap-6 mb-3">
          <img src={recipe.image} alt={recipe.name} />
          <div className=" space-y-2">
            <h2 className="text-3xl font-bold">{recipe.name}</h2>
            <p className="text-sm font-medium">{recipe.difficulty}</p>
            <p className="text-xs font-medium">{recipe.rating}</p>
            <div>
              <p className="font-medium mb-2">Ingredients</p>
              <ol className=" list-decimal ps-6">
                {recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-medium mb-2">instructions</p>
              <ol className=" list-decimal ps-6">
                {recipe.instructions.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Gusto;
