import React from 'react';
import Part from './Part';

const Content = ({ parts, exercises }) => {
    return (
        <div>
            <Part part={parts[0].name} exercise={exercises[0]} />
            <Part part={parts[1].name} exercise={exercises[1]} />
            <Part part={parts[2].name} exercise={exercises[2]} />
        </div>
    )
}

export default Content;