import React from 'react'
import { Link } from 'react-router'


const HeaderItem = ({ tag }) => (
    <div className='header-item'>
        <Link to={tag}>{tag.toUpperCase()}</Link>
    </div>
)


export default HeaderItem
