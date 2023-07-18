import Card from "react-bootstrap/Card";
const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{product.price}</Card.Title>
        <Card.Img className="w-25" variant="top" src={product.image} />
        <Card.Text>{product.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
