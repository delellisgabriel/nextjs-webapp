import { act, render, screen, fireEvent } from "@testing-library/react";
import useModal from "./useModal";

const buttonText = "Open Modal";
const modalContent = "🤡";

const TestModal = () => {
  const { Modal, openModal } = useModal();

  return (
    <div>
      <button onClick={() => openModal()}>{buttonText}</button>
      <Modal>{modalContent}</Modal>
    </div>
  );
};

describe("Modal", () => {
  it(`should open Modal after clicking on ${buttonText} button`, async () => {
    render(<TestModal />);
    const buttonElement = screen.getByText(buttonText);
    await act(() => fireEvent.click(buttonElement));
    expect(screen.getByText(modalContent)).toBeInTheDocument();
  });
});
