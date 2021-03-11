import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "sec11",
    content: "im sec1",
  },

  {
    tab: "sec22",
    content: "im sec22",
  },
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndenx, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndenx],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((ssss, index) => (
        <button onClick={() => changeItem(index)}>{ssss.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
