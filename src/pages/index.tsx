import { Container } from '../styles/home'

import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Galery from '../components/Galery'
import Parallax from '../components/Parallax'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <AboutMe />
      <Galery />
      <Parallax />
      <Footer />
    </Container>
  )
}
