import React from 'react'

import Post from './Post'


const renderPost = (post) => (
    <Post
        title={post.title}
        text={post.text}
        image={post.image}
        tag={post.tag.name}
        author_name={post.user.name}
        author_image={post.user.image}
        key={post.id}
    />
)

const PostList = ({
    main_posts,
    second_posts,
}) => (
    <main>
        <section className='posts-top'>
            {main_posts.map((p, index) => renderPost(p))}
        </section>

        <section className='posts-bottom'>
            {second_posts.map((p, index) => renderPost(p))}
        </section>
    </main>
)


export default PostList
