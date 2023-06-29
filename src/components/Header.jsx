import { Badge, Dropdown, Input, Space } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../app/redux/authenticateSlice";
import { authenticateRepository } from "../repository/authenticateRepository";
import { CartPopup } from "./CartPopup";
import { useState } from "react";

export const Header = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.authenticate.userInfo);
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);

  const handleLogout = async () => {
    try {
      await authenticateRepository.logout(userInfo?.tokens?.refresh?.token);
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  const items = [
    {
      key: "1",
      label: <div>Profile</div>,
    },
    {
      key: "2",
      label: <div onClick={handleLogout}>Log out</div>,
    },
  ];

  return (
    <div className="header">
      <Link to={"/"} className="logo">
        PROSHOP
      </Link>
      <div className="options">
        <div className={`categories option ${isSearching ? "hide" : ""}`}>
          Categories
        </div>
        <div className={`option ${isSearching ? "hide" : ""}`}>Deals</div>
        <div className={`option ${isSearching ? "hide" : ""}`}>What's new</div>
        <div className={`option ${isSearching ? "hide" : ""}`}>Delivery</div>
        <Input
          className={`input search-input ${isSearching ? "searching" : ""}`}
          placeholder="Search products..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/search?keyword=${e.target.value}`);
            }
          }}
          onFocus={() => {
            setIsSearching(true);
          }}
          onBlur={() => {
            setIsSearching(false);
          }}
        />
      </div>
      <div className="group-btn">
        <div className="cart-btn">
          <Link to={"/cart"}>
            <Badge count={cart.length} size="small">
              <div className="text-btn">Cart</div>
            </Badge>
          </Link>
          <CartPopup />
        </div>
        {userInfo?.user?.username !== undefined ? (
          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className="dropdown-title">{userInfo?.user?.username}</Space>
          </Dropdown>
        ) : (
          <Link to={"/login"} className="text-btn">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};
