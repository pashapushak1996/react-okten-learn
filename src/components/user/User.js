import styles from './User.module.css';
import {Post} from "../post/Post";
import {useState} from "react";

export const User = (props) => {
    const [show, setState] = useState(true);
    const toggleShow = () => {
        show ? setState(false) : setState(true);

    };

    const {address, company, email, posts, name, phone, username, website} = props;

    return (
        <div className={ styles.item }>
            <h2>Name: { name }</h2>
            <div>
                <div>
                    <b>Username: </b>
                    <span>{ username }</span>
                </div>
                <div>
                    <b>Email: </b>
                    <span>{ email }</span>
                </div>
                <div>
                    <b>Website: </b>
                    <span>{ website }</span>
                </div>
                <div>
                    <b>Phone: </b>
                    <span>{ phone }</span>
                </div>
            </div>
            <div>
                <div>
                    <h3>Address:</h3>
                    {
                        Object.keys(address).map((item) => <div>
                                { item !== "geo" ? <b>{ item }: </b> : null }
                                { typeof address[item] !== 'object' ? <span>{ address[item] }</span> : null }
                            </div>
                        )
                    }
                </div>
                <div>
                    <h3>Company:</h3>
                    {
                        Object.keys(company).map((item) => <div>
                                <b>{ item }: </b>
                                <span>{ company[item] }</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <h3>My posts: </h3>
                <button onClick={ () => toggleShow() }>Show/Hide
                </button>
                <div className={ `${ show ? styles.active : styles.hide }` }>
                    { posts.map((post) => <Post post={ post }/>) }
                </div>
            </div>
        </div>
    );
}

