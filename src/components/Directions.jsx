/* eslint-disable react/prop-types */
const Directions = (props) => {
  const directions = props.directions;

  return (
    <>
      <ul>
        <li className='mt-2 text-slate-500'>- {directions}</li>
      </ul>
    </>
  );
};

export default Directions;
