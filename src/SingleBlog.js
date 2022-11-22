import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function SingleBlog(){

  const [SingleBlog, setSingleBlog] = useState({})
  
  const {id} = useParams()
    useEffect(() => {
        fetch(`https://dees-blogg-app.herokuapp.com/blogs/${id}`)
        .then(res => res.json())
        .then(data => setSingleBlog(data))

        
    }, [])

     function handleComments(comment){
      const commentValue = {
        comment: comment,
        blog_id: SingleBlog.id,
        user_id: 1,
        
      }
      fetch("https://dees-blogg-app.herokuapp.com/comments", {
      method:'POST', 
      headers:{'content-type' : 'application/json'},
      body: JSON.stringify(commentValue)
  })
      .then(res => res.json())
      .then(data => {
        window.location.reload()
        alert("Successfully posted your comment")
      })
  
     }

     function likePost(){
      fetch("https://dees-blogg-app.herokuapp.com/likes", {
      method:'POST', 
      headers:{'content-type' : 'application/json'},
      body: JSON.stringify(SingleBlog)
     }
   
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
      
       <button onClick={likePost} class=" likes fa fa-heart" > {SingleBlog.likes} </button>
       
       <div>
      <CommentList id={SingleBlog.id} handleComments={handleComments}/>
      <CommentForm  handleComments={handleComments}/>

       </div>
        </div>
        
    )

}