import React from 'react';
import login from '../../assets/assets/images/login/login.svg'

const LogIn = () => {
    const handleSubmit = e=>{
        e.preventDefault();
    }
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col gap-16 lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
        <img src={login} alt="" />
    </div>
    <div className="border rounded border-red-500 p-4">
    <div className="card shrink-0 w-full max-w-sm  ">
        <h3 className="font-bold text-center text-3xl">Login</h3>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;