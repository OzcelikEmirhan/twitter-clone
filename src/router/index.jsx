import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notification from "../pages/notification";
import NotFound from "../pages/notfound";
import MainLayout from "../layouts/mainlayout";
import Bookmarks from "../pages/bookmarks";
import Communities from "../pages/communities";
import Lists from "../pages/lists";
import Messages from "../pages/messages";
import Premium from "../pages/premium";
import Profile from "../pages/profile";

const routes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                index: true,
                element : <Home/>
            },
            {
                path : "explore",
                element : <Explore/>
            },
            {
                path : "notification",
                element : <Notification/>
                },
            {
                path : "bookmarks",
                element : <Bookmarks/>
                },
            {
                path : "communities",
                element : <Communities/>
                },
                {
                path : "lists",
                element : <Lists/>
                },
                {
                path : "messages",
                element : <Messages/>
                },
                {
                path : "premium",
                element : <Premium/>
                },
                {
                path : "profile",
                element : <Profile/>
                },
            {
                path : "*",
                element : <NotFound/>
            }
            
        ]
    }
    
        
])

export default routes