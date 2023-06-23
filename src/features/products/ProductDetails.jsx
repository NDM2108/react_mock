import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { productRepository } from "../../repository/productRepository";
import { Button, InputNumber, Rate } from "antd";
import { ReviewItem } from "../../components/ReviewItem";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

  const id = params.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const data = await productRepository.getProductById(id);
      setDetails(data.data);
    };

    fetchData();
  }, [id]);

  console.log(details);
  console.log(details?.product?.rating);

  return (
    <div>
      <Header />
      <div className="details-content">
        <Link className="back" to="/">
          GO BACK
        </Link>
        <div className="details-image">
          <img src={details?.product?.images[0]?.url} alt="" />
        </div>
        <div className="information">
          <div className="name">{details?.product?.name}</div>
          <hr />
          <div className="rating">
            <Rate disabled value={details?.product?.rating} />
          </div>
          <hr />
          <div className="price">{`Price: $${details?.product?.price}`}</div>
          <hr />
          <div className="description">{`Description: ${details?.product?.description}`}</div>
        </div>
        <div className="cart">
          <div className="price">{`Price: $${
            quantity * details?.product?.price
          }`}</div>
          <hr />
          <div className="stock">{`In stock: ${details?.product?.countInStock}`}</div>
          <hr />
          <div className="quantity">
            <span>Quantity: </span>
            <InputNumber
              size="small"
              min={1}
              max={1000}
              defaultValue={quantity}
              onChange={(value) => {
                setQuantity(value);
              }}
            />
          </div>
          <hr />
          <Button
            className="btn"
            onClick={() => {
              dispatch(addToCart({ ...details, quantity: quantity }));
            }}
          >
            Add to cart
          </Button>
        </div>
        <div className="review">
          <div className="review-title">Reviews</div>
          {details?.reviews?.result &&
            details?.reviews?.result.map((e) => {
              return (
                <ReviewItem
                  review={e}
                  key={`review-${e.userReview.username}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
