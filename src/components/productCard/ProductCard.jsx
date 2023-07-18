const ProductCard = ({ product }) => {
  return (
    <div className="cards">
      <div className="date">
        <h3>{product.price} $</h3>
      </div>
      <img src={product.image} alt="" />
      <div className="card-over">
        <h2 className="title">{product.title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
