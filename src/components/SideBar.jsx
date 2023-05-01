import {Home as HomeIcon} from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import RestoreIcon from '@mui/icons-material/Restore';
import {Drawer, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <Drawer variant="permanent">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
            </Link>
            <Link to="/done" style={{textDecoration: 'none', color: 'black'}}>
                <ListItemButton>
                    <ListItemIcon>
                        <RestoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Restore todos"/>
                </ListItemButton>
            </Link>
            <Link to="/info" style={{textDecoration: 'none', color: 'black'}}>
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Info"/>
                </ListItemButton>
            </Link>
        </Drawer>
    );
};

export default Sidebar;
