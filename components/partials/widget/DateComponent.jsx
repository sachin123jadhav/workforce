
import React from 'react';

const DateComponent = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
