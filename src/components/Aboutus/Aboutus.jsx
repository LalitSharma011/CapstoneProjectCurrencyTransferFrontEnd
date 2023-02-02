import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

export default function MultiActionAreaCard() {


  return (
    <div className='user-aboutus my-4'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
    <Card sx={{ maxWidth: 500 }}>
    <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mobile App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Just download the NatWest Currency Wallet Mobile app and then forget about carrying cash or cards.
          </Typography>
        </CardContent>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://source.unsplash.com/900x600/?money"
          alt="green iguana"
        />
        
      </CardActionArea>
      
    </Card>
    </div>


    <div className="col-12 col-md-6">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://source.unsplash.com/900x600/?currency"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Desktop App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We have the app for your laptops as well. Just install and see how much faster it is from the conventional Net Banking and with added features. Try now.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>

    </div>
    </div>

<div className="container my-4">
  <div className="row">
    <div className="col">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/900x600/?market"
          alt="green iguana"
        />
        
      </CardActionArea>
    </Card>
    </div>

    <div className="col">
    <Card sx={{ maxWidth: 500 }}>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/900x600/?social"
          alt="green iguana"
        />
        
      </CardActionArea>
    </Card>

    </div>
    </div>
    </div>
    </div>
  );
}
