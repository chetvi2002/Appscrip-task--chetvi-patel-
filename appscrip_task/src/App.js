import "./App.css";
import BaseHeader from "./Components/BaseHeader/BaseHeader";
import Footer from "./Components/Footer/Footer";
import HomeItems from "./Components/HomeItems/HomeItems";
import NavContainer from "./Components/NavContainer/NavContainer";
import RecommandedPanel from "./Components/RecommandedPanel/RecommandedPanel";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <NavContainer />
      <BaseHeader />
      <RecommandedPanel />
      <HomeItems />
      <Footer />
    </div>
  );
}

export default App;
