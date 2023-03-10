// create using javaScript function
import "./app.css";

function App() {
  let message = "This is a new message";
  return (
    <div>
      <h1 className="myHeader">This is an h1 element</h1>
      <p className="myParagraph">This is the first App Component. {message}</p>
    </div>
  );
}

export default App;
