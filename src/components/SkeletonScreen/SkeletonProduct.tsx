import { useKeenSlider } from 'keen-slider/react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  SkeletonContainer,
  SkeletonContent,
} from '../../styles/pages/components/SkeletonScreen/SkeletonProduct'

export function SkeletonProduct() {
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
        <SkeletonContent>
          <Skeleton count={1} width={540} height={656} />
          <div>
            <Skeleton count={1} width={520} height={45} />
            <Skeleton count={1} width={124} height={45} />
            <Skeleton count={1} width={520} height={174} />
            <div>
              <Skeleton count={1} width={520} height={70} />
            </div>
          </div>
        </SkeletonContent>
      </SkeletonTheme>
    </SkeletonContainer>
  )
}
