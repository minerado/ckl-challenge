import React from 'react'


const Post = ({
    author_image,
    author_name,
    image_url,
    tag,
    text,
    title,
}) => (
    <article className='post'>
        <div className='post-tag post-tag-{tag.toLowerCase()}'>
            {tag.toUpperCase()}
        </div>

        <div className='post-image'
             style={{
                 backgroundImage: `url("${image}")`,
             }}
        />

        <div className="post-title">
            {title}
        </div>

        <div className="post-author">
            <div className="post-author__image"
                 style={{
                     backgroundImage: `url("${author_image}")`
                 }}
            />

            <div className="post-author__name">
                by {author_name}
            </div>
        </div>

        <div className="post-content line-clamp-8">
            {text}
        </div>
    </article>
)


export default Post
