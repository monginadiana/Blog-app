import { Link } from "react-router-dom"

export default function Navbar({user, isLoggedIn, logout}){
    return (
    <div className="topbar">
      <div className="container navbar">
      <li><Link to="/"><h1 className="push-left" >Mongina's Blog App</h1></Link></li>
          
            <nav role="navigation" className="push-right">
              <ul>{
                isLoggedIn?
                <ul>
                  <li>< Link to="/newBlog" >Add New Post</Link></li>
                  <li>< Link to="/newBlog" >{user.username}</Link></li>
                  <button onClick={logout}>logout</button>
                </ul>
                :
                <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>

                }
                
               
              </ul>
            </nav>
        
      </div>
    </div>

    )
}

