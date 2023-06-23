import { Button, Form, Input } from "antd";
import { Header } from "../../../components/Header";
import { useDispatch } from "react-redux";
import { login } from "../authenticateSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const state = dispatch(login(values));
    state.then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <Form className="login-form" onFinish={onFinish}>
          <div className="title">Log in</div>
          <div className="form-title">Email address</div>
          <Form.Item name={"email"}>
            <Input placeholder="Email address" className="input" />
          </Form.Item>
          <div className="form-title">Password</div>
          <Form.Item name={"password"}>
            <Input placeholder="Password" className="input" />
          </Form.Item>
          <Button className="btn" htmlType="submit">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};
