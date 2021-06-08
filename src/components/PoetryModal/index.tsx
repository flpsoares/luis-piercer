import { Box, CloseButton, Container, Content, Header, Title } from './style'

import { MdClose } from 'react-icons/md'

import data from '../../../poetrys.json'

interface PoetryProps {
  id: number
  title: string
  p: string
}

const PoetryModal: React.FC<PoetryProps> = ({ title }) => {
  title = 'Maluca'

  const poetry = data.find((poetry) => poetry.title === title)

  return (
    <Container>
      <Box>
        <Header>
          <Title>{poetry.title}</Title>
          <CloseButton>
            <MdClose />
          </CloseButton>
        </Header>
        <Content>
          {poetry.p.map((paragraph) => {
            return <p key={poetry.id}>{paragraph}</p>
          })}
        </Content>
      </Box>
    </Container>
  )
}

export default PoetryModal
