import { useEffect, useState } from "react";
import "./App.css";
import { Hello } from "./Hello";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  // http://numberapi.com/44/trivia

  useFetch("http://numberapi.com/44/trivia");

  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => console.log("render"), [values.password]);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    console.log("mount1");
  }, []);

  useEffect(() => {
    console.log("mount2");
  }, []);

  return (
    <>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
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
