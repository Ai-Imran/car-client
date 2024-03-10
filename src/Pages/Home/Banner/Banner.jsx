import React from "react";
import PropTypes from "prop-types";
import img1 from '../../../assets/assets/images/banner/1.jpg'
import img2 from '../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../assets/assets/images/banner/4.jpg'

const Banner = (props) => {
  return (
    <div className="carousel w-full rounded-lg h-[600px] text-white">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full "
        />
        <div className="absolute  bg-gradient-to-r from-[#151515] pl-28 flex items-center to-[rgba(21,21,21,0)]  top-0 h-full left-0">
         <div className="space-y-8 w-3/4">
            <h2 className="text-6xl">Affordable <br /> Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn mr-4 btn-primary">Discover More</button>
            <button className="btn btn-outline btn-primary">Latest Price</button>
         </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full "
        />
        <div className="absolute  bg-gradient-to-r from-[#151515] pl-28 flex items-center to-[rgba(21,21,21,0)]  top-0 h-full left-0">
         <div className="space-y-8 w-3/4">
            <h2 className="text-6xl">Affordable <br /> Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn mr-4 btn-primary">Discover More</button>
            <button className="btn btn-outline btn-primary">Latest Price</button>
         </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full "
        />
        <div className="absolute  bg-gradient-to-r from-[#151515] pl-28 flex items-center to-[rgba(21,21,21,0)]  top-0 h-full left-0">
         <div className="space-y-8 w-3/4">
            <h2 className="text-6xl">Affordable <br /> Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn mr-4 btn-primary">Discover More</button>
            <button className="btn btn-outline btn-primary">Latest Price</button>
         </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full "
        />
        <div className="absolute  bg-gradient-to-r from-[#151515] pl-28 flex items-center to-[rgba(21,21,21,0)]  top-0 h-full left-0">
         <div className="space-y-8 w-3/4">
            <h2 className="text-6xl">Affordable <br /> Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn mr-4 btn-primary">Discover More</button>
            <button className="btn btn-outline btn-primary">Latest Price</button>
         </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
      </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-outline btn-secondary btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-outline btn-secondary btn-circle">
            ❯
          </a>
        </div>
        
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
