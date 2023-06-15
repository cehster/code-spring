import './App.css';

function App() {
  const title = "Welcome to My Blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times.</p>

        {/* testing different js output */}
        <p>{ 10 }</p>
        <p>{"hello!"}</p>
        {/* flattens array  */}
        <p>{[1, 2, 3]}</p>
        <p>{Math.random() * 100}</p>

        {/* links and attributes */}
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;