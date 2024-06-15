import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const myRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        return myRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={myRef} className="p-4">
      {children}
      <form method="dialog">
        <button className="font-bold text-white bg-stone-800 py-[10px] px-[20px] rounded-md">
          Okay!
        </button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
