// ScheduleForm.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ScheduleForm = () => {
    const [formData, setFormData] = React.useState({
     day:'',
     date:'',
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc
    console.log("formData: ",formData);
    
    // Example: Call an API to perform scheduling logic
    // api.scheduleStaff(scheduleData);
  };

  return (
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
  );
};

export default ScheduleForm;
