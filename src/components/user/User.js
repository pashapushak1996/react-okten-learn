import {useState} from "react";
import {getPosts} from "../../services/API";
import {Post} from "../post/Post";

export const User = ({user, chooseUser}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [posts, setPosts] = useState([]);

    const getUserPosts = (userId) => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
        getPosts().then(posts => {
            const postsData = [];
            posts.forEach(post => {
                if (post.userId === userId) {
                    postsData.push(post)
                }
            });
            setPosts([...postsData]);
        });
    };

    return (
        <div>
            <span style={ {marginRight: "20px"} }>{ user.id } - { user.name }</span>
            <span>
                  <button onClick={ () => {
                      chooseUser(user.id);
                  } }>Details
            </button>
                <button onClick={ () => {
                    getUserPosts(user.id);
                } }>Posts</button>
            </span>
            { isVisible && posts && posts.map((post) => <Post { ...post }/>) }

        </div>
    );
}

