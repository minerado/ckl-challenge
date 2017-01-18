import React, { Component } from 'react'
import { connect } from 'react-redux'

import { separatePosts } from '../libs/post_lib'
import db from '../db'

import PostList from './PostList'


class PostListVisible extends Component {
    render () {
        return (
            <PostList
                {...this.props}
            />
        )
    }
}

const mapStateToProps = () => ({
    ...separatePosts(db)
})

PostListVisible = connect(
    mapStateToProps,
    null,
)(PostListVisible)


export default PostListVisible
