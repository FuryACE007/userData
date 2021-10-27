import UsersInfo from "./UserInfo";

const UsersList = (props) => {
  console.log("User List");
  console.log(props.name , props.age,props.arr);
  return (
    <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
      <ul>
        {props.arr.map((user) => (
          <UsersInfo key={Math.random()} userName={user.username} userAge={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
