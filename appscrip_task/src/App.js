import "./App.css";
import BaseHeader from "./Components/BaseHeader/BaseHeader";
import HomeItems from "./Components/HomeItems/HomeItems";
import NavContainer from "./Components/NavContainer/NavContainer";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <NavContainer />
      <BaseHeader />
      <HomeItems />
    </div>
  );
}

export default App;
