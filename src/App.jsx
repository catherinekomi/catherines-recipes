import { useState, useEffect } from "react";
// aws amplify
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
// components
import RecipeCard from "./components/RecipeCard";

const myAPI = "catherinesrecipes";
const path = "/recipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes when the component mounts
    getRecipes();
  }, []);

  // Function to fetch recipes from our backend and update the recipes array
  const getRecipes = async () => {
    try {
      const response = await API.get(myAPI, path);
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default App;
