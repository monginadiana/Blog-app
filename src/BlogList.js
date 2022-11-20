export default function BlogList(props){
    return (
        <div class="blog">
            <ul class="post-grid" >
            <li >
              <h3>{props.title}</h3>
              <p>{props.body}</p>
              <div class="emoji">
                <p><i class="fas fa-comment"></i> {props.comment}</p>
                <p> <i class="fas fa-heart"></i> {props.likes} </p>
              </div>
            </li>
          </ul>
        

</div>
    )

}