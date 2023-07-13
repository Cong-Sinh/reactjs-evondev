import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUpformV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "must be at least 20 characters")
          .required("required"),
        lastName: Yup.string()
          .max(10, "must be at least 10")
          .required("required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">firstName</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter firstName"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">lastName</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter lastName"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button className="w-full p-4 bg-blue-600 text-white rounded-lg ">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpformV2;
