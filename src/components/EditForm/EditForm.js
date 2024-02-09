// EditForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from "axios";

const EditForm = ({ staff, onCancel, onSave }) => {
  const [formData, setFormData] = useState(staff);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async() => {
      try {
      const url="abc";
        let response = await axios.put(url, formData);

        // sending back to update the states , to close the edit box
        onSave(formData);
        alert("Updated successfully");
        // console.log(response.data);
      } catch (error) {
        if (error.response) {
          alert("error in Updateding the agent");
        }
      }
    };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available Day"
            name="availableDay"
            value={formData.availableDay}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available From"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Available To"
            name="availableTo"
            value={formData.availableTo}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" style={{ marginRight: '8px' }} onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditForm;
