import { Container, SquareGalery, WhyMe } from './style'

const Galery: React.FC = () => {
  return (
    <Container>
      <SquareGalery />

      <WhyMe>
        <h2>Porque Escolher o Luis Piercer Tatto?</h2>
        <p>
          Vocês querem aplicações de joias a Domicílio com altíssima qualidade e
          horário pontual?
          <br /> (Já aviso que eu chego até antes!)
          <br /> Então acharam o Body Piercer certo! <br />
          Eu sou especializado em aplicações de joias na Orelha e no Nariz.
        </p>
      </WhyMe>
    </Container>
  )
}

export default Galery
