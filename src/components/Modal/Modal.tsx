import React from "react";
import styles from "./Modal.module.scss";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={onClose}>
        <IoClose />
      </span>
      <img className={styles.content} src={src} alt={alt} />
    </div>
  );
};

export default Modal;
