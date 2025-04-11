import React, { useState } from "react";
import SearchBox from "./Components/SearchBox";
import Dropdown from "./Components/Dropdown";

function App() {

  const students = [
    { id: 1, name: "James Anderson", course: "HTML" },
    { id: 2, name: "Emily Johnson", course: "React" },
    { id: 3, name: "Michael Brown", course: "jQuery" },
    { id: 4, name: "Olivia Wilson", course: "React" },
    { id: 5, name: "Daniel Miller", course: "Express.js" },
    { id: 6, name: "Sophia Davis", course: "CSS" },
    { id: 7, name: "William Moore", course: "React" },
    { id: 8, name: "Isabella Taylor", course: "Node.js" },
    { id: 9, name: "Benjamin Thomas", course: "Tailwind CSS" },
    { id: 10, name: "Mia Martin", course: "React" },
    { id: 11, name: "Alexander Lee", course: "JavaScript" },
    { id: 12, name: "Charlotte Harris", course: "Node.js" },
    { id: 13, name: "Ethan Clark", course: "JavaScript" },
    { id: 14, name: "Amelia Lewis", course: "Tailwind CSS" },
    { id: 15, name: "Jacob Walker", course: "HTML" },
    { id: 16, name: "Grace Young", course: "Node.js" },
    { id: 17, name: "Logan Hall", course: "JavaScript" },
    { id: 18, name: "Lily Allen", course: "React" },
    { id: 19, name: "Lucas King", course: "Bootstrap" },
    { id: 20, name: "Ella Wright", course: "React" }
  ];


  let [select, setSelect] = useState("all");

  let filterCourse = select === "all"
    ? students
    : students.filter((e) => e.course === select);

  let [searchId, setSearchId] = useState();

  let idSearch = students.find((e) => e.id === searchId)

  

  return (
    <>
      <div className="table-container">
        <div className="top-bar">
          <div className="search-center">
            <SearchBox studentId = {(setSearchId)}/>
          </div>
          <div className="dropdown-right">
            <Dropdown selectCourse = {setSelect}/>
          </div>
        </div>

        <div className="card">
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {
                idSearch ?
                <tr>
                  <td>{idSearch.id}</td>
                  <td>{idSearch.name}</td>
                  <td>{idSearch.course}</td>
                </tr>
                :
                filterCourse.map((s, i) => (
                  <tr key={i}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
