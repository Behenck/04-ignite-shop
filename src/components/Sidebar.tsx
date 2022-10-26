import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
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
  const { cartDetails, cartCount, removeItem, formattedTotalPrice } =
    useShoppingCart()
  const cart = Object.values(cartDetails)

  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X size={32} />
        </CloseButton>

        <CartContainer>
          {cart.map((cart) => {
            return (
              <CartContent key={cart.id}>
                <ImageContainer>
                  <Image src={cart.image} width={94} height={94} alt="" />
                </ImageContainer>
                <div>
                  <span>{cart.name}</span>
                  <strong>{cart.formattedPrice}</strong>
                  <button onClick={() => removeItem(cart.id)}>Remover</button>
                </div>
              </CartContent>
            )
          })}

          <CartDetails>
            <div>
              <span>Quantidade</span>
              <span>{cartCount} itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>{formattedTotalPrice}</strong>
            </div>
          </CartDetails>

          <FinalizedCartButton>Finalizar Compra</FinalizedCartButton>
        </CartContainer>
      </Content>
    </Dialog.Portal>
  )
}
