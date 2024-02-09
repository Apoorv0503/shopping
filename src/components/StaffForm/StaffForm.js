// StaffForm.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const StaffForm = () => {
  const [formData, setFormData] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions such as sending the data to the server, updating state, etc.
    console.log('Staff Form Submitted:', formData);
    // Example: Call an API to save the staff information
    // api.saveStaff(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
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
