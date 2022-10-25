import { styled } from '../..'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  padding: '3rem',
  width: '100%',
  maxWidth: 480,
  height: '100%',

  position: 'fixed',
  top: '0',
  right: '0',
  transform: 'translate(-0%, -0%)',
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
})
export const CartContent = styled('div', {})
