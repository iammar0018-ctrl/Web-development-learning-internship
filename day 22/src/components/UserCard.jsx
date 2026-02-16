function UserCard(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Country: {props.country}</p>
        </div>
    );
}

export default UserCard;
