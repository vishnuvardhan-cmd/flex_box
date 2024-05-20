import logo from "./logo.svg";
import "./App.css";
import oip from "./assests/oip.jfif";
import forest from "./assests/forest.jfif";
import water from "./assests/water.jfif";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={oip} alt="oip" />
        <div className="card-content">
          <h1>Card 1</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="https://loremipsum.io/">Read More</a>
        </div>
      </div>
      <div className="card">
        <img src={forest} alt="forest" />
        <div className="card-content">
          <h1>Card 2</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="https://loremipsum.io/">Read More</a>
        </div>
      </div>
      <div className="card">
        <img src={water} alt="water" />
        <div className="card-content">
          <h1>Card 3</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="https://loremipsum.io/">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default App;
