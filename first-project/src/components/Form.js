import React ,{useState} from 'react';
const Form=(props)=>{
const [name,setName]=useState('')
const [age, setAge]=useState('')
const addAge=(event)=>{
    setAge(event.target.value);
}
const addName=(event)=>{
    setName(event.target.value);
}
const addNewUserHandler=(event)=>{
    event.preventDefault();
    if(name.trim().length===0 || age.trim().length===0){
        alert('wrong input')
    }
    if(+age < 1){
        alert('wrong input')
    }
    props.onAdduser(name,age)
    setAge('');
    setName('');
   

}
    return(
        <div className='form-control'>
        <form onSubmit={addNewUserHandler}>
            <div>
                <label>User Name</label>
                <input type='text' value={name} onChange={addName} ></input>
            </div>
            <div>
                <label>User Age</label>
                <input type='number' value={age} onChange={addAge}></input>
            </div>
            <div>
                <button type='submit'>Add new User</button>
            </div>
        </form>

        </div>
    )
}
export default Form;