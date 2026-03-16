import { useForm } from "react-hook-form";

function StudentForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert("Student Registered!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>

      <input
        type="text"
        placeholder="Enter Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p style={styles.error}>{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format"
          }
        })}
      />
      {errors.email && <p style={styles.error}>{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Enter Course"
        {...register("course", { required: "Course is required" })}
      />
      {errors.course && <p style={styles.error}>{errors.course.message}</p>}

      <button disabled={!isValid}>
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
