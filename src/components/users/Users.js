import {User} from "../user/User";

export const Users = ({users, chooseUser}) => {

    return (
        <div>
            { users && users.map((user) => <User
                key={ user.id }
                chooseUser={ chooseUser }
                user={ user }
            />) }
        </div>
    );
}

