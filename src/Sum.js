import React from 'react';

export default (props) => {
  let sum = props.nums.reduce( ( acc, cur ) => acc + cur, 0 );;
  return (
    <div>
        <h1>Sum</h1>
        <p>
          {props.nums.join('+')} =  {sum}
        </p>
    </div>
  );
};
