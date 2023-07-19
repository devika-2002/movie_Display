"use client"
import React, { useState } from 'react';
import Header from "./Header.js"
import Movierow from "./Movierow.js"
import Data from "./Data.js"
import "./globals.css"

const task=()=>{
    const [movies, setMovies] = useState(Data);
    const handleDelete = (name) => {
    const updatedMovies = movies.filter((movie_object) =>name!== movie_object.name);
    setMovies(updatedMovies);
    };
    
  
    return(
        <>
            <Header/>
            {movies.map((movie)=>(
                <Movierow
                    key={movie.id}
                    box={movie}
                    onDelete={()=>handleDelete(movie.name)}
                />
            ))}
        </>
        
    )
}

export default task;



