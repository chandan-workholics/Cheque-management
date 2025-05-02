import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cm-admin/" element={<SignIn />} />
          <Route path="/cm-admin/sign-up" element={<SignUp />} />
          <Route path="/cm-admin/dashboard" element={<Dashboard />} />
          <Route path="/cm-admin/user-list" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
