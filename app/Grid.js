Action _row
"use client"
import React, { useState } from 'react';
const Action_row = ({ id, handleDelete  }) => {
    const [Rating, setRating] = useState(0);
    const handleLike = () => {
        setRating(Rating + 1);
    };
    const handledislike = () => {
        setRating(Rating - 1);
    };

    return(
           <div>
                <div className="icon">
                    <div className="like_dislike">
                        <button onClick={handleLike} className="Like_button">
                            <img src="movie-like.png" alt="like" />
                        </button>
              
                        <span className="voting">{Rating}</span>
                        <button onClick={handledislike} className="Dislike_button">
                            <img src="movie-dislike.png" alt="dislike" />
                        </button>
              
                    </div>
                </div>
         </div>
    )
    
};

export default Action_row;

page.js

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
    
    function (id ,){
    
    }
  
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


function sorting(a b){
        abc.rating+=1
        const newArray=[...movies]
        setMovies(newArray);
        
    }
  
