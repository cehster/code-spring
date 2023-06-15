const Home = () => {

    const handleClick = () => {
        console.log('hello!');
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => handleClickAgain("Mario", e)}>Click again!</button>
        </div>
     );
}
 
export default Home;