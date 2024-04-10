import Favorites from "./Components/Favorites"
import Home from "./Components/Home"
import Orders from "./Components/Orders"
import Profile from "./Components/Profile"



const routes = [
    {path:'/',element:<Home/>},
    {path: "/orders", element: <Orders/> },
    {path: "/favorites", element: <Favorites /> },
    {path: "profile", element: <Profile /> },


]

export default routes