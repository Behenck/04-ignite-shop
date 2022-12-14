import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  a: {
    color: '$gray-100',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.5rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    button: {
      width: 56,
      height: 56,
      border: 0,
      borderRadius: 6,
      backgroundColor: '$green500',
      color: '$gray-100',
      transition: 'all 0.2s ease-in-out',
      padding: '0.75rem',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  strong: {
    fontSize: '$lg',
    color: '$gray-100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})
