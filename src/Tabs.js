import React, { useState } from "react";
import "./styles.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) => {
        const { title } = child.props;
        const isActive = index === activeTab;

        return (
          <button
            className={isActive ? "btn btn-active" : "btn"}
            onClick={() => handleTabClick(index)}
            disabled={isActive}
          >
            {title}
          </button>
        );
      })}
      <div className="view">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
