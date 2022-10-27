import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

import {
  Button,
  ButtonQuantityInCart,
  HeaderContainer,
} from '../styles/pages/components/Header'
import logoImg from '../assets/logo.svg'
import { Sidebar } from './Sidebar'

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

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
