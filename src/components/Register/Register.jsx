import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const { createUser, updateUser, setUser, googleLogin } = useContext(AuthContext);



    // EMAIL PASSWORD REGISTRATION
    const handleSignUp = (data) => {
        //console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Creation Successfull!');
                reset()
                //navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })

    }

    // GOOGLE LOGIN 
    const handleGoogleLogin = (event) => {
        event.preventDefault()
        //console.log('clicked google');
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('User Creation Successfull!');
            }).catch((error) => {
                setLoginError(error.message)
            });
    }

    return (
        // <div id='register-from'>
        //     <form className="form-body lg:w-2/5 md:w-1/2 sm:w-1/2 ">
        //         <h2>LOGIN/SIGNUP</h2>
        //         <div className="form-item">
        //             <label className="label">
        //                 <span className="label-text">Name</span>
        //             </label>
        //             <input type="text" name='name' placeholder="name" className="" />
        //         </div>
        //         <div className="form-item">
        //             <label className="label">
        //                 <span className="label-text">Email/Phone</span>
        //             </label>
        //             <input type="text" name='email' placeholder="email or phone" className="" />
        //         </div>
        //         <div className="form-item">
        //             <label className="label">
        //                 <span className="label-text">Password</span>
        //             </label>
        //             <input type="text" name='password' placeholder="password" className="" />
        //             <label className="label">
        //                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //             </label>
        //         </div>
        //         <div className=" mt-6">
        //             <button className="btn btn-primary w-full" type="submit">Signup</button>
        //         </div>
        //         <div onClick={handleGoogleLogin} className="sign-with-google mt-6">

        //             {
        //                 !googleUser?.uid ? <Link to=''>
        //                     <button className="btn w-full"><img src="images/google-logo.png" alt="" /><span>Sign in with google</span></button>
        //                 </Link> : <Link to='/popup'>
        //                     <button className="btn w-full"><img src="images/google-logo.png" alt="" /><span>Sign in with google</span></button>
        //                 </Link>
        //             }

        //             {/* <button className="btn w-full"><img src="images/google-logo.png" alt="" /><span>Sign in with google</span></button> */}



        //         </div>
        //         <div className='mt-8'>
        //             <h3>Already have an account?<Link to="/login"><u className='ml-2'>Sign In</u></Link></h3>
        //         </div>
        //     </form>
        // </div>

        // ///////////////////////////////////////////

        <div className='flex justify-center items-center my-32'>
            <div className='w-96 lg:w-1/2  p-7 rounded-2xl shadow-xl'>
                <h2 className='text-xl text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className='' >
                    <div className="form-control w-full ">
                        <label className="mb-4">Name</label>
                        <input {...register("name", { required: "Please enter your name" })} type="text" className="input input-bordered w-full" />
                        {errors.name && <label className='text-red-500'>{errors.name?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Email</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" className="input input-bordered w-full" />
                        {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Password</label>
                        <input {...register("password", { required: "Please enter your password", minLength: { value: 6, message: "please enter atleast 6 charecters" } })} type="password" className="input input-bordered w-full" />
                        {errors.password && <label className='text-red-500'>{errors.password?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value='SIGN UP' className="input w-full bg-[#00B207] text-white mt-2 cursor-pointer" />
                    </div>
                    <p className='text-xs my-[11px] text-center'>Already have an account?  <Link to='/login' className='text-[#00B207]'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline border-2 hover:border-none border-[#00B207] hover:bg-[#00B207] w-full'>CONTINUE WITH GOOGLE</button>
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Register;