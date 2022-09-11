import { useState } from 'react'
import Card from '../../assets/images/card.png'
import Menu from '../../components/Menu'
import * as S from './styles'

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <S.Container>
      <Menu username={username} loading={isLoading} />
      <S.Content>
        <S.Row>
          <S.Title>Cartão Colombo</S.Title>
          <S.Subtitle>
            Utilize o <span>seu cartão</span> em nossas lojas e em todo o Brasil <br /> <br /> Seu cartão Colombo, agora{' '}
            <span>com mais facilidades</span>
          </S.Subtitle>
        </S.Row>
        <S.Row>
          <S.CardImg src={Card} />
        </S.Row>
      </S.Content>
    </S.Container>
  )
}
