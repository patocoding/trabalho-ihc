import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './MyVerticallyCenteredModal.module.css'

function MyVerticallyCenteredModal(props) {
  return (
  <div className={styles.modal_wrapper}>
    <Modal 
      {...props}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      title='Modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CONFIRMAÇÃO DE E-MAIL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Confirme seu E-Mail</h4>
        <p>
          Foi enviado um código para: cayobrunogostosao@hotmail.com
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default MyVerticallyCenteredModal