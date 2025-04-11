import React from 'react';

const SearchBox = ({studentId}) => {

  let searchStudentId = (e) => {
    studentId(Number(e.target.value))
  }

  return (
    <input
      type="text"
      placeholder="Search student ID between 1 to 20...."
      className="search-box"
      onChange={searchStudentId}
    />
  );
};

export default SearchBox;
