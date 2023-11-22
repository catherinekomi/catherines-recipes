/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const IngredientDetails = (props) => {
  const ingredient = props.ingredient;
  return (
    <div>
      <p className='mt-2 text-slate-500'>
        {ingredient.name} : {ingredient.quantity} {ingredient.unit}
      </p>
    </div>
  );
};

IngredientDetails.propTypes = {};

export default IngredientDetails;
