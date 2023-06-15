import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Luigi");
        setAge(30);
        console.log('hello!');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Name: { name } </p>
            <p>Age: { age } years old.</p>
            <br/>
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
}
 
export default Home;