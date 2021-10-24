import UsersInfo from "./UserInfo";

const UsersList = (props) =>{
    return(
        <div className="container flex flex-col w-1/2 mx-auto bg-white rounded-md p-5 mt-6">
            <UsersInfo userName = {props.name} userAge = {props.age} />
        </div>
    );

};

export default UsersList;