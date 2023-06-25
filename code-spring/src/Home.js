import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'New Website!', body: 'lorem ipsum..', author: 'Chris Ehster', id: 1},
        {title: 'Enumerable .NET Types', body: 'lorem ipsum..', author: 'Chris Ehster', id: 2},
        {title: 'SQL Server Replication', body: 'lorem ipsum..', author: 'Chris Ehster', id: 3}        
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);  // if the id doesn't match, put it in our new list
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Recent Posts:" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;