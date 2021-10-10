import React, { useState } from 'react';

import AddMovie from './AddMovie';
import classes from './ToggleAddMovie.module.css';

const ToggleAddMovie = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleFormHandler = () => {
        setIsEditing(true);
    };

    const cancelFormHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={classes.section}>
            {!isEditing ? <button type="button" onClick={toggleFormHandler}>Add Movie</button> : <AddMovie onAddMovie={props.onAddMovie} onCancel={cancelFormHandler} /> }
        </div>
    );
};

export default ToggleAddMovie;
