import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { AuthService } from "../services/authService";
import { useUser } from "../store/userStore";
import { Header } from "./header/header";
/*
import { Footer } from "./footer/footer";
import { Loader } from "./ui/loader/loader";
*/
export const Layout = () => {
  const { state } = useNavigation();
  const setUser = useUser.getState().setUser;
  useEffect(() => {
    AuthService.checkAuth()
    .then((data) => {
      setUser(data);
    })
  }, [])
  return (
    <div className="wrapper">
      <Header />
      {state !== "idle" ? <>Loader </> : null}
      <main className="page">
        {/*<Outlet></Outlet>*/}
      </main>
      {/*<>Footer </>*/}
    </div>
  );
};
