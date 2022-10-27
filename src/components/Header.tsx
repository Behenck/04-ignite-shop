import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import {
  Button,
  ButtonQuantityInCart,
  HeaderContainer,
  HeaderSuccessContainer,
} from '../styles/pages/components/Header'
import logoImg from '../assets/logo.svg'
import { Sidebar } from './Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { cartCount } = useShoppingCart()

  const { pathname } = useRouter()

  console.log(pathname)

  if (pathname === '/success') {
    return (
      <HeaderSuccessContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </HeaderSuccessContainer>
    )
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          {cartCount === 0 ? (
            <Button>
              <Handbag size={24} weight="bold" />
            </Button>
          ) : (
            <ButtonQuantityInCart data-notification={cartCount}>
              <Handbag size={24} weight="bold" />
            </ButtonQuantityInCart>
          )}
        </Dialog.Trigger>

        <Sidebar />
      </Dialog.Root>
    </HeaderContainer>
  )
}
