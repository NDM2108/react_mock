import { Button, Rate } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../app/redux/cartSlice";

export const ProductItem = ({ product, delay }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="product-item fade-go-up"
      style={{ animationDelay: delay + "ms" }}
    >
      <div className="product-content">
        <Link to={`/details?id=${product.id}`} className="link">
          <div className="product-image">
            <img src={product.images[0].url} alt="" />
          </div>
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{`$${product.price}`}</div>
          </div>
          <div className="product-rating">
            <Rate disabled defaultValue={product.rating} />
            <span>{`(${product?.numOfReviews})`}</span>
          </div>
        </Link>
        <Button
          className="btn"
          onClick={() => {
            console.log(1234);
            dispatch(addToCart({ product: product, quantity: 1 }));
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
