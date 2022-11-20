import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import Comment from "./Comment"
export default function SingleBlog(){

  const [SingleBlog, setSingleBlog] = useState({})
  const {id} = useParams()
    useEffect(() => {
        fetch(`https://dees-blogg-app.herokuapp.com/blogs/${id}`)
        .then(res => res.json())
        .then(data => setSingleBlog(data))
    }, [])
    return (
        <div className="singleB">
        <h2>{SingleBlog.title}</h2>
        <img className="image" alt="#1" src={SingleBlog.image}/>
         
         <cite style={{marginTop : "15px"}}>By Diana on 20/11/2022 </cite>
         <div class="post-body">
           <p>
           {SingleBlog.body}
           </p>
         </div>
      
       <button class=" likes fa fa-heart" > {SingleBlog.likes} </button>
       <div>
        <Comment/>
       </div>
        </div>
        
    )

}