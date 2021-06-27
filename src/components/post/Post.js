import {Comments} from "../comments/Comments";
import {useState} from "react";
import {getComments} from "../../services/API";

export const Post = ({title, body, id}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [comments, setComments] = useState([]);

    const getPostComments = async (postId) => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
        const comments = [];
        const data = await getComments();
        data.forEach((comment) => {
            if (comment.postId === postId) {
                comments.push(comment);
            }
        });
        setComments(comments);
    };

    return (
        <div>
            <div>
                <b>№:</b>
                <span>{ id } </span>
            </div>
            <div>
                <b>Title: </b>
                <span>{ title }</span>
            </div>
            <div>
                <b>Body: </b>
                <span>{ body }</span>
            </div>
            <button onClick={ () => {
                getPostComments(id);
            } }>Comments
            </button>
            { isVisible && comments && <Comments postId={ id } comments={ comments }/> }
            <hr/>
        </div>
    );
}

