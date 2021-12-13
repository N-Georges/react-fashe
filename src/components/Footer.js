import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ReceiptIcon from '@mui/icons-material/Receipt';

// eslint-disable-next-line
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Footer = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: 400, backgroundColor: 'lightgray' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sx={{textAlign:'center', mt:8}}>
                        <h6>GET IN TOUCH</h6>
                        <div className='footer-content'>
                            <p>Any questions? Let us know in store at 8h floor, 379 Hudson St, New York,</p>
                            <p>NY 10018 or call us on (+1) 96 7166879</p>
                        </div>
                        <div>
                            <Box className='footer-icon' >
                                <FacebookIcon sx={{mr:2, cursor:'pointer'}}/>
                                <InstagramIcon sx={{mr:2, cursor:'pointer'}}/>
                                <PinterestIcon sx={{mr:2, cursor:'pointer'}}/>
                                <YouTubeIcon sx={{mr:2, cursor:'pointer'}}/>
                            </Box>
                        </div>
                    </Grid >
                    <Grid item xs={3} sx={{mt:8}}>
                        <h6>Links</h6>
                        <div className='footer-link'>
                            <ul className='link-list'>
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3} sx={{mt:8}}>
                    <h6>Links</h6>
                        <div className='footer-link'>
                            <ul className='link-list'>
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} xs={12} sx={{display:'flex', justifyContent:'center', textAlign:'center'}} mt={8}>
                    <Box className='footer-icon' >
                        <EuroSymbolIcon sx={{ mr: 2, cursor: 'pointer' }} />
                        <AttachMoneyIcon sx={{ mr: 2, cursor: 'pointer' }} />
                        <CreditCardIcon sx={{ mr: 2, cursor: 'pointer' }} />
                        <CreditScoreIcon sx={{ mr: 2, cursor: 'pointer' }} />
                        <ReceiptIcon sx={{ cursor: 'pointer' }} />
                        <p>Copyright © All rights reserved</p>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;