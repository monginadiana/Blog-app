 import { useState } from "react"
 import {useNavigate} from 'react-router-dom';

export default function NewBlog({addBlog}){

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    likes: "",
    image: "",
    user_id: 1
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
 addBlog(formData)

//   fetch("http://localhost:9292/magazines", {
//       method:'POST', 
//       headers:{'content-type' : 'application/json'},
//       body: JSON.stringify(formData)
//   })
//   .then(res => res.json())
//   .then(data => addMagazine(data))

//   alert("Your magazine has been successfully published!")
  
//   setFormData({
//       title: "",
//       description: "",
//       category: "",
//       image: "",
//       user_id: currentUser.id
//   })

//   navigate("/")
//   window.location.reload()
 }
    return(
        <div className="post new">
            <h2>Add New Post</h2>
            <form name="postForm" onSubmit={(e) => {handleSubmit(e)}} >
              <h4>Title</h4>
              <input type="text" value={formData.title} onChange={handleInput} />
              <h4>Body</h4>
              <input type="text" value={formData.description} onChange={handleInput} />
              <br/>
              <label for="">Featured Image URL</label>
              <br/><br/>
              <input type="text" value={formData.image} onChange={handleInput} placeholder="http://placekitten.com/g/2000/600" />
              <br/>
              <label for="">by:</label>
              <br/><br/>
              <input type="text" value={formData.Author} onChange={handleInput} placeholder="Author Name" required />
              <br/>

              <input type="submit" value="Submit" />
            </form>
          </div>
    )
}