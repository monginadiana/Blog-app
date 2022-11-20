
export default function Comment(){
    return(
        <div>
            <h3>Comments</h3>
                <ul>
                  <li >
                    "Comment body"
                    <cite>- <b>Diana</b></cite>
                  </li>
                </ul>
                <form name="commentForm">
                  <h4>Add Comment</h4>
                  <textarea cols="30" rows="10" required></textarea>
                  <label for="">by:</label>
                  <input type="text"  required placeholder="Name" />
                  <input type="submit" value="Submit" />
                </form>
        </div>
    )
}