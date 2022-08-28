import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ postSearch, setPostSearch }) => {
    return (
        <nav className='Nav'>
            <form className='searchForm'
                  onSubmit={ e => e.preventDefault() }
            >
                <label htmlFor="search">Search Posts</label>
                <input type="text"
                       id="search"
                       placeholder='개설 정보 검색'
                       autoComplete='off'
                       value={ postSearch }
                       onChange={ e => setPostSearch(e.target.value) }
                />
            </form>
            <ul>
                <li><Link to="/">개설정보</Link></li>
                <li><Link to="/newpost">문의하기</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav