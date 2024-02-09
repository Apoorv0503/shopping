// ScheduleForm.js
import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import StaffList from '../StaffList/StaffList';
import axios from "axios";

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

const GetAgent=async()=>{
   
        try {
        const url="abc";
          let response = await axios.get(url);
        //   alert("fatched successfully");
          console.log(response.data);
        //   setStaffList(actual_data);
        } catch (error) {
          if (error.response) {
            alert("error in fetching the agent");
          }
        
      };
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc
    console.log("formData: ",formData);

  
      // show available agents details, later hm real data ka response use krege
    await GetAgent();

    // Update the state with assigned agent details and fetched staff list
    setAssignedAgent(true);

// for  now just dummy data
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
