import {Drawer, IconButton, styled} from "@mui/material";
import Sidebar from "./SideBar.jsx";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

function Layout() {
    const theme = createTheme({
    });

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Root>
                {isSmallScreen ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{position: "absolute", top: 0, left: 0}}
                    >
                        <MenuIcon/>
                    </IconButton>
                ) : (
                    <DrawerContainer
                        variant="permanent"
                        sx={{
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        <DrawerPaper>
                            <Sidebar/>
                        </DrawerPaper>
                    </DrawerContainer>
                )}

                <Content
                    sx={{
                        flexGrow: 1,
                        p: 5,
                        width: '100%',
                        maxWidth: '100%',
                    }}
                >
                    <Outlet/>
                </Content>

                {isSmallScreen && (
                    <Drawer
                        variant="temporary"
                        open={open}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        <DrawerPaper>
                            <Sidebar/>
                        </DrawerPaper>
                    </Drawer>
                )}
            </Root>
        </ThemeProvider>
    );
}

const drawerWidth = 240;

const Root = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
});

const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '@media (max-width: 600px)': {
        display: 'none',
    },
});

const DrawerPaper = styled('div')({
    width: drawerWidth,
    display: 'flex',
    justifyContent: 'center',
});

const Content = styled(Box)({
    flexGrow: 1,
    padding: (theme) => theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '15px',
    '@media (max-width: 600px)': {
        padding: (theme) => theme.spacing(20),
    },
});

export default Layout;
