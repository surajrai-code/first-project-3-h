import React, {
    useEffect,
    useReducer
  } from 'react';
  
  import Input from './Input';
  import Button from './Button';
  const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
  };
  
  const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
  };
  
  const Login = () => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
   
  
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
    });
  
    
  
   
  
    useEffect(() => {
      console.log('EFFECT RUNNING');
  
      return () => {
        console.log('EFFECT CLEANUP');
      };
    }, []);
  
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
  
    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
       
      }, 500);
  
      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid]);
  
    const emailChangeHandler = (event) => {
      dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  
      
    };
  
    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  
    };
  
    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    };
  
    const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      
    };
  
    return (
      
        <form onSubmit={submitHandler}>
          <Input
           
            id="email"
            label="E-Mail"
            type="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
          
            id="password"
            label="Password"
            type="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <div >
            <Button type="submit" >
              Login
            </Button>
          </div>
        </form>
    );
  };
  
  export default Login;