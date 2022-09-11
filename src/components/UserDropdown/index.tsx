/* eslint-disable @typescript-eslint/no-empty-function */
import { AccountCircle, ExitToApp, FavoriteBorder } from '@styled-icons/material-outlined'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          {/* <ChevronDown size={24} /> */}
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" to={''}>
          <S.Link>
            <AccountCircle />
            <span>My profile</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" to={''}>
          <S.Link title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </S.Link>
        </Link>
        <S.Link role="button" title="Sign out" onClick={() => {}}>
          <ExitToApp />
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
