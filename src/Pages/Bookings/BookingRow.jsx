import React from "react";
import PropTypes from "prop-types";

const BookingRow = ({ booking,handleDelete,handleUpdate }) => {
  const { img, title, price, date,_id,status } = booking;
  console.log(booking);
 
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6  w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                className="ruonded"
                src={img}
                alt="Avatar  Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <td>
       { status === 'confirm' ?  
       <span className="text-bold text-red-500">Confirm</span>
       : <input onClick={()=>handleUpdate(_id)}
          className="bg-orange-600 p-4 rounded-lg"
          type="submit"
          value=" paelse Confirm"
        />}
      </td>
    </tr>
  );
};

BookingRow.propTypes = {};

export default BookingRow;
