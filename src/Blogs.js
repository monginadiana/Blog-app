import BlogList from "./BlogList"

export default function Blog({blogs}){
    return (
        <div className="blog">
          
          {
          blogs.map(blog => {
                    return <BlogList key={blog.id} title={blog.title} body={blog.body} 
                    date={blog.created_at} image={blog.image} likes={blog.likes} id={blog.id}/>
                })
          }
          


          

          

          
              
           
        </div>
    )

}