import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = () =>{
        console.log('clicked')
    }
    return (
        <div className='login-form'>
            <div className='input-field'>
                <h3>Create Account</h3>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <br />
                    <input type="password" name="" placeholder="Your Password" /><br /><br />
                    <input type="password" name="" placeholder="Re-enter Password" /><br /><br />
                    <input type="submit" value="Submit" className='btn-regular'/>
                </form>
                <p>Have an account? <Link to='/login'>Login</Link></p>
                <p>Create Account With Google</p>
                <div>
                    <button className='btn-regular'>Google</button>
                </div>
            </div>
            
        </div>
    );
};

export default Register;
