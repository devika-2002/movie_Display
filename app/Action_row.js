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
