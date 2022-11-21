import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blogs';
import {Routes,Route,Navigate, useNavigate} from "react-router-dom"
import SingleBlog from './SingleBlog'
import NewBlog from './NewBlog'
import Login from './Login';
import Register from './Register';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [blogs, setBlogs] = useState([])

  const url = "https://dees-blogg-app.herokuapp.com/blogs"


  useEffect(() => {
    const user_id = sessionStorage.getItem('user_id');
    fetch(`https://dees-blogg-app.herokuapp.com/users/${user_id}`)
    .then(res => res.json())
     .then(data => {
      setUser(data)
      setIsLoggedIn(true)
     })

     fetch(url)
     .then(res => res.json())
     .then(data => setBlogs(data))   

  }, [])

  function getUserData(profile){
    setIsLoggedIn(true)
    setUser(profile)
  }

  function logout(){
    sessionStorage.clear();
    setIsLoggedIn(false)
    setUser({})
    navigate("/login")
  }

  

  function addBlog(blog){
    console.log(blog);
    setBlogs([...blogs, blog])
  }

  return (
    <div className="App">
  
    <Navbar isLoggedIn={isLoggedIn} user={user} logout={logout}/>
    
    <Routes>
    <Route path="*" element={
      !isLoggedIn ? <Navigate to="/login" /> : <Navigate to="/home" /> } />
    <Route exact path="/home" element={<Blog blogs={blogs}/>} />
    <Route exact path="/newBlog" element={<NewBlog addBlog={addBlog}/>} />
    <Route exact path="/blog/:id" element={<SingleBlog user={user.id}/>}/>
    <Route exact path="/login" element={<Login isLoggedIn={isLoggedIn} getUserData={getUserData} />} />
    <Route exact path="/register" element={<Register isLoggedIn={isLoggedIn} getUserData={getUserData} />} />
    </Routes>
   

    
      
  </div>

     
   
  );
}

export default App;
