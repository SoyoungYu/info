import React from 'react'
import { Link } from 'react-router-dom'
// a 링크 대신 Link 사용 => route된 링크로 이동하도록 함

const Home = ({ posts }) => {
    return (
        <div>
            <h2>Home</h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={ post.id }>
                            <Link to={`/post/${post.id}`}>{ post.title }</Link>
                            { post.body }
                            { post.datetime }
                        </div>
                    ))
                ) : (
                    <p>내용을 찾을 수 없습니다.</p>
                )
            }
        </div>
    )
}

export default Home