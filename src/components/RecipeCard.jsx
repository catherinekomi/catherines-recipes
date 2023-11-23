/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import IngredientDetails from './IngredientDetails';
import Directions from './Directions';
import image from './salad.jpeg';

const RecipeCard = (props) => {
  const recipes = props.recipes;

  return (
    <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl'>
      {recipes.map((recipe) => (
        <div
          key={recipe.recipeId}
          className='md:flex rounded-xl overflow-hidden'
        >
          {/* Image on the left */}
          <div className='md:w-1/2 p-6'>
            <img
              className='w-full h-32 md:h-auto md:w-full object-cover rounded-lg'
              src={image}
              alt={recipe.recipeName}
            />
          </div>

          {/* Cooking time, course, and recipe name on the right */}
          <div className='md:w-1/2 p-6 flex flex-col justify-between'>
            <div>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                {recipe.cookingTime} | {recipe.course}
              </div>
              <a
                href='#'
                className='block mt-2 text-lg leading-tight font-medium text-black hover:underline'
              >
                {recipe.recipeName}
              </a>
            </div>
            {Array.isArray(recipe.ingredients) &&
              recipe.ingredients.map((ingredient, index) => (
                <IngredientDetails key={index} ingredient={ingredient} />
              ))}
            <div>
              <p className='mt-2 text-slate-500'>Directions:</p>
              {Array.isArray(recipe.directions) &&
                recipe.directions.map((direction, index) => (
                  <Directions key={index} directions={direction} />
                ))}
            </div>
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
