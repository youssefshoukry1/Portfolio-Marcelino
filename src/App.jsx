import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

let query = new QueryClient()
let routes = createBrowserRouter([
  {
    path:"",
    element: <Layout/>,
    children:[
      {path:'/',element:<Home/>}
    ]
  }
])
function App() {
  return (
    <> 
            <QueryClientProvider client={query}>
                <RouterProvider router={routes}></RouterProvider>
            </QueryClientProvider>
    </>
  );
}

export default App;
