import { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  useEffect(() => console.log("render"), [values.password]);

  return (
    <>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default App;
