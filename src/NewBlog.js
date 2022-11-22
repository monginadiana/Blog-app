 import { useState } from "react"
 import {useNavigate} from 'react-router-dom';

export default function NewBlog({addBlog, user}){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    likes: 0,
    image: "",
    user_id: user.id
})

function handleInput(e){
  const name = e.target.name
  let value = e.target.value

  setFormData({...formData, 
  [name]: value
  })

}

function handleSubmit(e){
  e.preventDefault()


  fetch("https://dees-blogg-app.herokuapp.com/blogs", {
      method:'POST', 
      headers:{'content-type' : 'application/json'},
      body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => addBlog(data))

  alert("Your blog has been successfully published!")
  
  setFormData({
      title: "",
      body: "",
      likes: 0,
      image: "",
      user_id: 1
  })

  navigate("/home")
 
 }
    return(
        <div className="post new">
            <h2>Add New Post</h2>
            <form name="postForm" onSubmit={(e) => {handleSubmit(e)}} >
              <h4>Title</h4>
              <input type="text" value={formData.title} onChange={handleInput} name="title"/>
              <h4>Body</h4>
              <input type="text" value={formData.body} onChange={handleInput} name="body" />
              <br/>
              <label for="">Featured Image URL</label>
              <br/><br/>
              <input type="text" value={formData.image} onChange={handleInput} placeholder="http://placekitten.com/g/2000/600" name="image" />
              <br/>
              <br/>

              <input type="submit" value="Submit" />
            </form>
          </div>
    )
}