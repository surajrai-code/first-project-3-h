// import logo from './logo.svg';
import React,{useState} from 'react';


import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
const App=()=>{
        const [userList, setUserList]=useState([]);
        const addNewUserHandler=(uName,uAge)=>{
                setUserList((prevUserList)=>{
                        return[...prevUserList,{name:uName,age:uAge}]
                })
        }

 
        return(
           <div>
            <Form onAdduser={addNewUserHandler}/>
            <UserList users={userList} />
           </div> 
    
        )
  
}

export default App;
