import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'New Website!', body: 'lorem ipsum..', author: 'Chris Ehster', id: 1},
        {title: 'Enumerable .NET Types', body: 'lorem ipsum..', author: 'Chris Ehster', id: 2},
        {title: 'SQL Server Replication', body: 'lorem ipsum..', author: 'Chris Ehster', id: 3}        
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;