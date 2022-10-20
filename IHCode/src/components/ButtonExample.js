import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import styles from  './ButtonExample.module.css'

function ButtonExample() {
  return (
    <Button className={styles.buttonBadge} variant="primary">
      Voce tem Elementos de Saída e Entrada - BADGE/BUTTON <Badge bg="secondary"> 9</Badge>
    </Button>
  );
}

export default ButtonExample;