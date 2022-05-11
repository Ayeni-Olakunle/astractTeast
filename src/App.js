import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import User from "./components/User/User";
import AddTask from "./components/User/add-task";
import AllTask from "./components/User/all-task";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/Admin-Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />}>
          <Route path="add-task">
            <Route index={true} element={<AddTask />} />
            <Route path="all-task">
              <Route index={true} element={<AllTask />} />
            </Route>
          </Route>
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
