import Comment from "./Comment"
export default function SingleBlog(){
    return (
        <div className="singleB">
        <h2>Men's Mental Health</h2>
        <img className="image" alt="#1" src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"/>
         
         <cite style={{marginTop : "15px"}}>By Diana on 20/11/2022 </cite>
         <div class="post-body">
           <p>
            Improved caution amongst citizens
           </p>
         </div>
      
       <button class=" likes fa fa-heart" > 0</button>
       <div>
        <Comment/>
       </div>
        </div>
        
    )

}