import { useState } from "react";
import Button from "react-bootstrap/Button";
// import NavLink from "react-bootstrap/esm/NavLink";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [state, setState] = useState({ email: "", password: "" });

  const handleElement = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    if (state.email === "" || state.password === "") {
      alert("Enter email and password");
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <Form className="px-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={state.email}
          onChange={handleElement}
        />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleElement}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        <a href="/dashboard"></a>Login
      </Button>
    </Form>
  );
}

export default LoginComponent;
