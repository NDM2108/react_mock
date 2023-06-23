import { Dropdown, Input, Space } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/authenticate/authenticateSlice";

export const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.authenticate.userInfo);
  const dispatch = useDispatch();

  const items = [
    {
      key: "1",
      label: <div>Profile</div>,
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log out
        </div>
      ),
    },
  ];

  return (
    <div className="header">
      <Link to={"/"} className="logo">
        PROSHOP
      </Link>
      <div className="search-bar">
        <Input
          className="input search-input"
          placeholder="Search products..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/search?keyword=${e.target.value}`);
            }
          }}
        />
      </div>
      <div className="group-btn">
        <Link to={"/cart"} className="text-btn">
          Cart
        </Link>
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
