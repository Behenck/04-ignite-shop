import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import {
  CartContainer,
  CartContent,
  CloseButton,
  Content,
  Title,
} from '../styles/pages/components/Sidebar'

export function Sidebar() {
  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X size={32} />
        </CloseButton>

        <CartContainer>
          <CartContent>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </CartContent>
        </CartContainer>
      </Content>
    </Dialog.Portal>
  )
}
