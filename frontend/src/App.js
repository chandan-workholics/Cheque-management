import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Checks from "./pages/Checks";
import CheckDetails from "./pages/CheckDetails";
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
import Profile from "./pages/Profile";
import MobileAddCheck from "./pages/MobileAddCheck";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/check-management/" element={<SignIn />} />
          <Route path="/check-management/sign-up" element={<SignUp />} />
          <Route path="/check-management/dashboard" element={<ProtectedRoute element={<Home />}/>} />
          <Route path="/check-management/checks" element={<ProtectedRoute element={<Checks />}/>} />
          <Route path="/check-management/check-details/:id" element={<ProtectedRoute element={<CheckDetails />}/>} />
          <Route path="/check-management/report" element={<ProtectedRoute element={<Report />}/>} />
          <Route path="/check-management/export-report" element={<ProtectedRoute element={<ReportExport />}/>} />
          {/* <Route path="/check-management/user" element={<ProtectedRoute element={<User />}/>} /> */}
          <Route path="/check-management/support" element={<ProtectedRoute element={<Support />}/>} />
          <Route path="/check-management/verify-otp" element={<Otp />} />
          <Route path="/check-management/verify-email" element={<VerifyEmail />} />
          <Route path="/check-management/email-verification-expired" element={<VerifyEmailExpired />} />
          <Route path="/check-management/email-verification-successfully" element={<VerifyEmailSuccess />} />
          <Route path="/check-management/my-ticket" element={<ProtectedRoute element={<MyTicket />}/>} />
          {/* <Route path="/check-management/setting" element={<ProtectedRoute element={<Setting />}/>} /> */}
          <Route path="/check-management/forget-password" element={<ForgetPassword/>}/>
          <Route path="/check-management/forget-password-verification" element={<ForgetPasswordVerification/>}/>
          <Route path="/check-management/profile" element={<Profile/>}/>
          <Route path="/check-management/upload-check" element={<MobileAddCheck/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
