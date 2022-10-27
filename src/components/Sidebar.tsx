import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
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

  const pricesId = cart.map((product) => {
    return {
      price: product.defaultPriceId,
      quantity: product.quantity0,
    }
  })

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleByProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      console.log(pricesId)
      const response = await axios.post('/api/checkout', {
        pricesId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X size={32} />
        </CloseButton>

        {cartCount === 0 ? (
          <CartContainer>
            <span>Seu carrinho está vazio!</span>
          </CartContainer>
        ) : (
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

            <FinalizedCartButton
              disabled={isCreatingCheckoutSession}
              onClick={handleByProduct}
            >
              Finalizar Compra
            </FinalizedCartButton>
          </CartContainer>
        )}
      </Content>
    </Dialog.Portal>
  )
}
