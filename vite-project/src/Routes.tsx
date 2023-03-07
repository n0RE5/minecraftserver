import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import StartPage from "./pages/StartPage";
import { MAIN_PATH, START_PATH, AUTH_PATH, PROFILE_PATH } from "./utils/RoutePaths";

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
    }
]