import { Link } from "react-router-dom";

export default function BlogList(props){
    return (
        <div className="blog">
           
            <ul className="post-grid" >
            <li >
              <h3>{props.title}</h3>
              <p>{props.body}</p>
              <div className="emoji">
                <p><i className="fas fa-comment"></i> {props.comment}</p>
                <p> <i className="fas fa-heart"></i> {props.likes} </p>
              </div>
            </li>
            <Link to={"/blog/" + props.id} style={{width: "150px"}} className="details-btn">Details</Link>
          </ul>

          
        
          

</div>
    )

}