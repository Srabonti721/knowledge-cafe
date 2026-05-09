
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMark, setBookMark] = useState([])
  const handleBookMark = (blog) => {
    // console.log(blog);
    setBookMark([...bookMark, blog])

  }
  console.log(bookMark);
  
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Reading Time : 0</h2>
          <p>Bookmark Count : 0</p>
          {
            bookMark.map(book => <p className='border-2 p-2 m-4 rounded-2xl'>{book.title}</p>)
          }
        </div>
      </div>

    </>
  )
}

export default App
