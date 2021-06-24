const UserDetails = ({user, viewPosts}) => {
    return (
        <div>
            <h2>{ user.name }</h2>
            <b>Email: { user.email }</b>
            <button onClick={ () => viewPosts(user.posts) }>Posts
            </button>
        </div>
    );
}

export default UserDetails;