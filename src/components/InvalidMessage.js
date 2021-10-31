const InvalidMessage=()=>{
    return (
        <div className=" bg-blend-overlay container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
            <h1 className= "text-xl flex-col bg-purple-700">Invalid Username or age</h1>
            <p>Please enter the correct username and age.</p>
        </div>
    );
};

export default InvalidMessage;