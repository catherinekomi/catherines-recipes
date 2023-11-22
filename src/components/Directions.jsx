/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Directions = (props) => {
  const directions = props.directions;
  const [showFullDirections, setShowFullDirections] = useState(false);
  const wordThreshold = 50;

  useEffect(() => {
    const totalWords = directions.reduce(
      (acc, recipeDirections) => acc + recipeDirections.length,
      0
    );
    console.log(
      totalWords,
      wordThreshold,
      totalWords <= wordThreshold,
      "totalWords <= wordThreshold"
    );
    setShowFullDirections(totalWords <= wordThreshold);
  }, [directions]);

  return (
    <>
      <p className='mt-2 text-slate-500'>Directions:</p>
      {directions.map((recipeDirections, recipeIndex) => (
        <ul key={recipeIndex}>
          {Array.isArray(recipeDirections) &&
            recipeDirections.map((step, index) => (
              <li
                className={`mt-2 text-slate-500 ${
                  showFullDirections ? "" : "overflow-hidden"
                }`}
                key={index}
              >
                {step}
              </li>
            ))}
        </ul>
      ))}
      {directions.length > 1 && (
        <button
          className='text-indigo-500 hover:underline focus:outline-none'
          onClick={() => setShowFullDirections(!showFullDirections)}
        >
          {showFullDirections ? "Read Less" : "Read More"}
        </button>
      )}
    </>
  );
};

Directions.propTypes = {};

export default Directions;
