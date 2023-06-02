import { useRef } from "react";
import './styles/snackbar.css'

export const useSnackbar = () => {
  const snackbarContent = useRef(null);

  const Snackbar = ({ children }) => (
    <div id="snackbar" ref={snackbarContent}>{children}</div>
  )

  const showSnackbar = () => {
    const x = snackbarContent.current;
    x.className = "show";
    setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
  }

  return [Snackbar, showSnackbar];
}