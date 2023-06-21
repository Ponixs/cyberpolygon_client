import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./utils/urls";
import { Layout } from "./components/layout";
import { Login } from "./components/pages/LogReg/login";
import { Registration } from "./components/pages/LogReg/registration";
import { Materials } from "./components/pages/materials/materials";
import { TaskInfo } from "./components/pages/tasks/taskInfo";
import { Tasks } from "./components/pages/tasks/tasks";
import { ADMLayout } from "./components/pages/ADM/ADMLayout";
import { ADMTasks } from "./components/pages/ADM/tasks/tasks";
import { ADMUsers } from "./components/pages/ADM/users/users";
import { HomePage } from "./components/pages/home/home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.tasks,
        element: <Tasks />,
      },
      {
        path: '/tasks/:id',
        element: <TaskInfo />,
      },
      {
        path: PATHS.materials,
        element: <Materials />,
      },
      {
        path: PATHS.profile,
        element: <>Profile</>
      },
      {
        path: PATHS.login,
        element: <Login />
      },
      {
        path: PATHS.register,
        element: <Registration />
      },
      {
        path: PATHS.admin,
        element: <ADMLayout />,
        errorElement: <>ErrorPage</>,
        children: [
          {
            path: PATHS.admin + PATHS.tasks,
            element: <ADMTasks />,
          },
          {
            path: PATHS.admin + PATHS.users,
            element: <ADMUsers />,
          },
        ]
      },
      {
        path: "*",
        element: <>NotFoundPage</>,
      }
    ],
  },
]);
