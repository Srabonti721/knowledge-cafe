import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookMark}) => {

    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data)
        )
    },[])

    // console.log(blogs);
    
    return (
        <div>
      <h1>Total :{blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2 gap-4">
        {
            blogs.map(blog=><Blog 
                key={blog.id}
                handleBookMark={handleBookMark}
                 blog={blog}></Blog>)
        }
      </div>
        </div>
    );
};

export default Blogs;