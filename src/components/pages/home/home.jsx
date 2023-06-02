import { useState } from "react"
import { useSnackbar } from "../../../customHooks/useSnackbar"
import './home.css'

export const HomePage = () => {
  const [Snackbar, showSnackbar] = useSnackbar()
  return (
    <>
      <Snackbar message="message">
        <button onClick={showSnackbar}>show me snackbar</button>
      </Snackbar>
    </>
  )
}