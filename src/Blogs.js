export default function Blog(){
    return (
        <div>
            <ul class="post-grid" >
            <li >
              <h3>post.title</h3>
              <p>post.body[0] | limitTo:70...</p>
              <p class="fa fa-comment push-left">post.comments.length</p>
              <p class="fa fa-heart push-right">post.likes</p>
            </li>
          </ul>
              <h2>post.title</h2>
         
              <cite>by post.author on post.createdOn | date</cite>
              <div class="post-body">
                <p>
                  paragraph
                </p>
              </div>
           
            <button class="fa fa-heart" >post.likes</button>
           
        </div>
    )

}