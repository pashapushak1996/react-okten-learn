import {User} from "../user/User";

const Users = ({users, fetchUser}) => {

    return (
        <div>
            { users.map((user) => <User key={ user.id } user={ user } fetchUser={ fetchUser }/>) }
        </div>
    );
}

export default Users;