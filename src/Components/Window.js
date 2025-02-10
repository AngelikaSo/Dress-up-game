const Window = () => {
  return (
    <div className="window">
      <div className="window-nav">
        <p className="window-nav-item">window name</p>
        <div className="window-nav-buttons">
          <button className="window-nav-button--1 window-nav-item">-</button>
          <button className="window-nav-button--2 window-nav-item">x</button>
        </div>
      </div>
    </div>
  );
};

export default Window;
