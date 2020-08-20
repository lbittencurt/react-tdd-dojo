import styled from 'styled-components'

export const Card = styled.article`
  width: 30rem;
  height: 18rem;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 2.6rem;
  margin: 4rem;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #4a4a4a;
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 16px;
  color: #797979;
  margin-bottom: 3rem;
`

export const Button = styled.button`
  background: #456fe8;
  border-radius: 5rem;
  padding: 0.8rem 2.2rem;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.8rem;
  border: 0;
  cursor: pointer;

  :hover {
    background: #3652a4;
    transition: background 0.4s;
  }
`
