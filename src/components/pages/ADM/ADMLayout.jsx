import { Outlet } from "react-router-dom";
import { useUser } from "../../../store/userStore";
import { ADMSideBar } from "./uiComponents/sideBar";

export const ADMLayout = () => {
  const userRole = useUser((state) => state.role);

  return (
    <div style={{display: "flex"}}>
      <ADMSideBar />
      {
        userRole === 'admin' ?
          <Outlet></Outlet>
          :
          <>NotFoundErrorPage</>
      }
    </div>
  )
};
