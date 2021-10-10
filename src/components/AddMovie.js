import React, { useRef } from "react";

import classes from './AddMovie.module.css';

const AddMovie =(props) => {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');
    const directorRef = useRef('');
    const producerRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
            director: directorRef.current.value,
            producer: producerRef.current.value
        };

        props.onAddMovie(movie);
        titleRef.current.value = '';
        openingTextRef.current.value = '';
        releaseDateRef.current.value = '';
        directorRef.current.value = '';
        producerRef.current.value = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} autoComplete="off" />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Description</label>
                <textarea id="opening-text" rows="5" ref={openingTextRef} autoComplete="off" ></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} autoComplete="off"  />
            </div>
            <div className={classes['control-flex']}>
                <div className={classes['flex-child']}>
                    <label htmlFor="director">Director</label>
                    <input type="text" id="director" ref={directorRef} autoComplete="off"  />
                </div>
                <div className={classes['flex-child']}>
                    <label htmlFor="producer">Producer(s)</label>
                    <input type="text" id="producer" ref={producerRef} autoComplete="off"  />
                </div>
            </div>
            <div className={classes.buttons}>
                <button onClick={props.onCancel}>Cancel</button>
                <button>Add Movie</button>
            </div>
        </form>
    );
};

export default AddMovie;