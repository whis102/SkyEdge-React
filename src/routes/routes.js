import config from "../config"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
]