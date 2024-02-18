import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import services from '../services';

const Leaderboard = () => {
  const [leaderboard, setleaderboard] = useState([])
  useEffect(() => {
    services.getLeaderBoard().then((res)=>{
      console.log(res);
      setleaderboard(res);
    });
  }, [])
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emission</TableCell>
            <TableCell>Recipe Name</TableCell>
            <TableCell>User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard.map((recipe, index) => (
            <TableRow key={index}>
              <TableCell>{recipe.emission}</TableCell>
              <TableCell>{recipe.name}</TableCell>
              <TableCell>User Name</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
