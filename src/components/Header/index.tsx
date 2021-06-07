import { Container, NavButton } from './style'

import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Image src="/assets/logo.png" width={100} height={100} />
      </div>
      <div>
        <NavButton href="#">SOBRE MIM</NavButton>
        <NavButton href="#">CLIENTES</NavButton>
        <NavButton href="#">GALERIA</NavButton>
        <NavButton href="#">DESCONTO</NavButton>
      </div>
    </Container>
  )
}

export default Header
