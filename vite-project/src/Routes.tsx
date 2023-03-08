import { Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import StartPage from "./pages/StartPage";
import ErrorPage from "./pages/ErrorPage";
import { MAIN_PATH, START_PATH, AUTH_PATH, PROFILE_PATH, ERROR_PATH } from "./utils/RoutePaths";

export const auth_routes = [
    {
        path: PROFILE_PATH,
        element: <ProfilePage/>
    }
]

export const public_routes = [
    {
        path: MAIN_PATH,
        element: <MainPage/>
    },
    {
        path: START_PATH,
        element: <StartPage/>
    },
    {
        path: AUTH_PATH,
        element: <AuthPage />
    },
    {
        path: ERROR_PATH,
        Component: <ErrorPage/>
    },
    {
        path: '*',
        Component: <Navigate to="/error" replace />
    }
]
