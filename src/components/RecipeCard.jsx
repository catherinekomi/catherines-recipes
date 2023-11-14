import PropTypes from "prop-types";

const RecipeCard = (props) => {
  const recipes = props.recipes;

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      {recipes.map((recipe) => (
        <div className='md:flex' key={recipe.customerId}>
          <div className='md:shrink-0'>
            <img
              className='h-48 w-full object-cover md:h-full md:w-48'
              src='/img/building.jpg'
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
            <p className='mt-2 text-slate-500'>{recipe.ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

RecipeCard.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Adjust the type according to your data structure
      recipeName: PropTypes.string.isRequired,
      // Add more PropTypes for other properties as needed
    })
  ).isRequired,
};

export default RecipeCard;
