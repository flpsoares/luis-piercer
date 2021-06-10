import {
  Container,
  SquareGalery,
  WhyMeContainer,
  WhyMe,
  BigNumbers,
  BoxBigNumbers,
  CarouselImage
} from './style'

import { MdFace, MdHome, MdAvTimer } from 'react-icons/md'

import { GiLoveInjection } from 'react-icons/gi'

import Carousel from 'react-elastic-carousel'

const Galery: React.FC = () => {
  return (
    <Container>
      <SquareGalery id="galery">
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
          <CarouselImage>
            <img src="/assets/p10.jpg" />
            <img src="/assets/p11.jpg" />
            <img src="/assets/p12.jpg" />
          </CarouselImage>
          <CarouselImage>
            <img src="/assets/p13.jpg" />
            <img src="/assets/p14.jpg" />
            <img src="/assets/p15.jpg" />
          </CarouselImage>
          <CarouselImage>
            <img src="/assets/p16.jpg" />
            <img src="/assets/p17.jpg" />
            <img src="/assets/p18.jpg" />
          </CarouselImage>
          <CarouselImage>
            <img src="/assets/p19.jpg" />
            <img src="/assets/p20.jpeg" />
            <img src="/assets/p21.jpeg" />
          </CarouselImage>
        </Carousel>
      </SquareGalery>

      <WhyMeContainer>
        <BigNumbers>
          <div>
            <BoxBigNumbers>
              <MdFace size="70px" />
              <div>
                <h2>Clientes</h2>
                <p>120</p>
              </div>
            </BoxBigNumbers>
            <BoxBigNumbers>
              <GiLoveInjection size="70px" />
              <div>
                <h2>Total de Piercings Aplicados</h2>
                <p>143</p>
              </div>
            </BoxBigNumbers>
          </div>
          <div>
            <BoxBigNumbers>
              <MdHome size="70px" />
              <div>
                <h2>Piercings Aplicado a domicilio</h2>
                <p>95</p>
              </div>
            </BoxBigNumbers>
            <BoxBigNumbers>
              <MdAvTimer size="70px" />
              <div>
                <h2>Horas de Estudo</h2>
                <p>130</p>
              </div>
            </BoxBigNumbers>
          </div>
        </BigNumbers>
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
      </WhyMeContainer>
    </Container>
  )
}

export default Galery
