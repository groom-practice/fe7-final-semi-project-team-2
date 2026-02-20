import { getPhoto } from "@/api/fakeImageApi"
import PhotoDetails from "@/components/PhotoDetails"
import PhotoModalWrapper from "@/components/PhotoModalWrapper"
import { notFound } from "next/navigation"

type PageParams = Promise<{ id: string }>

export default async function PhotoModal({ params }: { params: PageParams }) {
  const { id } = await params
  const response = await getPhoto(id)

  if (response.status === 404) notFound()

  const photo = await response.json()

  return (
    <PhotoModalWrapper>
      <PhotoDetails
        src={photo.download_url}
        alt={photo.author}
        photographer={{ name: photo.author }}
      />
    </PhotoModalWrapper>
  )
}
