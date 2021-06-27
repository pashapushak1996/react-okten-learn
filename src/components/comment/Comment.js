export const Comment = ({name, email, body}) => {
    return (
        <div>
            <div>
                <b>Title: </b>
                <span>{ name }</span>
            </div>
            <div>
                <b>Email: </b>
                <span>{ email }</span>
            </div>
            <div>
                <b>Text: </b>
                <span>{ body }</span>
            </div>
            <hr/>
        </div>
    );
}

