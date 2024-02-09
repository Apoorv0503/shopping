// StaffForm.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Correct import

const StaffForm = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    availableDay: '',
    availableFrom: '',
    availableTo: '',
  });

  const PostAgent = async () => {
    try {
    const url="abc";
      let response = await axios.post(url, formData);
      alert("Added successfully");
      // console.log(response.data);
    } catch (error) {
      if (error.response) {
        alert("error in creating the agent");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc.
    console.log('Staff Form Submitted:', formData);
    
     // make post req here to backend api
    //   PostAgent();

     //routing back to the staff list
     navigate("/stafflist");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={(e) =>handleChange(e)}
          />
         </Grid>
         <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>handleChange(e)}
          />
         </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available Day"
            name="availableDay"
            value={formData.availableDay}
            onChange={(e) =>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available From"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={(e) =>handleChange(e)}
          />
         </Grid>
         <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available To"
            name="availableTo"
            value={formData.availableTo}
            onChange={(e) =>handleChange(e)}
          />
        </Grid> 
        {/* Add more fields as needed */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default StaffForm;
