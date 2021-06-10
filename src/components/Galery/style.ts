import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  background-color: rgba(17, 16, 16, 1);
`

export const SquareGalery = styled.div`
  width: 100%;
  height: 400px;
`

export const WhyMeContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 200;
  }
  p {
    font-weight: 100;
    font-size: 17px;
  }
`

export const WhyMe = styled.div`
  width: 50%;
`

export const BigNumbers = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    padding: 6px;
  }
`

export const BoxBigNumbers = styled.div`
  width: 50%;
  /* background-color: blue; */

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: var(--primary);
    }
    p {
      margin: 5px;
    }
  }
`

export const CarouselImage = styled.div`
  img {
    width: 170px;
    height: 100%;
    border: 0px solid white;

    margin: 0 40px;
  }
`
