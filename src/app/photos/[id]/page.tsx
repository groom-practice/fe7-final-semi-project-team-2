import { getPhoto } from "@/api/fakeImageApi"
import PhotoDetails from "@/components/PhotoDetails"

import { Photo } from "@/types/photos"
import { notFound } from "next/navigation"

type PageParams = Promise<{ id: string }>

export default async function PhotoDetailPage({
  params,
}: {
  params: PageParams
}) {
  const { id } = await params
  const response = await getPhoto(id)

  if (response.status === 404) {
    notFound()
  }

  const photo = (await response.json()) as Photo

  return (
    <div className="p-6">
      <PhotoDetails
        src={photo.download_url}
        alt={photo.author}
        photographer={{
          name: photo.author,
        }}
      />
    </div>
  )
}
