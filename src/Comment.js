
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
                  <br/>
                  <label for="">by:</label>

                  <br/><br/>
                  <input type="text"  required placeholder="Name" />
                  <br/>
                  <input type="submit" value="Submit" />
                </form>
        </div>
    )
}