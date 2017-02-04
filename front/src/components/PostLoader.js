import React from 'react'


const PostLoader = () => (
    <div className='post-loader-wrapper a-scale-and-fade-in'>
        <div className='post-loader a-background-loading'>
            <div className='post-loader__tag'></div>
            <div className='post-loader-div--small'></div>
            <div className='post-loader__image'></div>
            <div className='post-loader-div--large'></div>
            <div className='post-loader__title'></div>
            <div className='post-loader-div--small'></div>
            <div className='post-loader__title post-loader__title--sub'></div>
            <div className='post-loader-div--large'></div>
            <div className='post-loader__author clearfix'>
                <div className='post-loader__author-name-wrapper'>
                    <div className='post-loader-div--medium'></div>
                    <div className='post-loader__author-name'>
                        <div className='post-loader__author-name-inner'></div>
                    </div>
                    <div className='post-loader-div--medium'></div>
                </div>
            </div>
            <div className='post-loader-div--large'></div>    
            <div className='post-loader__content'>
                <div className='post-loader__content-row'></div>
                <div className='post-loader-div--small'></div>
                <div className='post-loader__content-row'></div>
                <div className='post-loader-div--small'></div>
                <div className='post-loader__content-row'></div>
                <div className='post-loader-div--small'></div>
                <div className='post-loader__content-row'></div>
                <div className='post-loader-div--small'></div>
                <div className='post-loader__content-row'></div>
            </div>
        </div>
    </div>
)


export default PostLoader
