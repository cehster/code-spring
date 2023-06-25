import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'New Website!', body: 'lorem ipsum..', author: 'Chris Ehster', id: 1},
        {title: 'Enumerable .NET Types', body: 'lorem ipsum..', author: 'Chris Ehster', id: 2},
        {title: 'SQL Server Replication', body: 'lorem ipsum..', author: 'Chris Ehster', id: 3}        
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Recent Posts:"/>
        </div>
     );
}
 
export default Home;