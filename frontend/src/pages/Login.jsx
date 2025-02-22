import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <hr className="border-none h-[2px] w-8 bg-gray-800" />
        <h1 className="prata-regular text-3xl">{currentState}</h1>
        <hr className="border-none h-[2px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <div className="w-full">
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
            placeholder="Name"
            required
          />
        </div>
      )}

      <div className="w-full">
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
          placeholder="Email"
          required
        />
      </div>

      <div className="w-full">
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
          placeholder="Password"
          required
        />
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        <p
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
          }
          className="cursor-pointer"
        >
          {currentState === "Login" ? "Create account" : "Login"}
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
