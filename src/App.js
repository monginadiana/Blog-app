
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
  <body ng-app="blogApp">
  <div ng-controller="BlogController as blog">
    <Navbar/>

    <div class="content">
      <div class="container">
        <div class="row">
          <ul class="post-grid" ng-show="blog.isSelected('blog')">
            <li ng-repeat="post in blog.posts" class="col-s-4" ng-class="{'reset-s' : $index%3==0}" ng-click="blog.selectTab($index)">
              <h3>post.title</h3>
              <p>post.body[0] | limitTo:70...</p>
              <p class="fa fa-comment push-left">post.comments.length</p>
              <p class="fa fa-heart push-right">post.likes</p>
            </li>
          </ul>
          <div class="post" ng-repeat="post in blog.posts" ng-show="blog.isSelected($index)">
            <div>
              <h2>post.title</h2>
         
              <cite>by post.author on post.createdOn | date</cite>
              <div class="post-body">
                <p ng-repeat="paragraph in post.body">
                  paragraph
                </p>
              </div>
              <div class="comments" ng-controller="CommentController as commentCtrl">
                <button class="fa fa-heart" ng-click="post.likes = post.likes+1">post.likes</button>
                <h3>Comments</h3>
                <ul>
                  <li ng-repeat="comment in post.comments">
                    "comment.body"
                    <cite>- <b>comment.author</b></cite>
                  </li>
                </ul>
                <form name="commentForm" ng-submit="commentForm.$valid && commentCtrl.addComment(post)" novalidate>
                  <h4>Add Comment</h4>
                  <textarea ng-model="commentCtrl.comment.body" cols="30" rows="10" required></textarea>
                  <label for="">by:</label>
                  <input type="text" ng-model="commentCtrl.comment.author" required placeholder="Name" />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
          <div class="post" ng-show="blog.isSelected('new')">
            <h2>Add New Post</h2>
            <form name="postForm" ng-submit="blog.addPost()" novalidate>
              <h4>Title</h4>
              <input type="text" ng-model="blog.post.title" />
              <h4>Body</h4>
              <textarea ng-model="blog.post.body" ng-list="/\n/" rows="10"></textarea>
              <label for="">Featured Image URL</label>
              <input type="text" ng-model="blog.post.image" placeholder="http://placekitten.com/g/2000/600" />
              <label for="">by:</label>
              <input type="text" ng-model="blog.post.author" placeholder="Author Name" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
     
    </div>
  );
}

export default App;
