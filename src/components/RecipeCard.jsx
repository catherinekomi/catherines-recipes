/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const IngredientDetails = ({ ingredient }) => (
  <div>
    <p className='mt-2 text-slate-500'>Name: {ingredient.name}</p>
    <p className='mt-2 text-slate-500'>
      Ingredient ID: {ingredient.ingredientId}
    </p>
    <p className='mt-2 text-slate-500'>Unit: {ingredient.unit}</p>
    <p className='mt-2 text-slate-500'>Quantity: {ingredient.quantity}</p>
    <p className='mt-2 text-slate-500'>Notes: {ingredient.notes}</p>
  </div>
);

const RecipeCard = (props) => {
  const recipes = props.recipes;

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      {recipes.map((recipe) => (
        <div className='md:flex' key={recipe.recipeId}>
          <div className='md:shrink-0'>
            <img
              className='h-48 w-full object-cover md:h-full md:w-48'
              src=''
              alt=''
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              {recipe.cookingTime} course: {recipe.course}
            </div>
            <a
              href='#'
              className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              {recipe.recipeName}
            </a>
            {Array.isArray(recipe.ingredients) &&
              recipe.ingredients.map((ingredient, index) => (
                <IngredientDetails key={index} ingredient={ingredient} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

RecipeCard.propTypes = {
  recipes: PropTypes.array,
};

export default RecipeCard;
