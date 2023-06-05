import React from "react";
import Tabs from "./Tabs";

const App = () => {
  return (
    <Tabs>
      <div title="Section title 1">
        <p>Content of Section1</p>
      </div>
      <div title="Section title 2">
        <p>Content of Section 2</p>
      </div>
      <div title="ection title 3">
        <p>Content of Section 3</p>
      </div>
    </Tabs>
  );
};

export default App;
