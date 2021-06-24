export const Post = ({post: {title, body, id}}) => {
    return (
        <div>
            <h2>{ id } - Title: { title }</h2>
            <div>
                <b>Body: </b>
                <p>{ body }</p>
            </div>
        </div>
    );
}

