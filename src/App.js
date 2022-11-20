
import './App.css';
import Navbar from './Navbar';
import Blog from './Blogs';

function App() {
  return (
    <div className="App">
  {/* <body ng-app="blogApp">
  <div ng-controller="BlogController as blog"> */}
    <Navbar/>
    <Blog/>

    <div class="content">
      <div class="container">
        <div class="row">
          
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

     
   
  );
}

export default App;
