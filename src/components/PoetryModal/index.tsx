import { Box, CloseButton, Container, Content, Header, Title } from './style'

import { MdClose } from 'react-icons/md'

const PoetryModal: React.FC = () => {
  return (
    <Container>
      <Box>
        <Header>
          <Title>Título</Title>
          <CloseButton>
            <MdClose />
          </CloseButton>
        </Header>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum
          perspiciatis doloremque ea aliquam amet non eum libero, facilis nisi
          necessitatibus sunt fugit autem optio dignissimos, labore aspernatur,
          deleniti aperiam!
        </Content>
      </Box>
    </Container>
  )
}

export default PoetryModal
