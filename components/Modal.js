import { useState, useEffect} from "react";
import  ReactDOM  from "react-dom";
import styles from "../styles/Modal.module.css";



export default function Modal({show, onClose, children}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  const modalContent = show ? (
    <div className={styles.overlay} onClick={handleClose} >
      <div className={styles.modal}>
        <div className={styles.header}>
            <button onClick={handleClose} className="h-[40px] w-[40px] flex justify-center items-center absolute -top-5 -right-5">
            <svg fill="#000" width="30px" height="30px" x="0px" y="0px" viewBox="0 0 252 252" >
              <g>
                <path d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
                  c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"/>
                <path d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
                  c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
                  c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
                  s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
                  C168.127,96.601,168.127,90.902,164.612,87.388z"/>
              </g>
              </svg>
            </button>
        </div>
        <div className={styles.body}>{ children }</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}