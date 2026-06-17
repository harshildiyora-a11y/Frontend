import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadStudents = async () => {
    const res = await axios.get(
      "http://localhost:3000/students"
    );
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = async () => {
    await axios.post(
      "http://localhost:3000/students",
      {
        name,
        email,
      }
    );

    setName("");
    setEmail("");
    loadStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(
      `http://localhost:3000/students/${id}`
    );

    loadStudents();
  };

  return (
    <div>
      <h2>Student Management</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      {students.map((student) => (
        <div key={student.Id}>
          <h4>{student.Name}</h4>
          <p>{student.Email}</p>

          <button
            onClick={() =>
              deleteStudent(student.Id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Student;