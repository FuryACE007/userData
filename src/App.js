import React, {useState} from "react";

import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

let usersArr = [
  {
    id: 102,
    username: "John",
    age: 20
  },
];

function App() {
  const [nameVal, setNameVal] = useState(""); //we just use this to revaluate the webpage, we dont actually need this variable

  const infoSubmitHandler = (info)=>{
    setNameVal(info.username);
    usersArr.push(info);
  };
  console.log(nameVal);
  return (
    <div className=" bg-gray-900 min-h-screen">
      <p className=" text-lg text-purple-700 text-center uppercase pt-5">User Database</p>
      <UserForm onSubmitInfo = {infoSubmitHandler} />
      <UsersList arr = {usersArr}  />
    </div>
  );
};

export default App;
