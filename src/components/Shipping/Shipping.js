import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='shipping-page'>
            <div className='shipping'>
                <h3 className='shipping-title'>Shipping Info</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className='error'>This field is required</span>}
                    <Link to='./placeOrder'>
                        <input type="submit" />
                    </Link>
                </form>
            </div>
            
        </div>
    );
};

export default Shipping;