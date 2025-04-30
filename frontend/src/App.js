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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cheque-management/" element={<SignIn />} />
          <Route path="/cheque-management/sign-up" element={<SignUp />} />
          <Route path="/cheque-management/dashboard" element={<Home />} />
          <Route path="/cheque-management/cheques" element={<Cheques />} />
          <Route path="/cheque-management/cheque-details" element={<ChequeDetails />} />
          <Route path="/cheque-management/report" element={<Report />} />
          <Route path="/cheque-management/export-report" element={<ReportExport />} />
          <Route path="/cheque-management/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
