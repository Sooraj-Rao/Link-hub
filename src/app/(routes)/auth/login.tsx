"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useRef } from "react";

const Login = () => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const email = mailRef?.current?.value;
    const password = passwordRef?.current?.value;
    try {
      const res = await axios.post("/api/login", { email, password });
      const { error, message } = res.data;
      if(error){
        console.log(message);
      }else{
        router.push('/admin')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="">
        <div className="container flex items-center justify-center min-h-[calc(100vh-100px)]  px-6 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md text-center dark:shadow-none border shadow-[7px_7px_20px_-4px] rounded-xl p-6 shadow-black"
          >
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 text-center capitalize sm:text-3xl dark:text-white">
              Login
            </h1>
            <h3 className=" font-light text-center dark:text-slate-300 text-slate-800 mt-2">
              Hey buddy, Welcome back 👋
            </h3>
            <div className="relative flex items-center justify-center mt-8 text-center bg ">
              <span className="absolute"></span>

              <Input
                ref={mailRef}
                type="email"
                placeholder="Email"
                className="w-80 border-slate-400 dark:border-slate-700"
              />
            </div>

            <div className="relative flex items-center mt-4 justify-center ">
              <span className="absolute"></span>

              <Input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-80 border-slate-400 dark:border-slate-700"
              />
            </div>

            <div className="mt-6 text-center">
              <Button className=" ">Login </Button>

              <p className="my-4 text-center text-gray-600 dark:text-gray-400">
                or
              </p>

              <Button className="  bg-transparent dark:text-white text-slate-600 border dark:border-slate-800 border-slate-300  hover:dark:bg-slate-900 hover:bg-slate-200">
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Login with Google</span>
              </Button>

              <div className="mt-6 text-center flex  justify-center items-center">
                <h3>Dont have an account? </h3>
                <Link
                  href="/auth/signup"
                  className="text-sm text-blue-500 ml-2 hover:underline dark:text-blue-400"
                >
                  Register now!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
