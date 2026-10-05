import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Home from "./pages/Home";
import Cisco from "./pages/Cisco";
import Fortinet from "./pages/Fortinet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AccountPending from "./pages/AccountPending";
import PendingApproval from "./pages/PendingApproval";
import RegisterPage from "./pages/RegisterPage";

import SchedulerGate from "./pages/SchedulerGate";
import SchedulerPage from "./pages/SchedulerPage";
import SchedulerAccessGuard from "./components/SchedulerAccessGuard";
import Placeholder from "./pages/Placeholder";
import CCIEWirelessEquipment from "./pages/CCIEWirelessEquipment";
import CCIESecurityEquipment from "./pages/CCIESecurityEquipment";
import CCIEDataCenterEquipment from "./pages/CCIEDataCenterEquipment";
import FortinetFcx8Equipment from "./pages/FortinetFcx8Equipment";
import CCIEEIEquipment from "./pages/CCIEEIEquipment";

// ADMIN
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminBookings from "./pages/admin/Bookings";
import PurchaseHistory from "./pages/PurchaseHistory";
import CreditHistory from "./pages/CreditHistory";
import BuyCredits from "./pages/BuyCredits";
import Reports from "./pages/admin/Reports";
import Reschedules from "./pages/admin/Reschedules";
import SystemNotices from "./pages/admin/SystemNotices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
 return (
  <>
    <Routes>

      {/* ================= PUBLIC + AUTH ================= */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cisco" element={<Cisco />} />
        <Route path="/fortinet" element={<Fortinet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/terms-and-conditions"
  element={<TermsConditions />}
/>

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/account-pending" element={<AccountPending />} />
        <Route path="/pending-approval" element={<PendingApproval />} />
         <Route path="/ccie-wireless-equipment" element={<CCIEWirelessEquipment />} />
         <Route path="/ccie-security-equipment" element={<CCIESecurityEquipment />} />
         <Route path="/ccie-data-center-equipment" element={<CCIEDataCenterEquipment />} />
          <Route path="/fortinet-fcx8-equipment" element={<FortinetFcx8Equipment />} />
        <Route path="/ccie-ei-equipment" element={<CCIEEIEquipment />} />
      </Route>

      {/* ================= ADMIN ================= */}
      {/* <Route path="/admin" element={<AdminLayout />}> */}
      <Route
      path="/admin"
      element={
      <AdminProtectedRoute>
       <AdminLayout />
      </AdminProtectedRoute>
     }
    >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="reports" element={<Reports />} />
          <Route path="system-notices" element={<SystemNotices />} />
            <Route path="reschedules" element={<Reschedules />} />
      </Route>

      {/* ================= DYNAMIC ================= */}
      <Route path="/:slug/calendar" element={<SchedulerAccessGuard><SchedulerPage /></SchedulerAccessGuard>} />
      <Route path="/:slug" element={<SchedulerGate />} />
      <Route path="/purchase-history" element={<PurchaseHistory />} />
      <Route path="/credits" element={<CreditHistory />} />
      <Route path="/buy-credits" element={<BuyCredits />} />

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Placeholder />} />
      

    </Routes>

    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
  </>
);
}
