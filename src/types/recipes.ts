export type Recipes = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  difficulty: Difficulty;
  image: string;
  rating: number;
};

type Difficulty = "Easy" | "Medium";
