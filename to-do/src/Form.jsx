// import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  }

  return errors;
};

function Form() {
  // let [formData, setFormData] = useState({
  //   fullName: "",
  //   userName: "",
  //   password: "",
  // });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleChange = (e) => {
  //   setFormData((currData) => {
  //     return { ...currData, [e.target.name]: e.target.value };
  //   });
  // };
  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     fullName: "",
  //     userName: "",
  //     password: "",
  //   });
  // };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Enter fullname"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          name="fullName"
          id="fullName"
        />
        {formik.errors.fullName ? (
          <p style={{ color: "red" }}>{formik.errors.fullName}</p>
        ) : null}
        <label htmlFor="userName">User Name</label>
        <input
          placeholder="Enter usename"
          type="text"
          value={formik.values.userName}
          onChange={formik.handleChange}
          name="userName"
          id="userName"
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
