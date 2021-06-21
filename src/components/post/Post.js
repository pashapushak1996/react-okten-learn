import styles from './Post.module.css';
import {useState} from "react";


export const Post = ({post}) => {


    return (
        <div className={ styles.item }>
            <div>
                <b>Title: </b>
                <span>{ post.title }</span>
            </div>
            <div>
                <b>Body: </b>
                <span>{ post.body }</span>
            </div>

        </div>
    );
}

