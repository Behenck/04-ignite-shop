import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { CartProvider } from 'use-shopping-cart'
import { Toaster } from 'react-hot-toast'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
        cancelUrl={`${process.env.NEXT_URL}`}
        currency="BRL"
      >
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
