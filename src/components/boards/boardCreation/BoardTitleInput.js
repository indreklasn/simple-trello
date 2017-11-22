import React from 'react';

// refactor this to styled components please */

const BoardTitleInput = (field) => (
    <label>
        <input {...field.input} type="text" className="input" />
        {
            field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>
        }
    </label>
)


export default BoardTitleInput;
