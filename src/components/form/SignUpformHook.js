import { values } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
// };
const SignUpformHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = values;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          placeholder="Enter firstName"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName", { required: true, maxLength: 10 })}
        />
        {errors?.firstName?.type === "required" && (
          <div className="text-red-500 text-sm">hihihi</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">mot con vit</div>
        )}
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
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white rounded-lg ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpformHook;
