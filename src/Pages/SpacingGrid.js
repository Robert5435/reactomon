import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 140,
    width: 100,
  },
  media: {
    height: 140
  },
  paper:{
    padding: 10,
    width: 500,
    margin: 'auto',
    backgroundColor: 'grey'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default  function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };



  return (
    <Paper elevation={3} className={classes.paper}>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={9}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              
              <Card className="card">
                <CardActionArea>
                  <CardContent>
                    <Typography>Aici apare</Typography>
                    <CardMedia image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className={classes.media} />
                  </CardContent>
                </CardActionArea>
              </Card>
              <div></div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </Paper>
  );
}
