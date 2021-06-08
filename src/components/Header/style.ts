import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 130px;
  padding: 0 200px;
  background-color: black;
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
`

export const NavButton = styled.a`
  color: var(--primary);
  font-size: 15px;
  margin: 0 18px;
  text-decoration: none;
  padding-bottom: 51px;
  border-bottom: 4px solid black;
  transition: border-bottom 0.4s;

  &:hover {
    border-bottom: 4px solid #e78d3c;
  }
`
