import Image from "next/image"
import type { FC } from "react"

interface PhotoDetailsProps {
  src: string
  alt: string
  photographer: {
    name: string
  }
}

const PhotoDetails: FC<PhotoDetailsProps> = ({ src, alt, photographer }) => {
  return (
    <div className="overflow-hidden bg-white flex justify-between">
      <div>
        <Image
          src={src}
          width={500}
          height={500}
          alt={alt}
          className="object-cover"
        />
      </div>

      <div className="h-full w-fit text-right p-2">
        <span>author by</span>
        <h3 className="text-2xl font-semibold text-gray-800">
          {photographer.name}
        </h3>
      </div>
    </div>
  )
}

export default PhotoDetails
