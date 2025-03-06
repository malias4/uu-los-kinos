import { AppBar, Box, Container, MenuItem, Toolbar, Typography, Menu, IconButton, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useGetUsernameById } from "../api/useGetUsernameById";
import { useUserContext } from "../providers/hooks/useUserContext";

export const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [username, getUsername] = useGetUsernameById();
    const navigate = useNavigate();
    const { userId } = useUserContext();

    useEffect(() => {
        if (userId) {
            const asyncCall = async () => await getUsername(userId);
            asyncCall().then();
        }
    }, [getUsername, userId]);

    const onLogout = async () => {
        localStorage.removeItem('token');
        
        navigate('/');
        window.location.reload();
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [{
        name: 'Domů',
        path: '/'
    }, {
        name: 'Filmy',
        path: '/movies/list'
    }, 
    ...(userId ? [{ name: 'Moje rezervace', path: `/reservations/${userId}` }] : []),
    ];

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography variant="h2">Los Kinos</Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Button
                                        key={page.name}
                                        onClick={() => navigate(page.path)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => navigate(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {
                        username == undefined ?
                            <Stack direction='row' spacing={2}>
                                <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
                                <Button variant="contained" onClick={() => navigate('/register')}>Register</Button>
                            </Stack>
                            :
                            <Stack direction='row' spacing={3} alignItems={'center'}>
                                <Typography variant="h5" border='2px solid #A24936' padding={1} borderRadius={1}>{username}</Typography>
                                <Button variant='contained' onClick={onLogout}>Logout</Button>
                            </Stack>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};