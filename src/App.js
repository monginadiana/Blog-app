import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blogs';
import {Routes,Route} from "react-router-dom"
import SingleBlog from './SingleBlog'
import NewBlog from './NewBlog'

function App() {


  const [blogs, setBlogs] = useState([])

  const url = "http://localhost:9292/blogs"


  useEffect(() => {
    

    fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))   
  }, [])

  function addBlog(blog){
    console.log(blog);
    setBlogs([...blogs, blog])
  }

  return (
    <div className="App">
  
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Blog blog={blogs}/>} />
    <Route exact path="/newBlog" element={<NewBlog addBlog={addBlog}/>} />
    <Route exact path="/blog/:id" element={<SingleBlog/>}/>
    </Routes>
   

    
      
  </div>

     
   
  );
}

export default App;
