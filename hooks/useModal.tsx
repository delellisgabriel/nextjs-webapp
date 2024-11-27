import Modal from "@/components/shared/Modal";
import { ReactNode, useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = () => setIsOpen(false);

  return {
    openModal,
    Modal: ({ children }: { children: ReactNode }) => (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {children}
      </Modal>
    ),
  };
};

export default useModal;
