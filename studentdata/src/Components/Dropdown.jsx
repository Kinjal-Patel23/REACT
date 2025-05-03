import React from 'react';

const Dropdown = ({selectCourse}) => {

  let dropDownCourse = (e) => {
    selectCourse(e.target.value)
  }

  return (
    <select className="dropdown-select" onChange={dropDownCourse}>
      <option value="all">Select Course</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Bootstrap">Bootstrap</option>
      <option value="Tailwind CSS">Tailwind CSS</option>
      <option value="jQuery">jQuery</option>
      <option value="React">React</option>
      <option value="Express.js">Express.js</option>
      <option value="Node.js">Node.js</option>
    </select>
  );
};

export default Dropdown;
