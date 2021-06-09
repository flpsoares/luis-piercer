import { Box, CloseButton, Container, Content, Header, Title } from './style'

import { MdClose } from 'react-icons/md'

import data from '../../../poetrys.json'
import ModalEvents from '../../events/ModalEvents'

interface PoetryProps {
  id?: number
  title: string
  p?: string
}

const PoetryModal: React.FC<PoetryProps> = ({ title }) => {
  const poetry = data.find((poetry) => poetry.title === title)

  const closeModal = () => {
    ModalEvents.emit('title', null)
  }

  return (
    <Container>
      <Box initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header>
          <Title>{poetry.title}</Title>
          <CloseButton onClick={closeModal}>
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
