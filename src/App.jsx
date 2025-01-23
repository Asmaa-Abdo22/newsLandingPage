import "./App.css";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import World from "./Components/World/World";

const myRouter = createHashRouter([
  { path: "*", element: <h1>404 page not found</h1> },
  { path: "/", element: <Layout />,children:[
    {index:"world" , element:<World/>}
  ] },
 
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
