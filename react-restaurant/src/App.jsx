import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Menu from "./Pages/Menu/Menu";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./components/Auth/Login";
import Home from "./Pages/Home/Home";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageUsers from "./components/Admin/Manage/ManageUser/ManageUsers";
import ManageMane from "./components/Admin/Manage/ManageMenu/ManageMenu";
import AdminLayout from "./components/Admin/AdminLayout";
import ManageCategories from "./components/Admin/Manage/ManageCategories/ManageCategories";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* define the oute name */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-menu" element={<ManageMane />} />
          <Route path="manage-categories" element={<ManageCategories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//react - hooks: useState, useNavigate, useEffect, useContext, useParams
// costome hook : useThing.js
