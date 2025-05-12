"use client";

import { ModalProvider, useModal } from "@/context/Modal";
import { QuoteModal } from "../Modals/Quote";
import classNames from "classnames";

type ButtonComponent = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonComponent> = ({ children, ...props }) => {
  const { open } = useModal();

  return (
    <button
      onClick={() => open(<QuoteModal />)}
      {...props}
      className={classNames(
        "max-w-[380px] w-full h-[44px] sm:h-[48px] rounded bg-white flex items-center justify-center font-semibold text-[18px] text-[var(--primary)] hover:bg-gray-50 transition cursor-pointer",
        props.className
      )}
    >
      {children}
    </button>
  );
};

const ProvidedButton: React.FC<ButtonComponent> = ({ children, ...props }) => (
  <ModalProvider>
    <Button {...props}>{children}</Button>
  </ModalProvider>
);

export { ProvidedButton as QuoteButton };
