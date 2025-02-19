import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
      date: "",
      color: "",
      file: "",
      checkbox: false,
      radio: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      age: Yup.number()
        .positive("Must be positive")
        .integer("Must be integer")
        .required("Required"),
      gender: Yup.string().required("Required"),
      date: Yup.date().required("Required"),
      color: Yup.string().required("Required"),
      file: Yup.mixed().required("Required"),
      checkbox: Yup.boolean().oneOf([true], "Must be checked"),
      radio: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      navigate("/response", { state: { formData: values } });
    },
  });

  return (
    <div className="p-4">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Repeat for other fields */}

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={formik.handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
