import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


let routes = createBrowserRouter([
  {
    path:"",
    element: <Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/About',element:<About/>},
      {path:'/Projects',element:<Projects/>},
      {path:'/Contact',element:<Contact/>},
    ]
  }
])
function App() {
  return (
    <> 
            
                <RouterProvider router={routes}></RouterProvider>
            
    </>
  );
}

export default App;
