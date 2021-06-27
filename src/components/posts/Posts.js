import {Post} from "../post/Post";

export const Posts = ({posts, getPostComments, comments}) => {
    return (
        <div>
            { posts.map((post) =>
                <Post comments={ comments } getPostComments={ getPostComments } key={ post.id } { ...post }/>)
            }
        </div>
    );
}

