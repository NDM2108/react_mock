import { Rate } from "antd";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
  return (
    <Link to={`/details?id=${product.id}`} className="link">
      <div className="product-item">
        <div className="product-content">
          <img src={product.images[0].url} alt="" className="product-image" />
          <div className="product-name">{product.name}</div>
          <div className="product-rating">
            <Rate disabled defaultValue={product.rating} />
          </div>
          <div className="product-price">{`$${product.price}`}</div>
        </div>
      </div>
    </Link>
  );
};
