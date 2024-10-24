import React from 'react'
import BlogCard from '../../components/BlogCard'
import PageHeader from '../../components/PageHeader'

function Blogs() {
  return (
    <div>
      <PageHeader title={"Blogs"} />
      <div className='py-8 md:py-10 w-[95%] mx-auto'>
        <div className='pt-6 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default Blogs