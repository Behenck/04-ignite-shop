import { styled } from '../..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Button = styled('button', {
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  color: '$gray400',
  cursor: 'pointer',
  transition: 'color 0.2s',
  position: 'relative',

  '&:hover': {
    color: '$gray300',
  },
})

export const ButtonQuantityInCart = styled(Button, {
  '&::before': {
    content: 'attr(data-notification)',
    position: 'absolute',
    background: '$green500',
    color: '$white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '1.5rem',
    height: '1.5rem',
    top: '-0.75rem',
    right: '-0.75rem',
    fontSize: '0.875rem',
    border: '3px solid $gray900',
  },
})
