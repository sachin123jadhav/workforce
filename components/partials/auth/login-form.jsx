import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Checkbox from "@/components/ui/Checkbox";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction, handleLogin } from "./store";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email("Invalid email"),
    password: yup.string(),
  })
  .required();
const LoginForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const router = useRouter();
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(LoginAction(data));
  };
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("isAuth", isAuth);
    if (isAuth.isLoggedIn) {
      router.push("/home");
    }
  });

  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        defaultValue=""
        type="email"
        register={register}
        error={errors?.email}
        placeholder="Email ID"
      />

      <Textinput
        name="password"
        label="passwrod"
        type="password"
        defaultValue=""
        register={register}
        error={errors.password}
        placeholder="Password"
      />

      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
      </div>

      <button className="btn btn-dark block w-full text-center bg-green-800">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
