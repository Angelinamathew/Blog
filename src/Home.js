import { useState } from "react";

const Home= () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website,', body: 'I am really excited....', author: 'Ammu', id:1},
        {title: 'My cooking skills,', body: 'I am really excited....', author: 'Ann', id:2}

    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key= {blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
            

            
            
        </div>

     );
    }


 
export default Home;