import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import {
  HomeContainer,
  Product,
  ProductInfo,
  SkeletonContainer,
} from '../styles/pages/home'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Handbag } from 'phosphor-react'
import { useRouter } from 'next/router'

import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const { isFallback } = useRouter()
  const skeletonSliderQuantity = [1, 2, 3]

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  const { addItem, cartDetails } = useShoppingCart()

  function handleAddItemToCart(product: ProductProps) {
    const productToCart = {
      name: product.name,
      id: product.id,
      price: product.price,
      currency: 'BRL',
      image: product.imageUrl,
    }

    addItem(productToCart)
    console.log(cartDetails)
  }

  if (isFallback) {
    return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        <SkeletonTheme baseColor="#202024" highlightColor="#26262b">
          {skeletonSliderQuantity.map((skeleton) => {
            return (
              <SkeletonContainer key={skeleton[0]}>
                <Skeleton count={1} width={540} height={600} />
                <div>
                  <Skeleton count={1} width={280} height={32} />
                  <Skeleton count={1} width={80} height={32} />
                </div>
              </SkeletonContainer>
            )
          })}
        </SkeletonTheme>
      </HomeContainer>
    )
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />

                <footer>
                  <ProductInfo>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </ProductInfo>

                  <button onClick={() => handleAddItemToCart(product)}>
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
