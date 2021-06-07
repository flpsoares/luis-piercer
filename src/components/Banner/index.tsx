import { Container, ImageArea } from './style'

import Image from 'next/image'

const Banner: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <Image src="/assets/banner.jpg" layout="fill" />
      </ImageArea>
    </Container>
  )
}

export default Banner
