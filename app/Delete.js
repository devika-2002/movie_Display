
const Delete = (props) => {
  return(
        <div className="delete_button">
            <button onClick={() => {props.onDelete()}}>
              <img src="delete-button.png" alt="delete" />
            </button>
        </div>
  )
};
export default Delete;
