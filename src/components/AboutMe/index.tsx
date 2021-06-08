import {
  Container,
  Title,
  Profile,
  Poetry,
  PoetryButton,
  BoxProfile,
  Line
} from './style'

import Image from 'next/image'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>Quem é Luis Piercer33?</Title>
      <Line />
      <BoxProfile>
        <Profile>
          <div>
            <Image src="/assets/p5.jpg" width={100} height={100} />
            <h2>LUIS GUILHERME STEIN</h2>
          </div>
          <h3>São Paulo - SP</h3>
          <p>
            <b>Idade: </b>23 Anos.
          </p>
          <p>
            <b>Profissão: </b>Body Piercer.
          </p>
          <p>
            <b>Piercings: </b>Nariz, septo, Rock, concha, helix, lóbulo, daith e
            flat.
          </p>
          <p>
            <b>Cursos: </b>Curso de Body piercing acompanhado por Bio Segurança.
          </p>
          <p>
            <b>Faculdade: </b>Educação Física.
          </p>
        </Profile>
        <Poetry>
          <h2>Minhas Poesias</h2>
          <PoetryButton>Poesia 1</PoetryButton>
          <PoetryButton>Poesia 2</PoetryButton>
          <PoetryButton>Poesia 3</PoetryButton>
          <PoetryButton>Poesia 4</PoetryButton>
          <PoetryButton>Poesia 5</PoetryButton>
          <PoetryButton>Poesia 6</PoetryButton>
        </Poetry>
      </BoxProfile>
    </Container>
  )
}

export default AboutMe