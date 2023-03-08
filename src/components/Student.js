
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button, } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' ,backgroundColor:"wheat"};
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [numStudents, setNumStudents] = useState(0);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch('http://localhost:8080/student/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then(() => {
        console.log('New Student added');
        setNumStudents(numStudents + 1);
      });
  };
  const handleUpdate = (id) => {
    const student = students.find((s) => s.id === id);
    const updatedName = prompt('Enter updated name:', student.name);
    const updatedAddress = prompt('Enter updated address:', student.address);
    const updatedStudent = {
      id: student.id,
      name: updatedName,
      address: updatedAddress,
    };
    fetch('http://localhost:8080/student/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStudent),
    })
      .then(() => {
        setNumStudents(numStudents + 1);
      });
  };
  

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/student/delete?id=${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNumStudents(numStudents + 1);
      });
  };
  

  useEffect(() => {
    fetch('http://localhost:8080/student/get')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, [numStudents]);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'black' }}><u>Add Student</u></h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
         
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Adress"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      <h1>Students</h1>
      {students.map((student) => (
        <Paper elevation={3} style={paperStyle} key={student.id}>
          <div className="output">
            <div style={{ paddingRight: 50 }}>
              Id      :
              {student.id}
              <br />
              Name     :
              {student.name}
              <br />
              Address:
              {student.address}
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 25, marginLeft: 200 }}
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </Button>
              <br/>
              <Button
  variant="contained"
  color="secondary"
  style={{ marginTop: 25, marginLeft: 200 }}
  onClick={() => handleUpdate(student.id)}
>
  Update
</Button>

            </div>
          </div>
        </Paper>
      ))}
    </Container>
  )
      }