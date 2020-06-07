import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import AddTasks from "./components/addTasks";
import Task from "./components/Task";
import { map, size } from "lodash";

import firebase from "./utils/firebase";
import "firebase/firestore";

import "./App.scss";

const db = firebase.firestore(firebase);

function App() {
  const [tasks, settasks] = useState([]);
  const [relodTasks, setRelodTasks] = useState(false);

  useEffect(() => {
    db.collection("tasks")
      .orderBy("completed")
      .get()
      .then((response) => {
        console.log("respuesta", response);
        const arrayTasks = [];
        map(response.docs, (task) => {
          console.log("data", task.data());
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        settasks(arrayTasks);
      });
    setRelodTasks(false);
  }, [relodTasks]);

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
          {tasks === null || !tasks ? (
            <div className="loading">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : size(tasks) === 0 ? (
            <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task, index) => (
              <Task key={index} task={task} setRelodTasks={setRelodTasks} />
            ))
          )}
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTasks setRelodTasks={setRelodTasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
