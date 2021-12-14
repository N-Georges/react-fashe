import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';



const colorNav =  grey[800]

const Header = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line
    const [notifCart, setNotifCart] = useState(1)
    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{pt:2}} style={{ background: '#fff' }}>
                    <Toolbar mt={5}>
                        <Typography
                            onClick={() => {navigate("/") }}
                            className='navlogo'
                            color='common.black'
                            variant="h6"
                            fontSize={35}
                            fontWeight='bold'
                        >
                            Fashe<span>.</span>
                        </Typography>
                        <Container sx={{display:'flex', justifyContent:'center', textAlign:'center'}}>
                            <Typography
                                onClick={() => {navigate("/")}}
                                className='navlink'
                                variant="h6"
                                noWrap
                                component="div"
                                color={colorNav}
                                sx={{ display: { xs: 'none', sm: 'block' }, mr:3 }}
                            >
                                Home
                            </Typography>
                            <Typography
                                onClick={() => {navigate("/product")}}
                                className='navlink'
                                variant="h6"
                                noWrap
                                component="div"
                                color={colorNav}
                                sx={{ display: { xs: 'none', sm: 'block' }, mr:3 }}
                            >
                                Product
                            </Typography>
                            <Typography
                                onClick={() => {navigate("/about")}}
                                className='navlink'
                                variant="h6"
                                noWrap
                                component="div"
                                color={colorNav}
                                sx={{ display: { xs: 'none', sm: 'block' }, mr:3 }}
                            >
                                About
                            </Typography>
                            <Typography
                                onClick={() => {navigate("/contact")}}
                                className='navlink'
                                variant="h6"
                                noWrap
                                component="div"
                                color={colorNav}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Contact
                            </Typography>
                        </Container>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton onClick={() => {navigate("/like")}} size="large" aria-label="show 4 new mails" >
                                    <FavoriteBorderOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={() => {navigate("/panier")}}
                                size="large"
                                aria-label="show 17 new notifications"
                            >
                                <Badge badgeContent={notifCart} color="error">
                                    <ShoppingBagOutlinedIcon />
                                </Badge>
                            </IconButton>
                            {/*  */}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;