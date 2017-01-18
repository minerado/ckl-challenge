import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { separatePosts } from '../libs/post_lib'
import { fetchPosts } from '../actions'

import PostList from './PostList'
import PostLoaderList from './PostLoaderList'


class PostListVisible extends Component {
    componentDidMount () {
        this.fetchData()
    }

    componentDidUpdate (prev_props) {
        if (this.props.filter !== prev_props.filter) {
            this.fetchData()
        }
    }

    fetchData () {
        this.props.fetchPosts(this.props.filter)
    }
    
    render () {
        if (this.props.is_fetching) return <PostLoaderList />

        return <PostList {...this.props} />
    }
}

const mapStateToProps = (state, { params }) => ({
    ...separatePosts(state.posts),
    filter: params.filter,
    is_fetching: state.is_fetching,
})

PostListVisible = withRouter(connect(
    mapStateToProps,
    { fetchPosts },
)(PostListVisible))


export default PostListVisible
