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
    { customerId: "1", recipeName: "Recipe 1" },
    { customerId: "2", recipeName: "Recipe 2" },
    // Add more recipes as needed
  ];
  return recipes;
};
