import React from "react";
import PropTypes from "prop-types";
import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'

const About = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
       <div className="lg:w-1/2 relative">
       <img
          src={person}
          className="m w-3/4 z-10  rounded-lg shadow-2xl"
        />
       <img
          src={parts}
          className="w-1/2 absolute border-8 border-stone-500 z-20 right-2 top-1/2 rounded-lg shadow-2xl"
        />
       </div>
        <div className="lg:w-1/2 p-4">
            <h3 className="text-orange-400 font-bold text-3xl mb-4">About us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
