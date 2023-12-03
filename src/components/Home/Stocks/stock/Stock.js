import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { redirect } from 'react-router-dom';

const Stock = ({stock}) => {

  const navigate = useNavigate();

  const onClick = (event) => {
    event.preventDefault();
    console.log(stock);
    navigate(`/home/list/${stock.id}`)
  }

  return (
    <Card  sx={{ border: '3px solid orange', borderRadius : '20px', m: 1, p: 4,  display: 'block'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SYM: {stock.symbol}
        </Typography>
        <Typography variant="h4" component="div">
          {stock.name}
        </Typography>
        <Typography color="text.secondary">
          Sector: {stock.sector}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="success" size="large" onClick={onClick}> Charts </Button>
      </CardActions>
    </Card>
  )
}

export default Stock