const Header = ({ categories, category, setCategory }) => {
  return (
    <div className="header">
      <h1>Products List</h1>
      <div className="btns">
        {categories.map((item) => (
          <button
            onClick={() => setCategory(item)}
            className={category === item ? "active" : ""}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Header;
