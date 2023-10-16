import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="ModalContainer">{children}</div>,
    document.getElementById("modal-position")
  );
}

export { Modal };
