import { Container, NavButton } from './style'

import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <Container>
      <a href="#">
        <Image src="/assets/logo.png" width={110} height={110} />
      </a>
      <div>
        <NavButton href="#aboutMe">SOBRE MIM</NavButton>
        <NavButton href="#galery">GALERIA</NavButton>
        {/* <NavButton href="#">ME ESCOLHA</NavButton> */}
        <NavButton href="#">DESCONTO</NavButton>
      </div>
    </Container>
  )
}

export default Header
