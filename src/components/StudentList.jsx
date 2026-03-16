import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Khacey Lictao", course: "BSCS" },
  { id: 2, name: "Sophia Burgos", course: "BSIT" }
];

function StudentList() {
  return (
    <div>
      {students.map((student) => (
        <div key={student.id} style={styles.card}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
          <Link to={`/student/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px 0"
  }
};

export default StudentList;
