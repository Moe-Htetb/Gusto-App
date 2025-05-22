import { useEffect, useState } from "react";
import type { Recipes } from "../types/recipes";
import Card from "../components/Card";

function Home() {
  const [recipes, setRecipe] = useState<Recipes[]>([]);
  const [Loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes?limit=8");
        const data = await response.json();
        setRecipe(data.recipes);
      } catch (error) {
        console.log("Api fetching : " + error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 mb-3">
      {!Loading ? (
        recipes.map((recipe) => <Card recipe={recipe} key={recipe.id} />)
      ) : (
        <p>loading</p>
      )}
    </main>
  );
}

export default Home;
