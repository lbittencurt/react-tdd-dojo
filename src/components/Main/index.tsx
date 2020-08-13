import * as S from './styles'

const Main = ({
  title = 'React Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Illustration
      src="/img/react-atom-icon.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
