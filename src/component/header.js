import React,{useState} from 'react';
import {Navbar,Button} from 'react-bootstrap'
import Popup from './popup'
import Notes from './Notes';
const Header=()=>{
  const [openPopup, setOpenPopup]=useState(false);
  const [notes,setNotes]=useState([]);
  const [title,setTitle]=useState([])
  const [content,setContent]=useState([])
  
    return(
      <div>
        <div>
 <Navbar style={{backgroundColor:"rgb(4, 4, 61)"}} variant="dark">
    <Navbar.Brand href="#home" style={{fontSize:"25px"}}>
      NOTE BOOK</Navbar.Brand>
    
      <div style={{marginLeft:"auto", display:"block"}}>
      <Button variant="outline-info" 
      onClick={()=>setOpenPopup(true)} >
    Create Notes</Button>
   </div>
  </Navbar>
  </div>
  <Popup openPopup={openPopup}
  setOpenPopup={setOpenPopup}
  notes={notes}
  setNotes={setNotes}
  title={title}
  setTitle={setTitle}
  content={content}
  setContent={setContent}/>
  <div>
    <Notes
    setNotes={setNotes}
    notes={notes}
    />
  </div>
  </div>
        )  
}
export default Header;