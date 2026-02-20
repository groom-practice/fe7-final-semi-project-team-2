"use server"

export const getPhotos = async () => {
  const url = new URL("https://picsum.photos/v2/list")

  return await fetch(url, {
    next: {
      revalidate: 86400,
    },
  })
}

export const getPhoto = async (id: string) => {
  return await fetch(`https://picsum.photos/id/${id}/info`, {
    next: {
      revalidate: 86400,
    },
  })
}
