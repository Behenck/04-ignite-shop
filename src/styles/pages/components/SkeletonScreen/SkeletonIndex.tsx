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
  flexDirection: 'column',
  gap: '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '& + &': {
    marginLeft: '2rem',
  },
})
