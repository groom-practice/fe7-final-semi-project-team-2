import Link from "next/link"
import Image from "next/image"
import { getPhotos } from "@/api/fakeImageApi"
import { Photo } from "@/types/photos"

export default async function PhotosPage() {
  const response = await getPhotos()
  const photos = (await response.json()) as Photo[]

  console.log(response)
  console.log(photos)

  return (
    <div className="grid grid-cols-3 place-items-center gap-4 p-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="aspect-1 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <Link href={`/photos/${photo.id}`}>
            <Image
              src={photo.download_url}
              width={600}
              height={600}
              alt={photo.author}
              className="h-full object-cover object-center"
              placeholder="blur"
              blurDataURL={photo.download_url}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
