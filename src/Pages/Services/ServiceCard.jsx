import React from 'react';
import arrow from '../../assets/assets/arrow.png'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img,title,price,_id} = service;
    return (
<div className="card  border bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{title}</h2>
    <div className=" grid-cols-2 grid items-center justify-between mt-6">
        <p className='text-[#FF3811] font-bold'>Price : ${price}</p>
      <div className="">
        <Link to={`/checkout/${_id}`}>
        <img className='w-10' src={arrow} alt="" />
        </Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;