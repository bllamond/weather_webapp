import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./AuthContext";

function App() {
  return (
    <Container>
      <Row>
        <Col>
            <Routes>
              <Route
                path="/home"
                element={
                    <Home />
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
