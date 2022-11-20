import { Link } from "react-router-dom"

export default function Navbar(){
    return (
    <div class="topbar">
      <div class="container navbar">
            <h1 class="push-left">Mongina's Blog App</h1>
          
            <nav role="navigation" class="push-right">
              <ul>
                <li><Link to="/">See All Posts</Link></li>
                <li>< Link to="/newBlog" >Add New Post</Link></li>
              </ul>
            </nav>
        
      </div>
    </div>

    )
}

