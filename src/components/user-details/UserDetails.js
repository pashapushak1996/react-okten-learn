export const UserDetails = ({user}) => {

    return (
        <div>
            <h4>{ user.name }</h4>
            <h4>Email: { user.email }</h4>
            <hr/>
        </div>
    );
}

