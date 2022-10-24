import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    background: '$gray800',
    border: 0,
    borderRadius: 6,
    padding: '0.75rem',
    color: '$gray400',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$gray300',
    },

    '&::before': {
      content: '10',
      position: 'absolute',
      background: '$green500',
      color: '$white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: '1.5rem',
      height: '1.5rem',
      top: '0',
      right: '19rem',
    },
  },
})
