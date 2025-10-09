import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/app details/AppDetails";
import MyInstallation from "../pages/my installation/MyInstallation";
import ErrorPage from "../pages/error page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('../../public/appData.json').then(res => res.json())
      },
      {
        path: '/Apps',
        Component: Apps,
        loader: () => fetch('../../public/appData.json').then(res => res.json())
      },
      {
        path: '/App-Details/:appId',
        Component: AppDetails,
        loader: () => fetch('../../public/appData.json').then(res => res.json())
      },
      {
        path: '/My-Installation',
        Component: MyInstallation,
        loader: () => fetch('../../public/appData.json').then(res => res.json())
      }
    ]
  },
]);


