// "use client"

// import { ReactNode, createContext, useContext, useState } from "react"

// interface ModalContextType {
//   isModalOpen: boolean
//   openModal: (content: ReactNode) => void
//   closeModal: () => void
//   modalContent: ReactNode
// }
// const ModalContext = createContext<ModalContextType | undefined>(undefined)

// export const ModalProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [modalContent, setModalContent] = useState(null)

//   const openModal = (content) => {
//     setModalContent(content)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setModalContent(null)
//   }

//   return (
//     <ModalContext.Provider
//       value={{ isModalOpen, openModal, closeModal, modalContent }}
//     >
//       {children}
//     </ModalContext.Provider>
//   )
// }

// export default function useModal() {
//   const context = useContext(ModalContext)
//   if (!context) {
//     throw new Error("useAuthContext must be used within an AuthProvider")
//   }
//   return context
// }
