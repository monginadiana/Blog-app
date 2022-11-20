import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blogs';
import {Routes,Route} from "react-router-dom"
import SingleBlog from './SingleBlog'
import NewBlog from './NewBlog'

function App() {


  const [blogs, setBlogs] = useState([])

  const url = "https://dees-blogg-app.herokuapp.com/blogs"


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
    <Route exact path="/" element={<Blog blogs={blogs}/>} />
    <Route exact path="/newBlog" element={<NewBlog addBlog={addBlog}/>} />
    <Route exact path="/blog/:id" element={<SingleBlog/>}/>
    </Routes>
   

    
      
  </div>

     
   
  );
}

export default App;
