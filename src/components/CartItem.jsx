import { InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../features/cart/cartSlice";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="image">
        <img src={item.product.images[0].url} alt="" />
      </div>
      <div className="info">
        <div className="name">{item.product.name}</div>
        <div className="price">{`$${item.product.price * item.quantity}`}</div>
      </div>
      <div className="quantity">
        <InputNumber
          size="small"
          min={1}
          max={1000}
          defaultValue={item.quantity}
          onChange={(value) => {
            dispatch(
              changeQuantity({ id: item?.product?.id, quantity: value })
            );
          }}
        />
      </div>
      <div className="remove"></div>
    </div>
  );
};
