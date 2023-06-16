import { useRef } from "react";
import './styles/snackbar.css'

export const useSnackbar = () => {
  const snackbarContent = useRef(null);
  const info = useRef(null);


  const Snackbar = ({ children }) => (
    <div id="snackbar" ref={snackbarContent}>
      {children}
      <div ref={info}></div>
    </div>
  )

  const showSnackbar = (message) => {
    info.current.innerHTML = (typeof message === 'string') ? "Error: " + message : "";
    setTimeout(() => {
      const x = snackbarContent.current;
      x.className = "show";
      setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
    }, 0);
  }

  return [Snackbar, showSnackbar];
}