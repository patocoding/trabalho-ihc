import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import styles from './Toast.module.css'

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <div className={styles.carinho}>
          <Button onClick={toggleShowA} className="mb-2">
          Clique aqui para fazer <strong>carinho</strong> nos gatos
        </Button>
        </div>
        <div className={styles.carinho}>
        <Toast show={showA} onClose={toggleShowA}>

          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Sucesso</strong>
            <small>Há 1s</small>
          </Toast.Header>
          
          <Toast.Body>Miaaauuu, Cookie, Zeze e Serafina adoraram seu carinho *--*</Toast.Body>
        </Toast>
        </div>
      </Col>
      {/* <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col> */}
    </Row>
  );
}

export default DismissibleExample;