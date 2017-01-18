import React from 'react'

import DB from '../db'
import { separatePosts } from '../libs/post_lib'

import Post from './Post'

const renderPost = (post) => (
    <Post
        title={post.title}
        text={post.text}
        image={post.image}
        tag={post.tag}
        author_name={post.user.name}
        author_image={post.user.image}
        key={post.id}
    />
)

const PostList = () => (
    <main>
        <section className='posts-top'>
            {separatePosts(DB).main_posts.map((p, index) => renderPost(p))}
        </section>

        <section className='posts-bottom'>
            {separatePosts(DB).second_posts.map((p, index) => renderPost(p))}
        </section>
    </main>
)


export default PostList
