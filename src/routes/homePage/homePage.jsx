import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Perfect Home with Ease</h1>
          <p>
          Welcome to your trusted real estate platform. Whether you are buying, selling, or renting, 
            we are here to help you navigate every step of the journey. With unmatched expertise and a 
            vast selection of properties, your dream home is just a few clicks away.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Trusted Service</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Industry Recognitions</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Available Properties</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;