import React, { useEffect } from "react";
import ArtCardContainer from "../../components/ArtCardContainer/ArtCardContainer";
import FilterTab from "../../components/FilterTab/FilterTab";

const Explore = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FilterTab darkMode={darkMode} />
      <ArtCardContainer darkMode={darkMode} />
    </div>
  );
};

export default Explore;
