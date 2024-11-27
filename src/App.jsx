import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginTeacher";
import LoginStudent from "./pages/LoginStudent";
import Register from "./pages/Register";
import StudentTaskList from "./pages/StudentTaskList";
import StudentsList from "./pages/StudentsList";
import StudentPage from "./pages/StudentPage";
import RegisterStudent from "./pages/RegisterStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/student" element={<LoginStudent/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/student/tasks" element={<StudentTaskList />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/register/student" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
