import React from 'react'
import { Link, useParams } from 'react-router-dom'
// path="/post/:id"
// :id => useParams로 전달 받을 것임

const Post = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <div className='PostPage'>
            <article className='post'>
                { post && <>
                    <h2>{ post.title }</h2>
                    <p>{ post.datetime}</p>
                </>}
            </article>
        </div>
    )
}

export default Post