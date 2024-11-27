import type { ReactNode, FC } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import styles from "./Modal.module.css";

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
      className={styles.modalPosition}
    >
      <DialogBackdrop className={styles.backdrop} />
      <div className={styles.modalWrapper}>
        <DialogPanel className={styles.modalPanel}>{children}</DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
