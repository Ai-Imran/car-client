import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const Check = (props) => {
  const loadServices = useLoaderData();
  const { img, title, _id ,price} = loadServices;
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const fName = form.name.value; // Corrected typo here
    const lName = form.lastName.value; // Corrected typo here
    const date = form.date.value; // Corrected typo here
    const email = form.email.value;
    const checkOut = {
      fName, lName, date, email,img,price,title
    };


    console.log(checkOut);
    fetch(' http://localhost:5000/book',{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(checkOut)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
  };

  return (
    <div className="">
      <h2>Book Services : {title}</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary btn-block" value="Order Now" />
        </div>
      </form>
    </div>
  );
};

export default Check;
