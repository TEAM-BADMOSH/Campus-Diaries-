
import "./App.css";
import SignUp from "./Components/SignUpPage/SignUp.jsx";
import Login from "./Components/LoginPage/Login.jsx";
import { Navigate , Routes , Route } from "react-router-dom";
import Query from "./Components/Querypage/Query.jsx"
import Home from "./Home.jsx";
import DashBoard from "./Components/DashBoard/DashBoard.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />}>
              <Route path="query" element={<Query />} />
              <Route path="dashboard" element = {<DashBoard/>}/>
              <Route index element={<Query />} /> {/* Default child route */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
