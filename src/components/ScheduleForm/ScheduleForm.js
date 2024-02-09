// ScheduleForm.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import AssignedAgent from '../AssignedAgent/AssignedAgent';
import StaffList from '../StaffList/StaffList';


const ScheduleForm = () => {
    const [formData, setFormData] = React.useState({
        day: '',
        time: '',
        // Add more fields as needed
      });
    
      const [assignedAgent, setAssignedAgent] = React.useState(false);
      const [staffList, setStaffList] = React.useState([]); // State to store the fetched staff list
     
       // Simulate fetching the staff list from an API (replace with your actual API call)
       const fakeStaffList = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "9",
          availableTo: "12",
          availableDay: "monday",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "9",
          availableTo: "12",
          availableDay: "monday",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "12",
          availableTo: "15",
          availableDay: "sonday",
        },
    ]
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc
    console.log("formData: ",formData);

  
      // show available agents details, later hm real data ka response use krege
    //   const url="abc";
    //   let reponse=axios.get("");
    //   setStaffList(reponse.data);

    // Update the state with assigned agent details and fetched staff list
    setAssignedAgent(true);
    setStaffList(fakeStaffList);

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
            Search Staff
          </Button>
        </Grid>
      </Grid>
    </form>

    {/* Conditionally render AssignedAgent component if an agent is assigned */}
    {assignedAgent && <StaffList staffList={staffList}/>}

    </div>
  );
};

export default ScheduleForm;
