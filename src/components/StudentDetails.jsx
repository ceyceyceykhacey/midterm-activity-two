import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <div style={{padding:"20px"}}>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
      <p>This page shows the details of a selected student.</p>
    </div>
  );
}

export default StudentDetails;
