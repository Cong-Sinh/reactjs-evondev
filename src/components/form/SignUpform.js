import { useFormik } from "formik";
import { values } from "lodash";
import React from "react";
import * as Yup from "yup";

// const validate = (values) => {
//   const error = {};
//   if (!values.firstName) {
//     error.firstName = "required";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "must be at least 20 characters";
//   }

//   if (!values.lastName) {
//     error.lastName = "hihi";
//   } else if (values.lastName.length > 20) {
//     error.lastName = "must be at least 20 characters";
//   }
//   return error;
// };
const SignUpform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "must be at least 20 characters")
        .required("required"),
      lastName: Yup.string()
        .max(10, "must be at least 10")
        .required("required"),
    }),
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
          placeholder="Enter firstName"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("firstName")}
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
