import React from 'react'

const NewPost = ({ handleSubmit, postTitle, postBody, setPostTitle, setPostBody }) => {
    return (
        <div>
            <h2>문의하기 : NewPost</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="postTitle">제목 : </label>
                <input type="text" 
                       id="postTitle"
                       required
                       autoComplete='off'
                       onChange={ e => setPostTitle(e.target.value) }
                       value={ postTitle }
                />
                <label htmlFor="postBody">내용 : </label>
                <textarea id="postBody"
                          required
                          onChange={ e => setPostBody(e.target.value) }
                          value={ postBody }
                ></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewPost