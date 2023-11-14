import React, { useState, useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

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
    <div className='App'>
      <div>
        <h1>Recipe List</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.customerId}>
              <strong>{recipe.recipeName}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
