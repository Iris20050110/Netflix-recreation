import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import AccountPage from "./pages/AccountPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  const router = createBrowserRouter([{ 
    path: "",
    element: <MainLayout />, 
    children: [{path: "/", element: <HomePage />}, 
      {path: "/signin", element: <SignInPage />},
      {path: "/signup", element: <SignUpPage />},
      {path: "/account", element: <ProtectedRoute><AccountPage /></ProtectedRoute>},
    ]}]);

  return <RouterProvider router={router} />;
}

export default App;
