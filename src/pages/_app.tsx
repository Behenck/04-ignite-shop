import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'

import { Handbag } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'
import { Sidebar } from '../components/Sidebar'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
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
    </Container>
  )
}
