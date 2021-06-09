import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`

export const Box = styled(motion.div)`
  position: relative;
  border-radius: 5px;

  z-index: 5;
`

export const Header = styled.div`
  position: relative;

  width: 100%;

  color: var(--primary);

  padding: 15px;

  text-align: center;
`
export const Title = styled.h1``

export const CloseButton = styled.button`
  position: absolute;

  right: 10px;
  top: 20px;

  font-size: 25px;
  color: white;
`

export const Content = styled.div`
  text-align: center;
  line-height: 30px;
  font-size: 20px;

  padding: 15px;

  color: white;
`
