import { Container, SquareGalery, WhyMe, CarouselImage } from './style'

import Carousel from 'react-elastic-carousel'

const Galery: React.FC = () => {
  return (
    <Container>
      <SquareGalery>
        <Carousel isRTL={false}>
          <CarouselImage>
            <img src="/assets/p1.jpg" />
            <img src="/assets/p2.jpg" />
            <img src="/assets/p3.jpg" />
          </CarouselImage>
          <CarouselImage>
            <img src="/assets/p4.jpg" />
            <img src="/assets/p5.jpg" />
            <img src="/assets/p6.jpg" />
          </CarouselImage>
          <CarouselImage>
            <img src="/assets/p7.jpg" />
            <img src="/assets/p8.jpg" />
            <img src="/assets/p9.jpg" />
          </CarouselImage>
        </Carousel>
      </SquareGalery>

      <WhyMe>
        <h2>Porque Escolher o Luis Piercer Tatto?</h2>
        <p>
          Vocês querem aplicações de joias a Domicílio com altíssima qualidade e
          horário pontual?
          <br /> (Já aviso que eu chego até antes!)
          <br /> Então acharam o Body Piercer certo! <br />
          Eu sou especializado em aplicações de joias na Orelha e no Nariz.
        </p>
      </WhyMe>
    </Container>
  )
}

export default Galery
