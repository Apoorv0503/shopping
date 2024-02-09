// ScheduleForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import { TextField, Button, Grid } from '@mui/material';
import AssignedAgent from '../AssignedAgent/AssignedAgent';

const ScheduleForm = () => {
    const [formData, setFormData] = React.useState({
     day:'',
     date:'',
    });

    const [assignedAgent, setAssignedAgent] = React.useState(null); // State to store assigned agent details

    // to route back to the staffList
    let navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc
    console.log("formData: ",formData);
    
    // Example: Call an API to perform scheduling logic
    // api.scheduleStaff(scheduleData);

   
      // Simulate assigning an agent based on the form data (replace with your actual logic)
      const fakeAssignedAgent = {
        name: 'John Doe',
        email: 'john@example.com',
        // Add more fields as needed
      };
  
      // Update the state with assigned agent details
      setAssignedAgent(fakeAssignedAgent);

       //routing back to the staff list
    navigate("/assignedagent");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Day"
            name="day"
            value={formData.day}
            onChange={(e) =>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Time"
            name="time"
            value={formData.time}
            onChange={(e) =>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Assign Staff
          </Button>
        </Grid>
      </Grid>
    </form>

    {/* Conditionally render AssignedAgent component if an agent is assigned */}
    {assignedAgent && <AssignedAgent agent={assignedAgent} />}

    </div>
  );
};

export default ScheduleForm;
