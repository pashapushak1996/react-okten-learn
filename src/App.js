import {getUser, getUsers} from "./services/API";
import {useEffect, useState} from "react";
import {Users} from "./components/users/Users";
import {UserDetails} from "./components/user-details/UserDetails";

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const chooseUser = (id) => {
        getUser(id).then(data => setUser(data));
    };

    useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []);

    return (
        <div>
            <Users chooseUser={ chooseUser }
                   users={ users }/>
            <hr/>
            { user && <UserDetails user={ user }/> }
        </div>
    );
}

export default App;