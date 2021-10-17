import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/userFirebase';



const Login = () => {
    const {signInWithEmail, signInWithGoogle,signInWithFacebook} = useFirebase();      
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from ||`/`


    const emailValue = (e) =>{
        setEmail(e.target.value)
    }
    const passwordValue = (e) =>{
        setPassword(e.target.value)
    }

    const login = () =>{
        signInWithEmail(email, password)
        .then((result)=>{
            history.push(redirect_uri)
        })
    }

    const google = () =>{
        signInWithGoogle()
        .then((result)=>{
            history.push(redirect_uri)
        })
    }
    const facebook = () =>{
        signInWithFacebook()
        .then((result)=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className='d-flex justify-content-center align-items-center' id='login-page'>
            <div className='w-25 text-center'>
                <input onBlur={emailValue} className='form-control my-3' type="email" name="" placeholder="Email" />
                <input onBlur={passwordValue} className='form-control my-3' type="password" name="" placeholder="******" />
                <input onClick={login} className='form-control my-3 bg-danger text-light' type="button" value="Login" />
                <hr />
                <div className='mb-4 mt-2'>
                    <button onClick={google} className='border-0 rounded-2 bg-primary mx-2 px-4 text-light'>Google</button>
                    <button onClick={facebook} className='border-0 rounded-2 bg-primary mx-2 px-4 text-light'>Facebook</button>
                </div>
                <NavLink to='/signup'>New to this website?</NavLink>
            </div>
        </div>
    );
};

export default Login;