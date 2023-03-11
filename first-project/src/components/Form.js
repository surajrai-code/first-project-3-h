import React ,{useState,useRef,useReducer} from 'react';
import Button from './Button';
import ErrorModal from './ErrorModal';
const Form=(props)=>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collagenameInputRef = useRef();
  
    const [error, setError] = useState();
  
    const addUserHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredUserAge = ageInputRef.current.value;
      const enteredCollageName = collagenameInputRef.current.value;
      console.log(enteredCollageName);
      if (
        enteredName.trim().length === 0 ||
        enteredUserAge.trim().length === 0 ||
        enteredCollageName.trim().length === 0
      ) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values).",
        });
        return;
      }
      if (+enteredUserAge < 1) {
        setError({
          title: "Invalid age",
          message: "Please enter a valid age (> 0).",
        });
        return;
      }
      props.onAddUser(enteredName, enteredUserAge, enteredCollageName);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
      collagenameInputRef.current.value = "";
    };
  
    const errorHandler = () => {
      setError(null);
    };
  
    return(
         <div className='form-control'>
        {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
       
          <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="collage-name">Collage Name</label>
          <input id="collage-name" type="text" ref={collagenameInputRef} />
          <Button type="submit">Add User</Button>
        </form>

        </div>
    )
}
export default Form;