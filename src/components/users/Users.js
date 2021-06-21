import styles from './Users.module.css';
import {User} from "../user/User";


export const Users = ({users}) => {
    console.log(users);
    return (
        <div className={ styles.wrapper }>
            { users && users.map(user => <User key={ user.id } { ...user }/>) }
        </div>
    )
};