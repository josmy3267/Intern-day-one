import { Box, Button, formControlClasses, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  const [counter,setCounter]=useState(0);
  const [form,setForm]=useState(
    {
      "name":'',
      "adm" :'',
      "Department" :'',
       "Semester"  :'',
        })
        let showData=()=>{
          console.log(form);
        }
  // let valueAdd=()=>{
  //   setcounter(counter+1);
  // }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        
        id="outlined-error"
        label="Required"
        textColor="primary"
        defaultValue="name"
        name="name"
        value={form.name}
        onChange={valueCap}
      /><br/>
       <TextField
        
        id="outlined-error"
        label="Required"
        textColor="primary"
        defaultValue="adm"
        
        name="adm"
        value={form.adm}
        onChange={valueCap}
      
      /><br/>
       <TextField
        
        id="outlined-error" 
        label="Required"
        textColor="primary"
        defaultValue="Department"
        name="Department"
        
        onChange={valueCap}
        value={form.Department}
      /><br/>
       <TextField
        
        id="outlined-error"
        label="Required" 
        textColor="primary"
        defaultValue="Semester"
        name="Semester"
        
        onChange={valueCap}
        value={form.Semester}
      /><br/>
    </div>
    <Button variant="contained" color="success" onClick={showData}>Submit</Button><br/>
    {/* <small>Button is clicked {counter} times</small> */}
  </Box>
  );
}

export default Add