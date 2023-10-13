import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UserCard = (props) => {
    const user=props.user;
    console.log(user.firstname)
  return (
    <Card variant="outlined" style={{ width: 600, margin: '0 auto', marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Account Information
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <strong>First Name:</strong> {user.firstname}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <strong>Last Name:</strong> {user.lastname}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <strong>Mobile:</strong> {user.mobile}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
