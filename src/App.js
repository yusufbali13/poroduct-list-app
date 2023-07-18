import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { categories, products } from "./helper/data";
import ProductCard from "./components/productCard/ProductCard";
import "./app.css";

function App() {
  const [category, setCategory] = useState("all");
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    category === "all"
      ? setFilterProducts(products)
      : setFilterProducts(
          products.filter((item) => item.category === category)
        );
  }, [category]);
  return (
    <div>
      <Header
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <div className="card-container">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
