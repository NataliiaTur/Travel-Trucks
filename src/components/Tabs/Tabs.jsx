import css from "./Tabs.module.css";

function Tabs({ activeTab, setActiveTab, children }) {
  return (
    <div className={css.tabs}>
      <div className={css.tabButtons}>
        <button
          className={`${css.tabButton} ${
            activeTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          className={`${css.tabButton} ${
            activeTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.tavContent}>{children}</div>
    </div>
  );
}

export default Tabs;
