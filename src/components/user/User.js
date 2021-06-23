export const User = ({user, fetchUser}) => {
    return (
        <div>
            <b style={ {marginRight: '10px'} }>{ user.id } - { user.name }</b>
            <button onClick={ () => {
                fetchUser(user);
            } }>Show more details
            </button>
        </div>
    );
}

