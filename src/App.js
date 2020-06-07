import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTasks from "./components/addTasks";

import "./App.scss";


function App() {
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Francisco Monleon</h1>
      </div>
      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h3>Lista tareas</h3>
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
         <AddTasks></AddTasks>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
