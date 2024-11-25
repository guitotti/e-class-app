import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginTeacher";
import LoginStudent from "./pages/LoginStudent";
import Register from "./pages/Register";
import StudentTaskList from "./pages/StudentTaskList";
import StudentsList from "./pages/StudentsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/login/student" element={<LoginStudent/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/student/tasks" element={<StudentTaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
