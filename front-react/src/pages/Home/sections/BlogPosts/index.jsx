import React from 'react'
import BlogCard from '../../../../components/BlogCard'
import Title from '../../../../components/Title'

function BlogPosts() {
    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <Title title={"BLOG POSTS"} />
            <div className='pt-6 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogPosts