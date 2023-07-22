"use client";
import React, { useState } from "react";
import Header from "./Header.js";
import Movierow from "./Movierow.js";
import Data from "./Data.js";
import "./globals.css";
import Add_movie from "./Add_movie.js";

const page = () => {
    const [movies, setMovies] = useState(Data);

    const handleDelete = (name) => {
        const updatedMovies = movies.filter(
            (movie_object) => name !== movie_object.name
        );
        setMovies(updatedMovies);
    };

    function like(count) {
        count.rating += 1;
        const newArray = [...movies];
        setMovies(newArray);
    }

    function dislike(count) {
        count.rating -= 1;
        const newArray = [...movies];
        setMovies(newArray);
    }

    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

    return (
        <>
            <Header />
            {sortedMovies.map((movie) => (
            <Movierow
            key={movie.id}
            box={movie}
            onDelete={() => handleDelete(movie.name)}
            like={like}
            dislike={dislike}
            />
            ))}
            <Add_movie />
        </>
    );
};

export default page;
    
