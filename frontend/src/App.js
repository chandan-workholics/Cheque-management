import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Cheques from "./pages/Cheques";
import ChequeDetails from "./pages/ChequeDetails";
import Report from "./pages/Report";
import ReportExport from "./pages/ReportExport";
import User from "./pages/User";
import Support from "./pages/Support";
import Otp from "./pages/Otp";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyEmailExpired from "./pages/VerifyEmailExpired";
import VerifyEmailSuccess from "./pages/VerifyEmailSuccess";
import MyTicket from "./pages/MyTicket";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/cheque-management/" element={<SignIn />} />
          <Route path="/cheque-management/sign-up" element={<SignUp />} />
          <Route path="/cheque-management/dashboard" element={<Home />} />
          <Route path="/cheque-management/cheques" element={<Cheques />} />
          <Route path="/cheque-management/cheque-details" element={<ChequeDetails />} />
          <Route path="/cheque-management/report" element={<Report />} />
          <Route path="/cheque-management/export-report" element={<ReportExport />} />
          <Route path="/cheque-management/user" element={<User />} />
          <Route path="/cheque-management/support" element={<Support />} />
          <Route path="/cheque-management/verify-otp" element={<Otp />} />
          <Route path="/cheque-management/verify-email" element={<VerifyEmail />} />
          <Route path="/cheque-management/email-verification-expired" element={<VerifyEmailExpired />} />
          <Route path="/cheque-management/email-verification-successfully" element={<VerifyEmailSuccess />} />
          <Route path="/cheque-management/my-ticket" element={<MyTicket />} />
          <Route path="/cheque-management/forget-password" element={<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
