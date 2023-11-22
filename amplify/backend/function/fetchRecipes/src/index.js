const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "recipes";

exports.handler = async (event, context) => {
  const httpMethod = event.httpMethod;

  if (httpMethod === "GET") {
    return getRecipes();
  } else if (httpMethod === "POST") {
    const recipe = JSON.parse(event.body);
    return createRecipe(recipe);
  } else if (httpMethod === "DELETE") {
    const recipeId = event.queryStringParameters.id;
    return deleteRecipe(recipeId);
  } else {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify("Invalid HTTP Method"),
    };
  }
};

const getRecipes = async () => {
  try {
    const params = {
      TableName: tableName,
    };

    const response = await dynamodb.scan(params).promise();
    const recipes = response.Items;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(recipes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(error.message),
    };
  }
};

const createRecipe = async (recipe) => {
  try {
    // Validate that 'recipe' is a valid object
    if (typeof recipe !== "object" || recipe === null) {
      throw new Error("Invalid recipe format");
    }

    const params = {
      TableName: tableName,
      Item: recipe,
    };

    await dynamodb.put(params).promise();

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify("Recipe created successfully"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(error.message),
    };
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: recipeId,
      },
    };

    await dynamodb.delete(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify("Recipe deleted successfully"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(error.message),
    };
  }
};
