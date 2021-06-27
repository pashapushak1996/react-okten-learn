import {Comment} from "../comment/Comment";

export const Comments = ({comments}) => {
    return (
        <div>
            { comments && comments.map((comment) => <Comment { ...comment }/>) }
        </div>
    );
}

