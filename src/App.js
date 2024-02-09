// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import StaffList from './components/StaffList/StaffList';
import StaffForm from './components/StaffForm/StaffForm';
import AssignedAgent from './components/EditForm/EditForm';

function App() {



  
  return (
    <div className="App">           
        <Router> {/* Wrap everything with Router */}
        <Routes>
          <Route path="/" element={<ScheduleForm />} />
          <Route path="/stafflist" element={<StaffList/>} />
          <Route path="/staffform" element={<StaffForm />} />
          <Route path="/assignedagent" element={<AssignedAgent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
