// StaffList.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StaffList = ({staffList}) => {
    const onEdit=async()=>{
        try {
            const url="abc";
              let response = await axios.patch(url, formData);
              alert("updated successfully");
              // console.log(response.data);
            } catch (error) {
              if (error.response) {
                alert("error in updating the agent");
              }
            }
    }

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
                <Button variant="outlined" color="primary" onClick={() => onEdit(staff.id)}>
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
    </TableContainer>
  );
};

export default StaffList;
