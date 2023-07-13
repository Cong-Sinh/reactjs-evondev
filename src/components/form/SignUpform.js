import { useFormik } from "formik";
import { values } from "lodash";
import React from "react";

const validate = (values) => {
  const error = {};
  if (!values.firstName) {
    error.firstName = "required";
  } else if (values.firstName.length > 20) {
    error.firstName = "must be at least 20 characters";
  }

  if (!values.lastName) {
    error.lastName = "hihi";
  } else if (values.lastName.length > 20) {
    error.lastName = "must be at least 20 characters";
  }
  return error;
};
const SignUpform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">firstName</label>
        <input
          type=""
          id="firstName"
          placeholder="Enter firstName"
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">lastName</label>
        <input
          type=""
          id="lastName"
          placeholder="Enter lastName"
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white rounded-lg ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpform;
