import {useEffect, useReducer, useState} from "react";
import {getUser, getUsers} from "./services/API";
import Users from "./components/users/Users";
import {User} from "./components/user/User";
import UserDetails from "./components/user-details/UserDetails";

const initialState = {users: [], user: null};
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {...state, users: action.payload};
        case "ADD_USER":
            return {...state, user: action.payload};
        default :
            return state

    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getUsers().then(data => {
            dispatch({type: "ADD_USERS", payload: data});
        });
    }, []);

//todo do delete user function

    const deleteUser = (id) => {

    };

    const fetchUser = (user) => {
        dispatch({type: "ADD_USER", payload: user});
    };

    return (
        <div>
            <Users users={ state.users } fetchUser={ fetchUser }/>
            <hr/>
            { state.user && <UserDetails deleteUser={ deleteUser } user={ state.user }/> }
        </div>
    );
}

export default App;