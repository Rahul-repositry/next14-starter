"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  // const [state, formAction] = useFormState(login, undefined);
  // console.log(state);
  // const router = useRouter();
  // useEffect(() => {
  //   console.log(state);
  //   state?.success && router.push("/blog");
  // }, [state?.success, router]);

  const handleSubmit = async (event) => {
    console.log({
      username: event.target.username.value,
      password: event.target.password.value,
    });
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
      });

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));
      // Update state or handle user session based on response
      console.log(data); // Example: set a user token for authentication
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {/* {state?.error} */}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
