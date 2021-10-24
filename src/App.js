import React, {useState} from "react";

import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";

function App() {
  const [nameVal, setNameVal] = useState("");
   const [ageVal , setAgeVal] = useState("");

  const infoSubmitHandler = (info)=>{
    setNameVal(info.username);
    setAgeVal(info.age);
  };
  return (
    <div className=" bg-black min-h-screen">
      <p className=" text-lg text-purple-700 text-center uppercase pt-5">User Database</p>
      <UserForm onSubmitInfo = {infoSubmitHandler} />
      <UserInfo name= {nameVal} age = {ageVal} />
    </div>
  );
};

export default App;
