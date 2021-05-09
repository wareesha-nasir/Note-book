import {React} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Dialog,DialogTitle,DialogContent, makeStyles,Button,TextField} from '@material-ui/core';
import { FormLabel } from 'react-bootstrap';
import './popup.css'

const useStyles=makeStyles(theme=>({
    dialogWrapper:{
    padding:theme.spacing(5),
      width: '70%',
     height:'70%' 
},

}))

export default function Popup(props){
    const {openPopup,setOpenPopup,notes,setNotes,title,setTitle,content,setContent}=props;
    
const classes=useStyles;

  const handleSubmit=(e)=>{
e.preventDefault()
const date=new Date()
var currentdate=date.toLocaleDateString()
setNotes([...notes,{id:uuidv4(),name:title, note1:content,date:currentdate}])
setOpenPopup(false)
setTitle("")
setContent("")
  } 

    return(
        <Dialog open={openPopup} fullWidth maxWidth="xs" classes={{paper:classes.dialogWrapper}} >
            <DialogTitle>
                <div  >
                Create New Note
                <Button onClick={()=>setOpenPopup(false)} style={{float:"right"}}>X</Button></div>
                </DialogTitle>
            <DialogContent dividers>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <FormLabel className="label"><strong>Title</strong></FormLabel><br/>
            <TextField id="outlined-basic" label="heading" variant="outlined" className="text-field"
            onChange={(e)=>{
                setTitle(e.target.value)}} value={title}
            /><br/>
                <FormLabel className="label"><strong>Notes</strong></FormLabel><br/>
            <TextField id="outlined-basic" label="add new note" variant="outlined" className="text-field"
            onChange={(e)=>{setContent(e.target.value)}} value={content}/><br/>
             
             <Button type="submit" color="primary" className="add-btn" variant="outlined">
                 Add Note
                 </Button>     
                               </form>
      
       
              
            </DialogContent>
        </Dialog>
    )

    }