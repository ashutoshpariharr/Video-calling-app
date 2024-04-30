import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { ReactNode } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

interface propsDialog {
  isOpen: boolean
  onClose: () => void
  handleClick: () => void
  title: string
  image?: string
  buttonTitle?: string
  children?: ReactNode
  buttonIcon?: string
}

function MeetingDialog({ isOpen, onClose, handleClick, title, buttonTitle, image, children }: propsDialog) {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-slate-800 text-white p-5 border-none flex flex-col items-center justify-center">
          {image && (
            <Image
              src={image}
              alt="meeting"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          {children}
          <h1 className="text-xl">{title}</h1>
          <Button onClick={handleClick} className="bg-blue-1 cursor-pointer ring-0 w-full p-3 rounded-md flex items-center justify-center">{buttonTitle}</Button>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default MeetingDialog
