import Dashboard from "../pages/lender/dashboard/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadManagement from "../pages/lender/leadManagement/LeadManagement";
import Setting from "../pages/lender/setting/Setting";
export default function LenderRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/lender/dashboard" element={<Dashboard />}></Route>
        <Route path="/lender/lead-management" element={<LeadManagement />}></Route>
        <Route path="/lender/setting" element={<Setting />}></Route>
      </Routes>
    </Router>
  );
}
