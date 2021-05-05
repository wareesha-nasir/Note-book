import {React} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Dialog,DialogTitle,DialogContent, makeStyles,Button,TextField} from '@material-ui/core';
import { FormLabel } from 'react-bootstrap';


const useStyles=makeStyles(theme=>({
    dialogWrapper:{
    padding:theme.spacing(5),
      width: '70%',
      
},
}))

export default function Popup(props){
    const {openPopup,setOpenPopup,notes,setNotes,title,setTitle,content,setContent}=props;
    
const classes=useStyles;

  const handleSubmit=(e)=>{
e.preventDefault()
setNotes([...notes,{id:uuidv4(),name:title,note1:content}])
setOpenPopup(false)
setTitle("")
setContent("")
  } 

    return(
        <Dialog open={openPopup} fullWidth maxWidth="xs" classes={{paper:classes.dialogWrapper}} >
            <DialogTitle>
                <div  >
                Add new list
                <Button onClick={()=>setOpenPopup(false)} style={{float:"right"}}>X</Button></div>
                </DialogTitle>
            <DialogContent dividers>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <FormLabel><strong>Title</strong></FormLabel><br/>
            <TextField id="outlined-basic" label="heading" variant="outlined" onChange={(e)=>{
                setTitle(e.target.value)}} value={title}
            /><br/>
                <FormLabel>Notes</FormLabel><br/>
            <TextField id="outlined-basic" label="add new note" variant="outlined" 
            onChange={(e)=>{setContent(e.target.value)}} value={content}/>
             <Button type="submit">Add Note</Button>     
                               </form>
      
       
              
            </DialogContent>
        </Dialog>
    )

    }