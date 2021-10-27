import React , {useState} from "react";

const UserForm = (props) => {
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [isValid, setIsValid] = useState(true);

  const usernameInputHandler = (event)=>{
    setEnteredUsername(event.target.value);
    setIsValid(true);
  };
  const ageInputHandler = (event)=>{
    setEnteredAge(event.target.value);
    setIsValid(true);
  };
  const submitHandler = (event)=>{
    event.preventDefault();

    if(enteredUsername.trim().length > 0 && enteredAge.trim().length > 0){
      // console.log(enteredUsername,enteredAge);
      setIsValid(true);

      const info = {
        username: enteredUsername,
        age: enteredAge
      };
      props.onSubmitInfo(info);
    }else{
      setIsValid(false);
    }
  };

  // Styles
  const labelStyle = {labelClass:"block w-full mb-2 font-bold"};
  const inputStyle = {inputClass:"w-full p-2 bg-gray-300 rounded-md shadow-sm "}

  return (
    <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
      <form onSubmit = {submitHandler}>
        <div>
          <label className= {labelStyle.labelClass} >Username</label>
          <input className= {`${inputStyle.inputClass} ${!isValid ? 'ring-2 ring-red-500 bg-red-200': 'ring ring-transparent bg-gray-300'}`} onChange={usernameInputHandler} type="text" placeholder="Enter username" />
        </div>
        <div className="my-2">
          <label className={labelStyle.labelClass}>Age (Years)</label>
          <input className= {`${inputStyle.inputClass} ${!isValid ? 'ring-2 ring-red-500 bg-red-200': 'ring ring-transparent bg-gray-300'}`} onChange={ageInputHandler} type="number" placeholder="Age" />
        </div>
        <button type = "submit" className ="items-center p-2 px-6 mt-2 text-white transition-all bg-purple-800 rounded-md shadow-lg w-max hover:bg-purple-900 hover:shadow-none">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
