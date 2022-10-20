import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'

function CarouselFadeExample() {
  return (
    <Carousel fade className={styles.carousel_wrapper}>
      <Carousel.Item>
        <img
          className={styles.imagens}
          src="https://i.imgur.com/3OyWATA.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cookie</h3>
          <p> Meu gatinho lindo, tem 3 anos de idade e é muito brincalhão</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.imagens}
          src="https://i.imgur.com/CeSo7j8.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Serafina</h3>
          <p>Gordinha e Tímida, essa é minha gata Serafina. Atualmente com 2 aninhos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.imagens}
          src="https://i.imgur.com/DWnE4jO.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Zezé</h3>
          <p>
            Meu gatinho mais corajoso, Zezé. Atualmente com 2 aninhos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;