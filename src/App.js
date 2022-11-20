
import './App.css';
import Navbar from './Navbar';
import Blog from './Blogs';
import {Routes,Route} from "react-router-dom"
import Comment from './Comment'
import SingleBlog from './SingleBlog'
import NewBlog from './NewBlog'

function App() {
  return (
    <div className="App">
  
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Blog/>}/>
    <Route exact path="/newBlog" element={<NewBlog/>}/>
    <Route exact path="/blog/:id" element={<SingleBlog/>}/>
    </Routes>
   

    
      
  </div>

     
   
  );
}

export default App;
