import React from 'react';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = props => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, []);
    return (
        <div >
            <div className="text-center space-y-4 mb-6">
                <h3 className="text-2xl font-extrabold te text-orange-500">Services</h3>
                <h3 className="text-5xl font-bold">Our Services Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 gap-6 p-6'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;