import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().min(4, "Username be atleast 4 characters long").required(),
    email: yup.string().email().required(),
    password: yup.string().min(5, 'Password must contain 5 or more characters').required(),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
  }).required();

export default function Register({getUserData}){
    const [serverErrors, setserverErrors] = useState(false)
    const [hasRegistered, sethasRegistered] = useState(false)
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = (data) => handleUserRegistration(data);

    function handleUserRegistration(userData){
        delete userData.password_confirmation
   
        fetch("https://dees-blogg-app.herokuapp.com/users", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log(data);
                setserverErrors(true)
                sethasRegistered(false)
                
        }
        else{
            sethasRegistered(true)
            sessionStorage.setItem("user_id", JSON.stringify(data.id))
            getUserData(data)
            console.log(data)
            setserverErrors(false)
            
        }
      })         
    }

    if (hasRegistered) {
        return <Navigate to="/home" />
      } 

    return(
        <>
        <div className="container m-5">
            <div className="register-container">
                
                <div className="main-register">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            {serverErrors ? <p className='error-message'>Invalid username or password</p> : false}
                            <div className="input-group">

                                <div className="mb-2">
                                    <label htmlFor="email" className='input-left'>Email</label>
                                    <input id='email' {...register("email")} className="form-control  input-left" 
                                    type="email" placeholder="eg. john.doe@mail.com" />
                                    <p className='error-message input-left'>{errors.email?.message}</p>
                                </div>

                            </div>

                            <div className="input-group">
                                <div className="mb-2">
                                    <label htmlFor="username">Username</label>
                                    <input id='username' {...register("username")} className="form-control " 
                                    type="text" placeholder="eg. john_doe" />
                                    <p className='error-message'>{errors.username?.message}</p>
                                </div>

                                
                                
                            </div>

                            <div className="input-group">
                                <div className='h-100 mb-3'>
                                    <label htmlFor="password">Password</label>
                                    <input id='password' {...register("password")} className="form-control " 
                                    type="password" placeholder="Password" />
                                    <p className='error-message'>{errors.password?.message}</p>
                                </div>

                                <div className='h-100 mb-3'>
                                    <label htmlFor="password_confirmation" className='input-left'>Confirm Password</label>
                                    <input id='password_confirmation' {...register("password_confirmation")} className="form-control  input-left" 
                                    type="password" placeholder="Confirm your password" />
                                    <p className='error-message input-left'>{errors.password_confirmation?.message}</p>
                                </div>
                            </div>

                            <div className="input-group">
                                
                                <button className="btn" type="submit">
                                    Register {" "}
                                    <span className="svg">
                                        <svg
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                        </svg>
                                    </span>
                                    </button>
                                </div>

                            <p className="mt-4">Already have an account? <Link className='login-here' to="/login">Login here</Link></p>
                        </div>
                    </form>
                </div>

                <div className="register-info">
                    <h3 className="register-heading text-left mt-3">Create Account</h3>
                   
                </div>
            </div>
        </div>
    </>
)
}