import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/SignUpPage/SignUp";
import Home from "./Home";
import Query from "./Components/Querypage/Query";
import DashBoard from "./Components/DashBoard/DashBoard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./Components/AuthContex/AuthContex";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protect all routes under /home */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}>
            <Route path="query" element={<Query />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route index element={<Query />} /> {/* Default child route */}
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
