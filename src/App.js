import "./App.css";
import MyNav from "./components/MyNav";
import Cards from "./components/Cards";
import SecondCards from "./components/SecondCards";
import ThirdCards from "./components/ThirdCards";
import MyFooter from "./components/MyFooter";
import Search from "./components/Search";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav />
      </header>
      <TvShows />
      <main>
        <SecondCards />
        <Cards />
        <ThirdCards />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
