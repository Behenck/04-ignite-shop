import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product, ProductInfo } from '../styles/pages/home'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import 'react-loading-skeleton/dist/skeleton.css'

import { Handbag } from 'phosphor-react'
import { useRouter } from 'next/router'

import { useShoppingCart } from 'use-shopping-cart'
import toast from 'react-hot-toast'

import { SkeletonIndex } from '../components/SkeletonScreen/SkeletonIndex'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
  priceFormatted: string
  defaultPriceId: string
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const { isFallback } = useRouter()

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  const { cartDetails, addItem } = useShoppingCart()

  function handleAddItemToCart(product: ProductProps) {
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
    return <SkeletonIndex />
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`}>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
              </Link>

              <footer>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{product.priceFormatted}</span>
                </ProductInfo>

                <button onClick={() => handleAddItemToCart(product)}>
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceFormatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
