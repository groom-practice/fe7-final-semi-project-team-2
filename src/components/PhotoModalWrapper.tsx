"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function PhotoModalWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <Dialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) router.back()
      }}>
      <DialogContent className="max-w-4xl p-5 overflow-hidden">
        <DialogTitle className="sr-only">사진 상세보기</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  )
}
