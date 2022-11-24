import React from "react";

const Content = ({ parts, exercises }) => {
  return (
    <div>
      <p>
        {parts[0]} {exercises[0]}
      </p>
      <p>
        {parts[1]} {exercises[1]}
      </p>
      <p>
        {parts[2]} {exercises[2]}
      </p>
    </div>
  );
};

export default Content;
