import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// 1. Define your components
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

// 2. Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

// 3. Provide it to your App
export default function App() {
  return <RouterProvider router={router} />;
}