import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import UserInformation from "./pages/UserInformation";
import AllCheques from "./pages/AllCheques";
import ChequeDetails from "./pages/ChequeDetails";
import Report from "./pages/Report";
import ReportExport from "./pages/ReportExport";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cm-admin/" element={<SignIn />} />
          <Route path="/cm-admin/sign-up" element={<SignUp />} />
          <Route path="/cm-admin/dashboard" element={<Dashboard />} />
          <Route path="/cm-admin/user-list" element={<UserList />} />
          <Route path="/cm-admin/user-information" element={<UserInformation />} />
          <Route path="/cm-admin/all-cheques" element={<AllCheques />} />
          <Route path="/cm-admin/cheque-details" element={<ChequeDetails />} />
          <Route path="/cm-admin/report" element={<Report />} />
          <Route path="/cm-admin/export-report" element={<ReportExport />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
