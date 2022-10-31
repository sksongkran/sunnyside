import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {};

function DrawerComp({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Services</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
