import { useEffect, useState } from "react";
import Comment from "./Comment"

export default function CommentList({id,  handleComments}) {
  const [singleComment, setsingleComment] = useState([]);
  useEffect(() => {
    fetch(`https://dees-blogg-app.herokuapp.com/comments`)
      .then((res) => res.json())
      .then((data) => setsingleComment(data));
  }, []);

  const filteredComments = singleComment.filter((comment) => {
    if (!comment.blog_id === id) return false;
    return comment.blog_id === id;
  });



  return (
    <>
      <h3>Comments</h3>

      {filteredComments
        ? filteredComments.map((comment) => {
            console.log(comment);
            return <Comment comment={comment.comment} key={comment.id} />;
          })
        : <p>No comment available</p>}
 

    </>
  );
}
