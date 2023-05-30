import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocalLogin from "../Shared/SocalLogin/SocalLogin";


const SignUp = () => {
  const { register, handleSubmit,reset,formState: { errors } } = useForm();
  const {createUser,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()
  const onSubmit = data => {
    
    createUser(data.email,data.password)
    .then(result=>{
      const user=result.user
      console.log(user)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        const saveUser={name:data.name, email:data.email}
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'You Updated Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/')
          }
        })
       
      })
      .catch(error=>console.log(error))
     
    })
    .catch(error=>console.log(error))
   
  };



    return (
        <>
         <Helmet>
        <title>Bistro Boss | Sign Up</title>
        
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name",{ required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">This Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" {...register("photoURL",{ required: true })}  className="input input-bordered" />
                {errors.photoURL && <span className="text-red-500">This Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" {...register("email",{ required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">This Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password",{ required: true,minLength:6,maxLength:20,
                  pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} name="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password is must 6 Characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password less then 20 Characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have 1 uppercase 1 lowercase 1 special Characters</p>}
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='p-4 font-medium text-orange-500 '><small>Already Have an Account!<Link to='/login'>Go to Login</Link></small></p>
            <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;