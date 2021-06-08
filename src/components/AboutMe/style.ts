import styled from 'styled-components'

export const Container = styled.div`
  color: var(--primary);
  padding: 70px 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 63px;
`

export const Line = styled.div`
  margin-right: 600px;
  width: 100px;
  height: 3px;
  margin-bottom: 50px;
  background-color: var(--primary);
`

export const BoxProfile = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
`

export const Profile = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  div {
    display: flex;
    align-items: center;
    border-radius: 50%;

    h2 {
      margin-left: 20px;
      font-size: 39px;
      font-weight: 100;
    }
  }

  h3 {
    font-size: 35px;
    font-weight: 900;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
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
    font-size: 38px;
    font-weight: 200;
  }
`

export const PoetryButton = styled.button`
  color: white;
  margin-bottom: 10px;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 20px;
  border-radius: 7px;
  font-weight: 200;
  width: 90%;
  padding: 4px;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`