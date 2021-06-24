import {Post} from "../post/Post";

export const Posts = ({posts}) => {
    return (
        <div>
            { posts.map((post) => <Post key={ post.id } post={ post }/>) }
        </div>
    );
}

