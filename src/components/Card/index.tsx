import * as S from './styles'
import { useState } from 'react'

const Card = () => {
  const [buttonLabel, setButtonLabel] = useState('Create')

  const submit = () => {
    setButtonLabel('Creating...')
  }

  return (
    <S.Card role="card">
      <S.Title>React component</S.Title>
      <S.Subtitle>How to create a component</S.Subtitle>
      <S.Button type="submit" onClick={submit}>
        {buttonLabel}
      </S.Button>
    </S.Card>
  )
}

export default Card
