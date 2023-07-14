import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

// const schemaValidation = Yup.object({
//   firstName: Yup.string()
//     .required("Please enter your first name")
//     ,

// });
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be20 characters or less"),
  lastName: Yup.string()
    .required("Please enter your last name")
    .max(10, "Must be20 characters or less"),
  age: Yup.number().positive().integer().required(),
}).required();

// };
const SignUpformHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);

  console.log("onSubmit ~ isValid", isValid);
  const onSubmit = async (values) => {
    if (isValid) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    return response.data;
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const handleSetDemoData = () => {
    setValue("firstName", "sinhdz");
    setValue("lastName", "dz that");
    setValue("email", "sinhdz@gmail.com");
  };
  // console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter lastName"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
        {errors?.lastName && (
          <div className="text-red-500 text-sm">{errors.lastName?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email address</label>

        <MyInput name="email" placeholder="Enter email" control={control} />
        {/* <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        {watchShowAge && (
          <input
            type="checkbox"
            {...register("showAge")}
            placeholder="check vao de!"
          />
        )}
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white rounded-lg ">
          {isSubmitting ? (
            <div className="w-5 h-5 border-4  border-white bottom-4 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <button
        className="bg-green-500 p-5 text-white rounded-lg"
        onClick={handleSetDemoData}
      >
        Demo Data
      </button>
    </form>
  );
};
// controller
// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

// useControleer
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpformHook;
