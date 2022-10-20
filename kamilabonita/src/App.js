import AlertDismissible from './components/AlertDismissible';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Navbarr from './components/Navbarr';

import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button'

import ButtonExample from './components/ButtonExample';
import WithLabelExample from './components/ProgressBar';
import DismissibleExample from './components/Toast';
import CarouselFadeExample from './components/Carousel';
import styles from './components/MyVerticallyCenteredModal.module.css'


function App() {


  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <Navbarr/>

      <div className={styles.modal}>
        <Button className={styles.modal_wrapper} variant="primary" onClick={() => setModalShow(true)}>
        Enviar Confirmação de email
        </Button>
        <ButtonExample/>
      </div>
     
        <MyVerticallyCenteredModal

      
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
     
     
       <CarouselFadeExample/>
      
      <WithLabelExample/>
      <div className={styles.justifycenter}>
        <AlertDismissible/>
      </div>
      <DismissibleExample/>
     
    </div>
  );
}

export default App;
