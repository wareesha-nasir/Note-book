import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import { CardHeader, Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    
    Notes: {
      maxWidth: 350,
   backgroundColor:"rgb(44, 236, 188)"
    },
    root: {
        flexGrow: 1,
        margin:'15px'
      },
  });

const Notes=({notes,setNotes})=>{
  const classes = useStyles();

  return (
<div className={classes.root}>
    <Grid container spacing={3}>
    
    {notes.map((note)=>(
        <Grid item xs={12} sm={6} md={3}>
    <Card key={note.id} className={classes.Notes} id="note-card"   >
        
      <CardActionArea>
          <CardHeader title={note.name}>
              
          </CardHeader>
          <Divider/>
        <CardContent >
         {note.note1}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined">
          Delete
        </Button>
      </CardActions>
        
    </Card>
     
    </Grid>
    ))
}

</Grid>
</div>
  );
}




export default Notes;