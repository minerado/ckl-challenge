import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { separatePosts } from '../libs/post_lib'
import db from '../db'

import PostList from './PostList'


const mapStateToProps = (state, { params }) => {
    const visible_posts = db.filter((post) => post.tag.toLowerCase() === params.filter.toLowerCase())

    return {
        ...separatePosts(visible_posts),
    }
}

const PostListVisible = withRouter(connect(
    mapStateToProps,
    null,
)(PostList))


export default PostListVisible
