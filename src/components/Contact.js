import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
const Contact = () => {

    const envoie = () =>{
        alert('Votre message a bien été envoyé !')
    }
    return (
        <div>
            <Box sx={{ width: '100%', my:5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sx={{display:'flex', justifyContent:'flex-end'}}>
                       <div>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.693710631144!2d4.339029415746115!3d50.85535587953333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2suk!4v1639406864728!5m2!1sfr!2suk" width="400" height="350" title='unique'></iframe>
                           
                       </div>
                    </Grid>
                    <Grid item xs={6} >
                        <h5>Send us your message</h5>
                        <div className='contact-form'>
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' sx={{mb:3}}/>
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" size='small' sx={{mb:3}}/>
                            <TextField id="outlined-basic" label="Email Adress" variant="outlined" size='normal' sx={{mb:3}}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <TextField id="outlined-basic" label="Message" variant="outlined" size='normal' sx={{mb:2}}/>
                            <div className=''btn-contac>
                            <Button onClick={() => envoie()} variant="contained" sx={{width:'60px', px:7}}>Envoyez</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Contact;