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
          <TableCell> <strong>User Name</strong></TableCell>
          <TableCell><strong>Recipe Name</strong></TableCell>
            <TableCell><strong>Emission</strong></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard.map((recipe, index) => (
            index < 5 && 
            <TableRow key={index}>
              <TableCell>User Name</TableCell>
              <TableCell>{recipe.name}</TableCell>
              <TableCell>{recipe.emission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
