import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function DisheSkeleton() {
  return (
    <SkeletonTheme baseColor='#ccc' highlightColor='#eee'>
      <div>
        <Skeleton count={1} height={200} width="100%" style={{marginBottom: "20px"}} />
        <div className='relative mb-2'>
        <Skeleton count={1} height={24} width="40%" inline={true} />
        <Skeleton count={1} height={24} width="50%" inline={true} style={{marginLeft: "40%"}} />
        </div>
        <Skeleton count={1} height={24} width="50%"/>
      </div>
    </SkeletonTheme>
  )
}