import React, { useState } from "react";
import styles from "./App.css";
import BaseHeader from "./Components/BaseHeader/BaseHeader";
import FilterPanel from "./Components/FilterPanel/FilterPanel";
import Footer from "./Components/Footer/Footer";
import HomeItems from "./Components/HomeItems/HomeItems";
import NavContainer from "./Components/NavContainer/NavContainer";
import RecommandedPanel from "./Components/RecommandedPanel/RecommandedPanel";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.App}>
      <TopHeader />
      <NavContainer />
      <BaseHeader />
      <RecommandedPanel
        isFilterVisible={isFilterVisible}
        onToggleFilter={toggleFilterVisibility}
      />
      <div className={styles.body}>
        {isFilterVisible && <FilterPanel />}
        <HomeItems />
      </div>
      <Footer />
    </div>
  );
}

export default App;
