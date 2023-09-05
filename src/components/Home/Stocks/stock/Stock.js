import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Stock = () => {
  return (
    <Card  sx={{ border: '3px solid orange', borderRadius : '20px', m: 1, p: 4,  display: 'block'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SYM
        </Typography>
        <Typography variant="h4" component="div">
          Item1
        </Typography>
        <Typography color="text.secondary">
          Sector
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="success" size="large"> Charts </Button>
      </CardActions>
    </Card>
  )
}

export default Stock