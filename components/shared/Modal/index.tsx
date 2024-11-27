import type { ReactNode, FC } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => closeModal()}
      style={{
        position: "relative",
        zIndex: "50",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogPanel>{children}</DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
