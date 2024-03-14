import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import BookingRow from './BookingRow';
import axios from 'axios';

const Bookings = props => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/book?email=${user?.email}`
    useEffect(() => {
      axios.get(url,{withCredentials:true})
      .then(res => {
        setBookings(res.data)
      })
        // fetch(url,{withCredentials:true})
        // .then(res => res.json())
        // .then(data => {
        //     setBookings(data);
        // })
    }, [url]);

    const handleDelete = id =>{
        const proceed = confirm('Are you sure Delete')
        if(proceed){
            fetch(`http://localhost:5000/book/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete Successfull')
                    const remaning = bookings.filter(booking => booking._id !== id)
                    setBookings(remaning)
                }
            })
        }
      }

      const handleUpdate = (id)=>{
        fetch(`http://localhost:5000/book/${id}`,{
                method:"PATCH",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({status:'confirm'})

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    alert('Your updatae SUccessfull')
                    const remaning = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaning]
                    setBookings(newBookings)
                }
            })

      }

    return (
        <div>
            <h2 className='text-5xl text-center m-4'>Your Bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
    {
        bookings.map(booking => <BookingRow key={booking._id} handleUpdate={handleUpdate} handleDelete={handleDelete} booking={booking}></BookingRow>)
    }
      
     
    
    </tbody>
   
  </table>
</div>
        </div>
    );
};

Bookings.propTypes = {
    
};

export default Bookings;