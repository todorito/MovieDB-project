import ReactDOM from "react-dom";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

const Modal = function ({ handleModal }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => handleModal()}
        className="inset-0 fixed bg-gray-200 opacity-60"
      ></div>
      <div
        className="border-2 border-gray-300 md:inset-[30%] md:inset-y-[40%] inset-x-[10%] inset-y-[30%]
       fixed bg-white opacity-1 m-auto p-3 md:pt-[3%] pt-20 text-center"
      >
        Hello stranger! This is your first visit in our site and we wanted to
        welcome you! You can find info for movies and series that you like and
        add them to your favourites.
        <div className="absolute right-0 bottom-0">
          <Button danger onClick={() => handleModal()}>
            <IoClose />
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default Modal;
