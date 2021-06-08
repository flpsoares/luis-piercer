import styled from 'styled-components'

export const Container = styled.div`
  color: var(--primary);
  padding: 0 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin: 23px 0;
  font-weight: 200;
  font-size: 43px;
`
export const BoxProfile = styled.div`
  width: 100%;

  display: flex;
`

export const Profile = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  text-align: left;

  div {
    border-radius: 50%;

    display: flex;
    align-items: center;

    h2 {
      margin-left: 20px;
      font-size: 30px;
      font-weight: 100;
    }
  }

  h3 {
    font-size: 35px;
    font-weight: 300;
  }

  p {
    font-size: 18px;
    font-weight: 200;
  }
`

export const Poetry = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
    font-weight: 300;
  }
`

export const PoetryButton = styled.button`
  color: white;
  margin-bottom: 10px;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 20px;
  border-radius: 7px;
  width: 90%;
  padding: 3px;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary);
    color: white;
    border-radius: 5px;
  }
`
