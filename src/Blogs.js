import BlogList from "./BlogList"

export default function Blog({blogs}){
    return (
        <div class="blog">
          
          {
          blogs.map(blog => {
                    return <BlogList key={blog.id} title={blog.title} body={blog.body} 
                    date={blog.created_at} image={blog.image} likes={blog.likes} />
                })
          }
          


          

          

          
              
           
        </div>
    )

}