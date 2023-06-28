import { Outlet } from "react-router-dom";
import { useUser } from "../../../store/userStore";
import { ADMSideBar } from "./uiComponents/sideBar";
import { Layout } from "../../layout";

export const ADMLayout = () => {
  const userRole = useUser((state) => state.role);

  return (
    <div>
      <Layout/>
      <div style={{display: "flex"}}>
      <ADMSideBar />
      <Outlet></Outlet>
      {/*
        userRole === 'admin' ?
          <Outlet></Outlet>
          :
          <>NotFoundErrorPage</>
  */}
    </div>
    </div>
    
  )
};
