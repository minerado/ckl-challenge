import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { filterPosts, separatePosts } from '../libs/post_lib'
import db from '../db'

import PostList from './PostList'


const mapStateToProps = (state, { params }) => ({
    ...separatePosts(filterPosts(db, params.filter)),
})

const PostListVisible = withRouter(connect(
    mapStateToProps,
    null,
)(PostList))


export default PostListVisible
