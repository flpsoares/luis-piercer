import { Container } from '../styles/home'

import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <AboutMe />
    </Container>
  )
}
