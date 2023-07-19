
import Action_row from "./Action_row.js"
import Delete from "./Delete.js"

export default function   Movierow (props){
    
    return (
        <div className="movie-row">
            <div className="movie-row1">
                <div className="movie-image"><img src={props.box.image} alt="poster"/></div>
                    <div className="movie-tex">
                        <div className="tex1">
                            <div className="tex3">{props.box.name}</div>
                            <div className="tex4">{props.box.year} | {props.box.duration} | {props.box. genre} </div>
                            <div className="tex5">Description</div>
                            <div className="tex6">{props.box.description}</div>
                        
                            <Action_row/> 
                            <Delete
                                {...props}
                             />
                        </div>
                   </div>
               </div>
            
         </div>
       )

}


