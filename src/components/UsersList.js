import UsersInfo from "./UserInfo";

const UsersList = (props) => {
  return (
    <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
      <ul>
        {props.arr.map((user) => (
          <UsersInfo key={Math.random()} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
