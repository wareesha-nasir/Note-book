import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import { CardHeader, Divider } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  
  });

const Notes=({notes,setNotes})=>{
  const classes = useStyles();

  return (
<div>
    {notes.map((note)=>(
    <Card className={classes.root}>
        
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
    ))  
}
</div>
  );
}




export default Notes;