import ReactDOM from "react-dom";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

const Modal = function ({ handleModal }) {
  return ReactDOM.createPortal(
    <div className="flex md:justify-center items-end md:items-center inset-0 fixed">
      <div
        onClick={() => handleModal()}
        className="inset-0 fixed bg-gray-200 opacity-60"
      ></div>
      <div
        className="border-2 border-gray-300
       relative bg-white opacity-1 md:w-[50%] p-5 text-center"
      >
        <h3>Hello stranger! 👋</h3>
        <p>This is your first visit to my site and I wanted to welcome you! </p>
        <p>
          You can search for movies that you like -- maybe series in the future
          -- and add them to your favourites.
        </p>
        <p>
          Please keep in mind that this is a pet project of mine and it&#39;s
          still a <strong>work in progress</strong>! It&#39;s meant only for
          demonstration purposes. It&#39;s written in{" "}
          <a
            className="text-info underline"
            href="https://react.dev/"
            target="_blank"
          >
            React.js
          </a>{" "}
          and{" "}
          <a
            className="text-info underline"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            tailwindCss
          </a>
          . The source code can be found at{" "}
          <a
            className="text-info underline"
            href="https://github.com/todorito/MovieDB-project"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
        <div className="absolute right-0 top-0">
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
