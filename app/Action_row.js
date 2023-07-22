"use client"
import React, { useState } from 'react';
const Action_row = (props) => {

    return(
           <div>
                <div className="icon">
                    <div className="like_dislike">
                        <button onClick={()=>props.like(props.box)} className="Like_button">
                            <img src="movie-like.png" alt="like" />
                        </button>
              
                        <div className="voting">
                            <h1>{props.box.rating}</h1>
                        </div>
                        
                        <button onClick={()=>props.dislike(props.box)} className="Dislike_button">
                            <img src="movie-dislike.png" alt="dislike" />
                        </button>
              
                    </div>
                </div>
         </div>
    )
};

export default Action_row;
