export default function NewBlog(){
    return(
        <div className="post new">
            <h2>Add New Post</h2>
            <form name="postForm"  novalidate>
              <h4>Title</h4>
              <input type="text" />
              <h4>Body</h4>
              <textarea ng-list="/\n/" rows="10"></textarea>
              <br/>
              <label for="">Featured Image URL</label>
              <br/><br/>
              <input type="text"  placeholder="http://placekitten.com/g/2000/600" />
              <br/>
              <label for="">by:</label>
              <br/><br/>
              <input type="text"  placeholder="Author Name" required />
              <br/>

              <input type="submit" value="Submit" />
            </form>
          </div>
    )
}