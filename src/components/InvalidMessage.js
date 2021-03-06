const InvalidMessage = (props) => {
    const buttonClickHandler =()=>{ //not working
        props.onClickOkay(true);
        // console.log(props.dataValidity);

    };
    const valid= props.dataValidity;
    // "fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  return (
    <div className={`${"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"} ${!valid ? "": "hidden"}`}>
      <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md mt-60 shadow-xl">
        <h1 className="text-xl text-gray-100 flex-col bg-purple-900 p-3 rounded-t-md">
          Invalid Username or Age
        </h1>
        <p className="p-6 pl-3 text-lg">Please enter the correct username and age.</p>
        <button type= "button" onClick={buttonClickHandler} className="items-center ml-3 mb-4 px-5 py-2 text-white transition-all bg-purple-800 rounded-md shadow-lg w-max hover:bg-purple-900 hover:shadow-none" >Okay</button> 
      </div>
     </div>
  );
};

export default InvalidMessage;
