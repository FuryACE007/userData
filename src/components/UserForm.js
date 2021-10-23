import React , {useState} from "react";

const UserForm = () => {
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");

  const usernameInputHandler = (event)=>{
    setEnteredUsername(event.target.value);
  };
  const ageInputHandler = (event)=>{
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length > 0 && enteredAge.trim().length > 0){
      console.log(enteredUsername,enteredAge);
    }
  };

  return (
    <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
      <form onSubmit = {submitHandler}>
        <div>
          <label className="block w-full mb-2 font-bold">Username</label>
          <input className= "w-full p-2 bg-gray-300 border border-transparent rounded-md shadow-md " onChange={usernameInputHandler} type="text" placeholder="Enter username" />
        </div>
        <div className="my-2">
          <label className="block w-full my-2 font-bold">Age (Years)</label>
          <input className= "w-full p-2 bg-gray-300 border border-transparent rounded-md shadow-md " onChange={ageInputHandler} type="number" placeholder="Age" />
        </div>
        <button type = "submit" className ="items-center p-2 px-6 mt-2 text-white transition-all bg-purple-800 rounded-md shadow-lg w-max hover:bg-purple-900 hover:shadow-none">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
