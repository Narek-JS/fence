"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { X } from "lucide-react";

interface Props {
  children: ReactNode;
}

type ModalContextType = {
  open: (content: ReactNode) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const open = (content: ReactNode) => setModalContent(content);
  const close = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 py-5"
          onClick={close}
        >
          <div className="container mx-auto flex justify-center">
            <div
              className="relative max-w-[600px] w-full bg-white rounded-lg p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <X
                className="absolute top-2.5 right-2 cursor-pointer"
                onClick={close}
                size={28}
              />
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

export { ModalProvider, useModal };
