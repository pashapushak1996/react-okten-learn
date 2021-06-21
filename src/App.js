import './App.css';
import {Users} from "./components/users/Users";
import {useEffect, useState} from "react";


function App() {

    const [users, setUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com';

    const fetchUsers = async () => {
        const res = await fetch(`${ url }/users`);
        const json = await res.json();
        return json;
    };

    const fetchPosts = async () => {
        const res = await fetch(`${ url }/posts`);
        const json = await res.json();
        return json;
    }

    const userWithPosts = async () => {
        const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);

        const usersWithPosts = users.reduce((acc, curr) => {
            curr.posts = []
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                if (post.userId === curr.id) {
                    curr.posts.push(post)
                }
            }
            acc.push(curr)
            return acc
        }, []);

        setUsers(usersWithPosts);
    }


    useEffect(() => {
        userWithPosts();
    }, []);

    return (
        <div>
            <Users users={ users }/>
        </div>
    );
}

export default App;
