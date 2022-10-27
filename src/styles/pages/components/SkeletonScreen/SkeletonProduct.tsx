import { styled } from '../../..'

export const SkeletonContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const SkeletonContent = styled('div', {
  display: 'flex',
  gap: '4.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    div: {
      marginTop: 'auto',
    },
  },

  '& + &': {
    marginLeft: '2rem',
  },
})
