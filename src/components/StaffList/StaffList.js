// StaffList.js
import React, { useEffect } from 'react';
import axios from "axios";
import { TextField, Button, Grid, Box } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditForm from '../EditForm/EditForm';

const StaffList = ({staffList}) => {
    // const[] make a state to store the list when this component is called after submitting the agent creation form, no prop was sent from there hence 
    // have to use: useEffect here and make a get request to fetch the list to agents to show
    const fakeStaffList = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "9",
          availableTo: "12",
          availableDay: "Monday",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "9",
          availableTo: "12",
          availableDay: "Monday",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john@example.com",
          availableFrom: "9",
          availableTo: "12",
          availableDay: "Monday",
        },
      ];

   
        const [isEditing, setIsEditing] = React.useState(false);
        const [editedStaff, setEditedStaff] = React.useState(null);


        const onEdit = (staffId) => {
            // Set the staff to be edited and toggle the editing state
            const staffToEdit = staffList.find((staff) => staff.id === staffId);
            setEditedStaff(staffToEdit);
            setIsEditing(true);
          };
        
          const onCancelEdit = () => {
            // Clear the edited staff and toggle the editing state
            setEditedStaff(null);
            setIsEditing(false);
          };
        
          const onSaveEdit = (editedData) => {
            // Implement save/edit logic here
            console.log('Saving edited staff:', editedData);
            // Update the staffList or send data to the server
        
            // Clear the edited staff and toggle the editing state
            setEditedStaff(null);
            setIsEditing(false);
          };

        //   when list loaded for the first time:
        useEffect(async()=>{
            let url="get url here";
            let response = await axios.get(url);
            //   alert("fatched successfully");
            //   console.log(response.data);

        },[])

    const onDelete=async()=>{
        try {
            const url="abc";
            const id="id of the agent to delete"
              let response = await axios.delete(url, id);
              alert("deleted successfully");
              // console.log(response.data);
            } catch (error) {
              if (error.response) {
                alert("error in deleting the agent");
              }
            }
    }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Availabe From</TableCell>
            <TableCell>Availabe To</TableCell>
            <TableCell>Availabe Day</TableCell>
            {/* Add more fields as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {staffList.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>{staff.availableFrom}</TableCell>
              <TableCell>{staff.availableTo}</TableCell>
              <TableCell>{staff.availableDay}</TableCell>
              <TableCell>
                {/* Edit Button */}
                <Button variant="outlined" color="primary" style={{ marginRight: '8px' }} onClick={() => onEdit(staff.id)}>
                  Edit
                </Button>
                {/* Delete Button */}
                <Button variant="outlined" color="secondary" onClick={() => onDelete(staff.id)}>
                  Delete
                </Button>
              </TableCell>
              {/* Add more fields as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Render the EditForm if editing */}
      {isEditing && (
        <Box mt={5} border={1} p={2} borderColor="primary.main">
          <EditForm staff={editedStaff} onCancel={onCancelEdit} onSave={onSaveEdit} />
        </Box>
      )}
    </TableContainer>
  );
};

export default StaffList;
