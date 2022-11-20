export default function NewBlog(){
    return(
        <div class="post" ng-show="blog.isSelected('new')">
            <h2>Add New Post</h2>
            <form name="postForm"  novalidate>
              <h4>Title</h4>
              <input type="text" />
              <h4>Body</h4>
              <textarea ng-list="/\n/" rows="10"></textarea>
              <label for="">Featured Image URL</label>
              <input type="text"  placeholder="http://placekitten.com/g/2000/600" />
              <label for="">by:</label>
              <input type="text"  placeholder="Author Name" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
    )
}