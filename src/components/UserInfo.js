const UsersInfo = (props) =>{
    console.log("userinfo", props.age);
    
    return(
        <li>
            <div className ="container flex flex-col p-3 border-2 border-purple-300 rounded-md shadow-md mt-2">
                {props.userName} (Age {props.userAge})
            </div>
        </li>
    );
};

export default UsersInfo;