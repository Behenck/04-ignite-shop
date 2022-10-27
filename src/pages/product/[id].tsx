import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { SkeletonProduct } from '../../components/SkeletonScreen/SkeletonProduct'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
  priceFormatted: string
}

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { cartDetails, addItem } = useShoppingCart()

  function handleAddItemToCart() {
    const productToCart = {
      name: product.name,
      id: product.id,
      price: product.price,
      currency: 'BRL',
      image: product.imageUrl,
      defaultPriceId: product.defaultPriceId,
    }

    const cart = Object.keys(cartDetails)
    const productExistInCart = cart.find((id) => id === product.id)

    if (!productExistInCart) {
      addItem(productToCart)
      toast.success(`Você adicionou ${product.name}  ao carrinho`)
    } else {
      toast.error('Esse item já está no seu carrinho!')
    }
  }

  if (isFallback) {
    return <SkeletonProduct />
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button onClick={handleAddItemToCart}>Comprar Agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Megb5cfLTR2vLM' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        priceFormatted: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
