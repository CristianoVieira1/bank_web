import FormSignIn from '../../components/FormSignIn'
import Logo from '../../components/Logo'
import * as S from './styles'

export const Login = () => {
  return (
    <S.Container>
      <S.LogoScreen>
        <Logo size="large" color="primary" />
      </S.LogoScreen>

      <S.Wrapper>
        <FormSignIn />
      </S.Wrapper>
    </S.Container>
  )
}
