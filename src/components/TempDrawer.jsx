import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, List, ListItem, makeStyles } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import ListItemText from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'

const useStyles = makeStyles({
    listItem:{
        marginLeft:"200px",fontSize:"14px",fontWeight:"500",color:"grey"
    }
})

function TempDrawer() {
    const classes = useStyles()
    const [state,setState] = useState({
        left:false
    })
    const toggleDrawer = (anchor,open)=>(event)=>{
        setState({...state,[anchor]:open})
    } 
    const list = (anchor)=>(
        <div style={{width:"250px"}} role='presentation'>
               <List>
            <ListItem>
                <ListItemText style={{fontSize:"48px",marginLeft:"5px"}}>
                    <span style={{color:"blue",fontWeight:"700",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>G</span>
                    <span style={{color:"red",fontWeight:"500",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>o</span>
                    <span style={{color:"yellow",fontWeight:"500",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>o</span>
                    <span style={{color:"blue",fontWeight:"500",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>g</span>
                    <span style={{color:"green",fontWeight:"500",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>l</span>
                    <span style={{color:"red",fontWeight:"500",fontSize:"22px",marginRight:"10px", fontFamily:"'Roboto', Arial, sans-serif"}}>e</span>
                    
                    <span style={{color:"#5f6368",fontWeight:"500",fontSize:"22px",fontFamily:"'Roboto', Arial, sans-serif"}}>Docs</span>
                </ListItemText>
            </ListItem>

           </List>
           <Divider />
        </div>
    )
  return (
    <>
        <IconButton onClick={toggleDrawer("left",true)}>
            <MenuIcon/>
        </IconButton>
        <Drawer open = {state['left']} onClose={toggleDrawer("left",false)} anchor={'left'} >
        {list("left")}
        </Drawer>
    </>
  )
}

export default TempDrawer