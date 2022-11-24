import React from "react";

const Total = ({ exercises }) => {
  return (
    <p>
      Number of exercises {exercises.reduce((exercise, total) => (total += exercise), 0)}
    </p>
  );
};

export default Total;
