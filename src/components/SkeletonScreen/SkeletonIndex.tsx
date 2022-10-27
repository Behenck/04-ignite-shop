import { useKeenSlider } from 'keen-slider/react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  SkeletonContainer,
  SkeletonContent,
} from '../../styles/pages/components/SkeletonScreen/SkeletonIndex'

export function SkeletonIndex() {
  const skeletonSliderQuantity = [
    { quantity: 1 },
    { quantity: 2 },
    { quantity: 3 },
  ]

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  return (
    <SkeletonContainer ref={sliderRef} className="keen-slider">
      <SkeletonTheme baseColor="#202024" highlightColor="#26262b">
        {skeletonSliderQuantity.map((skeleton) => {
          return (
            <SkeletonContent key={skeleton.quantity}>
              <Skeleton count={1} width={540} height={600} />
              <div>
                <Skeleton count={1} width={280} height={32} />
                <Skeleton count={1} width={80} height={32} />
              </div>
            </SkeletonContent>
          )
        })}
      </SkeletonTheme>
    </SkeletonContainer>
  )
}
