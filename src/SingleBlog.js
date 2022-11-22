import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function SingleBlog({user}){

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
        user_id: user.id,
        
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
      fetch(`https://dees-blogg-app.herokuapp.com/blogs/${SingleBlog.id}`, {
        method:'PATCH', 
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify({
          title: SingleBlog.title,
          blog_id: SingleBlog.id,
          user_id: user.id,
          body: SingleBlog.body,
          image: SingleBlog.image,
          likes: SingleBlog.likes += 1 || 1
        })
     })
     .then(res => res.json())
      .then(data => {
        console.log(data);
          setSingleBlog(data)
        })
     }
   
    return (
        <div className="singleB">
        <h2>{SingleBlog.title}</h2>
        <img className="image" alt="#1" src={SingleBlog.image}/>
         
         <cite style={{marginTop : "15px"}}>By Diana on 20/11/2022 </cite>
         <div className="post-body">
           <p>
           {SingleBlog.body}
           </p>
         </div>
      
       <button onClick={likePost} className=" likes fa fa-heart" > {SingleBlog.likes} </button>
       
       <div>
      <CommentList id={SingleBlog.id} handleComments={handleComments}/>
      <CommentForm  handleComments={handleComments}/>

       </div>
        </div>
        
    )

}

























