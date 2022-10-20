import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import styles from './AlertDismissible.module.css'

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>ATENÇÃO</Alert.Heading>
        <p>
          Não doar signifca deixar meus gatos com fome, você faria isso com 3 gatos indefesos?
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fechar
          </Button>
        </div>
      </Alert>

      {!show && <Button variant='danger' className={styles.aviso} onClick={() => setShow(true)}>Mostrar Aviso</Button>}
    </>
  );
}

export default AlertDismissible