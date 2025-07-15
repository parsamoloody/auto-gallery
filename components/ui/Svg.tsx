import Image from 'next/image'
import React from 'react'
import svg from '../../public/assets/svg/rounding.svg'
import { cn } from '@/lib/utils'

interface SvgProps {
  cls?: string,
  w: string
}

const Svg: React.FC<SvgProps> = ({ cls, w }) => {
    const width = Number(w)
  return (
    <Image
      className={cn('absolute -z-40', cls)}
      src={svg}
      width={width}
      alt=""
      priority
    />
  )
}

export default Svg
