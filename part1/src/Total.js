import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.map(part => part.exercises).reduce((exercise, total) => (total += exercise), 0)}
    </p>
  );
};

export default Total;
