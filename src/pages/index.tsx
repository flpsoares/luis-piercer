import { Container } from '../styles/home'

import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Galery from '../components/Galery'
// import PoetryModal from '../components/PoetryModal'

export default function Home() {
  return (
    <Container>
      {/* <PoetryModal /> */}
      <Header />
      <Banner />
      <AboutMe />
      <Galery />
    </Container>
  )
}
