import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.form ||'/shop'

    const handleGoogleLogin= () =>{
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_uri)
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div className='login-form'>
            <div className='input-field'>
                <h3>Login</h3>
                <form>
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <br />
                    <input type="password" name="" id="" /><br /><br />
                    <input type="submit" value="Submit" className='btn-regular'/>
                </form>
                <p>New to ema-john? <Link to='/register'>Create Account</Link></p>
                <div>------------------- Or -------------------</div>
                    <button onClick={handleGoogleLogin} className='btn-regular'>Google</button>
                </div>
            
        </div>
    );
};

export default Login;