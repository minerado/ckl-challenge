// separatePosts returns two array of posts: { main_posts, second_posts }
// so we can show them in different sections of the page
export const separatePosts = (posts, index = 3) => {
    return {
        main_posts: posts.slice(0, index),
        second_posts: posts.slice(index, posts.length),
    }
}
