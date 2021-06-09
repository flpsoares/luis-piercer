import {
  Container,
  Title,
  Profile,
  Poetry,
  PoetryButton,
  BoxProfile,
  Line,
  ContactButton
} from './style'

import Image from 'next/image'
import PoetryModal from '../PoetryModal'
import { useModal } from '../../hooks/useModal'
import ModalEvents from '../../events/ModalEvents'

const AboutMe: React.FC = () => {
  const { title } = useModal()

  const handlePoetry = (poetryTitle: string) => {
    ModalEvents.emit('title', poetryTitle)
  }

  return (
    <Container>
      {title && <PoetryModal title={title} />}
      <Title>Quem é Luis Piercer33?</Title>
      <Line />
      <BoxProfile>
        <Profile>
          <div>
            <Image
              alt="Luis Guilherme"
              src="/assets/luis.jpg"
              width={80}
              height={80}
            />
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
          <PoetryButton onClick={() => handlePoetry('Olhar indefinido')}>
            Olhar indefinido
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Florescer do desastre')}>
            Florescer do desastre
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Prisão de ossos')}>
            Prisão de ossos
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Chuva salgada')}>
            Chuva salgada
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('2°s')}>2°s</PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Dias')}>Dias</PoetryButton>
        </Poetry>
      </BoxProfile>

      <ContactButton>
        Entre em contato agora para agendar o seu piercing comigo!
      </ContactButton>
    </Container>
  )
}

export default AboutMe
