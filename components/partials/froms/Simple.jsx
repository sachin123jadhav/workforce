import React from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValidationSchema = yup
  .object({
    password: yup.string().required("Password is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
  })
  .required();

const Simple = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    //console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">

      <div className="relative">
      <input type="text" id="" className="block px-2.5 pb-1 h-11 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-5 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="" className="z-10 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
  </div>


        <Textinput
          name="email"
          label="email"
          type="email"
          register={register}
          error={errors.email}
        />
        <Textinput
          name="password"
          label="password"
          type="password"
          register={register}
          error={errors.password}
        />

        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark  text-center">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Simple;
