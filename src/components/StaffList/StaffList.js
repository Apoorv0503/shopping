// StaffList.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StaffList = ({staffList}) => {

    // const staffList=[
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "email": "john@example.com",
    //       "availableFrom":"9",
    //       "availableTo":"12",
    //       "availableDay":"monday"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "email": "jane@example.com",
    //       "availabeFrom":"12",
    //       "availabeTo":"15",
    //       "availableDay":"monday"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Bob Johnson",
    //       "email": "bob@example.com",
    //       "availabe_froavailableFrom":"9",
    //       "availableTo":"12",
    //       "availableDay":"sunday"
    //     },
    //     // Add more staff members as needed
    //   ]
    

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
              {/* Add more fields as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffList;
