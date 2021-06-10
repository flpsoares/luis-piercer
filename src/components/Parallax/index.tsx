import { Container, Overlay } from './style'

import { Parallax } from 'react-parallax'

const AllParallax: React.FC = () => {
  return (
    <Parallax
      blur={10}
      bgImage="/assets/banner.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <Container id="coupon">
        <Overlay>
          <p>
            Tenha 10% de desconto em seu Primeiro Piercing! Basta clicar aqui e
            utilizar o Voucher para agendar o seu Piercing agora mesmo!
          </p>
        </Overlay>
      </Container>
    </Parallax>
  )
}

export default AllParallax
