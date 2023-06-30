import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { productRepository } from "../../repository/productRepository";
import { Button, InputNumber, Rate } from "antd";
import { ReviewItem } from "../../components/ReviewItem";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/redux/cartSlice";
import TextArea from "antd/es/input/TextArea";

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
          <div className="description">{`Description: ${details?.product?.description}`}</div>
          <div className="rating">
            <Rate disabled value={details?.product?.rating} />
          </div>
          <div className="price">{`Price: $${details?.product?.price}`}</div>
          <div className="stock">{`In stock: ${details?.product?.countInStock}`}</div>
          <div className="quantity">
            <span>Quantity: </span>
            <InputNumber
              min={1}
              max={1000}
              defaultValue={quantity}
              onChange={(value) => {
                setQuantity(value);
              }}
            />
          </div>
          <Button
            className="btn"
            onClick={() => {
              dispatch(addToCart({ ...details, quantity: quantity }));
            }}
          >
            Buy now
          </Button>
          <Button
            className="btn-secondary"
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
          <hr />
          <div className="write-review">WRITE A CUSTOMER REVIEW</div>
          <div className="rating">Rating</div>
          <Rate className="rate" allowClear={false} defaultValue={5} />
          <div className="comment">Comment</div>
          <TextArea className="input" rows={2} />
          <Button className="btn">Submit</Button>
        </div>
      </div>
    </div>
  );
};
