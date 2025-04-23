import React from 'react';
// import { FaUserCircle } from "react-icons/fa";


const Card = ({ userInfo }) => {
  return (
    <>
      {userInfo && (
        <div className="id-card">
          <div className="card-header">
            <h3>COMPANY NAME</h3>
          </div>

          <div className="user-info">
            <h2>{userInfo.name}</h2>
            <p className="designation">{userInfo.role}</p>
          </div>

          <div className="card-details">

            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Gender:</strong> {userInfo.gender}</p>
          </div>

          <div className="card-footer"></div>
        </div>
      )}
    </>
  );
};

export default Card;
