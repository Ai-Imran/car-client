import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts =( {children}) => {
    const {user,loading} = useContext(AuthContext)
    const loacation = useLocation();
    console.log(loacation.pathname);
    if(loading){
       return <span className="loading text-center loading-dots loading-lg"></span>
    }
    if(user?.email){
        return children;
    }
    else{
        return <Navigate state={loacation.pathname} to={'/login'} replace></Navigate>
    }
   
};

PrivateRouts.propTypes = {
    
};

export default PrivateRouts;