// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import StaffList from './components/StaffList/StaffList';
import StaffForm from './components/StaffForm/StaffForm';

function App() {

  const staffList=[
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
      // Add more fields as needed
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
      // Add more fields as needed
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com"
      // Add more fields as needed
    },
    // Add more staff members as needed
  ]


  
  return (
    <div className="App">           
        <Router> {/* Wrap everything with Router */}
        <Routes>
          <Route path="/" element={<ScheduleForm />} />
          <Route path="/stafflist" element={<StaffList staffList={staffList} />} />
          <Route path="/staffform" element={<StaffForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
