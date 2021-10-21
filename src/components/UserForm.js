const UserForm = () => {
  return (
    <div className="container flex flex-col w-1/3 mx-auto bg-white rounded-md p-10 mt-6">
      <form className="">
        <div>
          <label className="block w-full mb-2 font-bold">Username</label>
          <input className= "w-full p-2 bg-gray-300 border border-transparent rounded-md shadow-md " type="text" placeholder="Enter username" />
        </div>
        <div className="my-4">
          <label className="block w-full my-2 font-bold">Age (Years)</label>
          <input className= "w-full p-2 bg-gray-300 border border-transparent rounded-md shadow-md " type="number" placeholder="Age" />
        </div>
        <button type = "submit" className ="items-center p-2 px-6 mt-2 text-white transition-all bg-purple-700 rounded-md shadow-lg w-max hover:bg-purple-800 hover:shadow-none">Add</button>
      </form>
    </div>
  );
};

export default UserForm;
