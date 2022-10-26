import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'

import { Handbag } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'
import { Sidebar } from '../components/Sidebar'

import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
        cancelUrl={`${process.env.NEXT_URL}`}
        currency="BRL"
      >
        <Header>
          <Image src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag size={24} weight="bold" />
              </button>
            </Dialog.Trigger>

            <Sidebar />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
