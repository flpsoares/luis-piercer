import { createContext, ReactNode, useState } from 'react'

interface ModalContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  )
}
