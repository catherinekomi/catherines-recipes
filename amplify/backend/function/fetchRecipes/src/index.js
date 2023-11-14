exports.handler = async (event) => {
  console.log(event);

  // Fetch all recipes
  const recipes = await fetchAllRecipes();

  const response = {
    statusCode: 200,
    // Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(recipes),
  };

  return response;
};

// Function to fetch all recipes
const fetchAllRecipes = async () => {
  // Implement your logic to fetch all recipes
  // For example, you might query a database or an API
  const recipes = [
    {
      recipeId: 1,
      image: "",
      recipeName: "Chicken with Artichokes, Spinach and Tomatoes",
      cookingTime: "1 hour 15 minutes",
      ingredients: "",
      course: "main",
      directions: "",
    },
    {
      recipeId: 2,
      image: "",
      recipeName: "Mom`s Turkey Patties",
      cookingTime: "1 hour 15 minutes",
      ingredients: "",
      course: "main",
      directions: "",
    },
    // Add more recipes as needed
  ];
  return recipes;
};
