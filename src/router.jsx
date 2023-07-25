import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./utils/urls";
import { Layout } from "./components/layout";
import { Login } from "./components/pages/LogReg/login";
import { Registration } from "./components/pages/LogReg/registration";
import { TaskInfo } from "./components/pages/tasks/taskInfo";
import { Tasks } from "./components/pages/tasks/tasks";
import { ADMLayout } from "./components/pages/ADM/ADMLayout";
import { ADMTasks } from "./components/pages/ADM/tasks/tasks";
import { ADMUsers } from "./components/pages/ADM/users/users";
import { HomePage } from "./components/pages/home/home";
import { Requests } from "./components/pages/ADM/users/Requests/Requests";
import { Users } from "./components/pages/ADM/users/Users/Users";
import { Unusers } from "./components/pages/ADM/users/Unusers/Unusers";
import { YandexAuth } from "./components/pages/LogReg/yandexAuth";
import { Profile } from "./components/pages/profile/profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ADMLayout />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        path: '/yandexAuth',
        element: <YandexAuth />
      },
      {
        path: PATHS.rating,
        element: <></>
      },
      {
        index: true,
        element: <></>,
      },
      {
        path: PATHS.userAuth, // Для обычных пользователей
        element: <Registration />, 
      },
      {
        path: PATHS.tasks,  // Задачи (для обычных пользователей)
        element: <Tasks /> ,
      },
      {
        path: '/tasks/:id', // Для обычных пользователей
        element: <TaskInfo />,
      },
      {
        path: PATHS.profile, // Профиль (для обычных пользователей)
        element: <Profile />
      },
      {
        path: PATHS.login, // Для обычных пользователей
        element: <Login />
      },
      {
        path: PATHS.register, // Для обычных пользователей
        element: <Registration />
      },
      {
        path: PATHS.adminTasks, // Администрация задач (для админов)
        element:  <ADMTasks />
      },
      {
        path: PATHS.adminRequests,
        element: <Requests />
      },
      {
        path: PATHS.adminUsers,
        element: <Users />
      },
      {
        path: PATHS.adminUnusers,
        element: <Unusers />
      },
      {
        path: "*",
        element: <>NotFoundPage</>,
      }
      
    ]
  },
]);