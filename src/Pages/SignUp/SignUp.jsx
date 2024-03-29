import React, { useContext } from "react";
import PropTypes from "prop-types";

import login from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = (props) => {
  const {createUser} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value; // Corrected typo here
    const password = form.password.value;
    const newUser = {
      name,email,password
    }
    createUser(email,password)
    .then(res => {
      console.log(res.user);
    })
    .catch(err => {
      console.log(err);
    })
    
    console.log(newUser);
}

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="border rounded border-red-500 p-4">
          <div className="card shrink-0 w-full max-w-sm  ">
            <h3 className="font-bold text-center text-3xl">Sign Up</h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  

                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confrm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p className="">
              Have an Account{" "}
              <Link className="text-orange-600 font-bold" to={"/login"}>
                 Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
