// src/DynamicForm.js
import React, { useState } from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ ingredient: '', quantity: '', measurement: '' }]);

  const handleAddField = () => {
    setFields([...fields, { ingredient: '', quantity: '', measurement: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    if(name == "quantity" && value >= 0){
      newFields[index][name] = value;
      setFields(newFields);
    }
    if(name != "quantity"){
      newFields[index][name] = value;
      setFields(newFields);
    }
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', fields);
    // Reset form fields after submission
    setFields([{ ingredient: '', quantity: '', measurement: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Grid container spacing={2} key={index} style={{ padding: '10px' }}>
          <Grid item xs={4}>
            <TextField
              name="ingredient"
              label="Ingredient Name"
              value={field.ingredient}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="quantity"
              label="Quantity"
              type="number"
              value={field.quantity}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="measurement"
              label="Measurement"
              select
              value={field.measurement}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            >
              <MenuItem value="table-spoon">table spoon</MenuItem>
              <MenuItem value="tea-spoon">tea spoon</MenuItem>
              <MenuItem value="cup">cup</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" onClick={() => handleRemoveField(index)}>
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
      <Button color="primary" onClick={handleAddField}>Add</Button>
      <Button type="submit" color="primary">Submit</Button>
    </form>
  );
};

export default DynamicForm;
