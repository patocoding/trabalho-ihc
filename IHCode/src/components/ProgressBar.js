import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './ProgressBar.module.css'
import Button from 'react-bootstrap/Button'

function WithLabelExample() {
  const now = 60;
  return (
  <div className={styles.progressbar_wrapper}>
    <p className={styles.paragrafo}>Doe agora para ajudar nossos gatinhos - Progress Bar</p>
    <Button variant="success">Doe <span className={styles.agora}>AGORA</span></Button>{' '}
    <ProgressBar className={styles.progressbar} now={now} label={`${now}%`} />
    <p className={styles.iloveyou}> META: 6000000000,00 R$</p>;
  </div>
  )
}

export default WithLabelExample;