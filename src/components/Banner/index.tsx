import { Container, ImageArea } from './style'

import Image from 'next/image'

const Banner: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <Image src="/assets/banner.jpg" objectFit="cover" layout="fill" />
      </ImageArea>
    </Container>
  )
}

export default Banner
