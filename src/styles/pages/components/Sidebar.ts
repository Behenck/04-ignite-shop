import { styled } from '../..'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  padding: '3rem',
  width: '100%',
  maxWidth: 540,
  height: '100%',

  position: 'fixed',
  top: '0',
  right: '0',
  transform: 'translate(-0%, -0%)',

  boxShadow: 'rgba(0, 0, 0, 0.45) -20px 5px 20px -10px',
})
export const Title = styled(Dialog.Title, {
  marginTop: '4.5rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray100',
})

export const CartContainer = styled('div', {
  marginTop: '2rem',
  height: '85%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'stretch',
})
export const CartContent = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    span: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },

    strong: {
      fontSize: '1.25rem',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: '0.5rem',

      border: 0,
      background: 'transparent',
      color: '$green500',
      fontWeight: 'bold',
      cursor: 'pointer',

      fontSize: '1rem',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 94,
  height: 94,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartDetails = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
      color: '$gray300',
    },

    'span:nth-child(2n)': {
      fontSize: '1.25rem',
    },

    strong: {
      fontSize: '1.25rem',
    },

    'strong:nth-child(2n)': {
      fontSize: '1.5rem',
    },
  },
})

export const FinalizedCartButton = styled('button', {
  backgroundColor: '$green500',
  color: '$gray100',
  padding: '1.5rem',
  border: 0,
  borderRadius: 8,

  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginTop: '3.5rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$green300',
  },
})
