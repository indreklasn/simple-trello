import React from 'react';

const BoardTitleInput = (field) => (
    <label>
        <input
            {...field.input}
            placeholder={field.placeholder}
            type="text"
            className="input"
        />
        {
            field.meta.touched &&
            field.meta.error &&
            <p className="error">{field.meta.error}</p>
        }
    </label>
)


export default BoardTitleInput;
