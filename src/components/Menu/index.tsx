import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Login as LoginIcon } from '@styled-icons/material-outlined/Login'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
// eslint-disable-next-line prettier/prettier

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Logo from '../Logo'
import MediaMatch from '../MediaMatch'
import UserDropdown from '../UserDropdown'

import * as S from './styles'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.LogoWrapper>
        <Link to={'/'}>
          <a>
            <Logo hideOnMobile color="primary" />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link to={''}>
            <S.MenuLink>Pagina Inicial</S.MenuLink>
          </Link>
          <Link to={''}>
            <S.MenuLink>Para você</S.MenuLink>
          </Link>
          <Link to={''}>
            <S.MenuLink>Para seu negócio</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link to={'/Login'}>
                  <Button as="a" minimal icon={<LoginIcon data-testid="icon" />}>
                    Sign in
                  </Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
            <S.MenuNav>
              <Link to={''}>
                <S.MenuLink>Home</S.MenuLink>
              </Link>
              <Link to={''}>
                <S.MenuLink>Explore</S.MenuLink>
              </Link>

              {!!username && (
                <>
                  <Link href="/profile/me" to={''}>
                    <S.MenuLink>Faturas</S.MenuLink>
                  </Link>
                  <Link href="/wishlist" to={''}>
                    <S.MenuLink>Pagamentos</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link to={''}>
                  <Button fullWidth size="large" as="a">
                    Sign in
                  </Button>
                </Link>
                <span>or</span>
                <Link to={''}>
                  <S.CreateAccount title="Sign Up">Sair</S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
