import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark, handleMarkAsTime}) => {
    const {cover, title, author, author_img, hashtags, reading_time, id} = blog
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
<div className='flex items-center'>
           <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={author_img} />
  </div>
    </div>
    <h3 className='text-xl font-bold pl-4'>{author}</h3>
</div>
 <div>  
  <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25}/></button>
   </div>
    </div>
    <h2 className="card-title text-2xl">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
<div className='flex font-semibold text-xl'>
        {
hashtags.map((has, index)=><p key={index}>{has}</p>)
      }
</div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsTime(reading_time, id)} className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;