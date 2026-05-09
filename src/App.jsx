
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMark, setBookMark] = useState([])
const [readingCount, setReadingCount] = useState(0)

  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog])
  }
  const handleMarkAsTime = (time,id) =>{
    const newTime = readingCount + time;
    setReadingCount(newTime)
    console.log(id);
    
    handleRemoveFromBookMark(id)
    
  }
  const handleRemoveFromBookMark = (id) =>{
const remainingBookMark = bookMark.filter((book)=> book.id !== id) 
console.log(remainingBookMark);

setBookMark(remainingBookMark)
  }
  // console.log(remainingBookMark);
  
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark} handleMarkAsTime={handleMarkAsTime}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Reading Time : {readingCount}</h2>
          <p>Bookmark Count : {bookMark.length}</p>
          {
            bookMark.map((book, index) => <p key={index} className='border-2 p-2 m-4 rounded-2xl'>{book.title}</p>)
          }
        </div>
      </div>

    </>
  )
}

export default App
