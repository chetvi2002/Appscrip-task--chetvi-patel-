import styles from "./App.css";
import BaseHeader from "./Components/BaseHeader/BaseHeader";
import FilterPanel from "./Components/FilterPanel/FilterPanel";
import Footer from "./Components/Footer/Footer";
import HomeItems from "./Components/HomeItems/HomeItems";
import NavContainer from "./Components/NavContainer/NavContainer";
import RecommandedPanel from "./Components/RecommandedPanel/RecommandedPanel";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  return (
    <div className={styles.App}>
      <TopHeader />
      <NavContainer />
      <BaseHeader />
      <RecommandedPanel />
      <div className={styles.body}>
        <FilterPanel />
        <HomeItems />
      </div>
      <Footer />
    </div>
  );
}

export default App;
