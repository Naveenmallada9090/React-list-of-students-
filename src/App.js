import React from "react";

function App() {
  // Updated list of students
  const students = [
    { id: 1, name: "Naveen" },
    { id: 2, name: "Rohan" },
    { id: 3, name: "Manikanta" },
    { id: 4, name: "Harsha Vardhan" }
  
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student List</h1>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li 
            key={student.id} 
            style={{ margin: "8px", fontSize: "18px", color: "blue" }}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
