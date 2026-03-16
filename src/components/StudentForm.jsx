import { useState } from "react";

function StudentForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {

    let newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!course) {
      newErrors.course = "Course is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Student Registered!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {errors.name && <p style={styles.error}>{errors.name}</p>}

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {errors.email && <p style={styles.error}>{errors.email}</p>}

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      {errors.course && <p style={styles.error}>{errors.course}</p>}

      <button disabled={!name || !email || !course}>
        Submit
      </button>

    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px"
  },
  error: {
    color: "red",
    fontSize: "12px"
  }
};

export default StudentForm;
