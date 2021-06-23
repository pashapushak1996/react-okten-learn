const UserDetails = ({user, deleteUser}) => {
    return (
        <div>
            <h2>{ user.name }</h2>
            <b>Email: { user.email }</b>
            <button onClick={ () => deleteUser(user.id) }>Delete</button>
        </div>
    );
}

export default UserDetails;