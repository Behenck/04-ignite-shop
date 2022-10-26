import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CartContainer,
  CartContent,
  CartDetails,
  CloseButton,
  Content,
  FinalizedCartButton,
  ImageContainer,
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
            <ImageContainer></ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </CartContent>
          <CartContent>
            <ImageContainer></ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </CartContent>
          <CartContent>
            <ImageContainer></ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </CartContent>

          <CartDetails>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>R$ 270,00</strong>
            </div>
          </CartDetails>

          <FinalizedCartButton>Finalizar Compra</FinalizedCartButton>
        </CartContainer>
      </Content>
    </Dialog.Portal>
  )
}
