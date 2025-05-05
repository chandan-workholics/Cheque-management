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
import Setting from "./pages/Setting";
import ForgetPassword from "./pages/ForgetPassword";
import ProtectedRoute from "./pages/Common_Method/protectedroute";
import ForgetPasswordVerification from "./pages/ForgetPasswordVerification";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/cheque-management/" element={<SignIn />} />
          <Route path="/cheque-management/sign-up" element={<SignUp />} />
          <Route path="/cheque-management/dashboard" element={<ProtectedRoute element={<Home />}/>} />
          <Route path="/cheque-management/cheques" element={<ProtectedRoute element={<Cheques />}/>} />
          <Route path="/cheque-management/cheque-details/:id" element={<ProtectedRoute element={<ChequeDetails />}/>} />
          <Route path="/cheque-management/report" element={<ProtectedRoute element={<Report />}/>} />
          <Route path="/cheque-management/export-report" element={<ProtectedRoute element={<ReportExport />}/>} />
          <Route path="/cheque-management/user" element={<ProtectedRoute element={<User />}/>} />
          <Route path="/cheque-management/support" element={<ProtectedRoute element={<Support />}/>} />
          <Route path="/cheque-management/verify-otp" element={<Otp />} />
          <Route path="/cheque-management/verify-email" element={<VerifyEmail />} />
          <Route path="/cheque-management/email-verification-expired" element={<VerifyEmailExpired />} />
          <Route path="/cheque-management/email-verification-successfully" element={<VerifyEmailSuccess />} />
          <Route path="/cheque-management/my-ticket" element={<ProtectedRoute element={<MyTicket />}/>} />
          <Route path="/cheque-management/setting" element={<ProtectedRoute element={<Setting />}/>} />
          <Route path="/cheque-management/forget-password" element={<ForgetPassword/>}/>
          <Route path="/cheque-management/forget-password-verification" element={<ForgetPasswordVerification/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
