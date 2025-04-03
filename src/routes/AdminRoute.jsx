import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import MainDashboard from "../pages/admin/dashboard/MainDashboard";
import HomeBuyer from "../pages/admin/dashboard/homeBuyer/HomeBuyer";
import Realtor from "../pages/admin/dashboard/realtor/Realtor";
import Loan from "../pages/admin/dashboard/loan/Loan";
import HomeOwner from "../pages/admin/dashboard/homeOwner/HomeOwner";
import Lender from "../pages/admin/dashboard/lender/Lender";
import UserRealtor from "../pages/admin/dashboard/userRealtor/UserRealtor";
import Setting from "../pages/admin/dashboard/setting/Setting";
  
const AdminRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<MainDashboard />} />
        <Route path="/admin/home-buyers" element={<HomeBuyer />} />
        <Route path="/admin/realtors" element={<Realtor />} />
        <Route path="/admin/loan" element={<Loan />} />
        <Route path="/admin/home-owners" element={<HomeOwner />} />
        <Route path="/admin/lenders" element={<Lender />} />
        <Route path="/admin/user-realtor" element={<UserRealtor />} />
        <Route path="/admin/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
};
export default AdminRoute;
