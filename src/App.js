import {useEffect, useReducer, useState} from "react";
import {getPosts, getUsers} from "./services/API";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";
import {Posts} from "./components/posts/Posts";

const initialState = {users: [], user: null, posts: []};
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {...state, users: action.payload};
        case "ADD_USER":
            return {...state, user: action.payload};
        default :
            return state

    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [userPosts, setUserPosts] = useState([]);

    const fetchData = () => {
        Promise.all([getUsers(), getPosts()]).then(([users, posts]) => {
            const usersWithPosts = users.map((user) => {
                user.posts = [];
                posts.forEach((post) => {
                    if (user.id === post.userId) {
                        user.posts.push(post);
                    }
                });
                return user;
            });
            console.log(usersWithPosts);
            dispatch({type: "ADD_USERS", payload: usersWithPosts});
        });
    }
    useEffect(() => {
        fetchData();
    }, []);


    const fetchUser = (user) => {
        dispatch({type: "ADD_USER", payload: user});
    };

    return (
        <div>
            <Users users={ state.users } fetchUser={ fetchUser }/>
            <hr/>
            { state.user && <UserDetails viewPosts={ setUserPosts } user={ state.user }/> }
            { userPosts && <Posts posts={ userPosts }/> }
        </div>
    );
}

export default App;