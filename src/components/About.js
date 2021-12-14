import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import img10 from '../assets/about.jpg'

const About = () => {
    return (
        <div>
            <Box sx={{ width: '100%', my:5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4} sx={{display:'flex', justifyContent:'flex-end'}}>
                        <div className='about-content'>
                            <img src={img10} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={8} >
                        <h5>Our story</h5>
                        <div className='about-content-text'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem distinctio maxime corporis consequatur culpa ab necessitatibus accusantium repellat, suscipit voluptatum nemo error cumque placeat quia sed, nihil laborum animi assumenda exercitationem neque esse veniam? Ducimus aut, inventore obcaecati totam repellendus molestias atque officia dolorum velit ullam! Necessitatibus iure suscipit eum, cupiditate consequuntur fugit tenetur aperiam doloribus velit minima ullam mollitia animi dignissimos voluptates voluptatem reiciendis. Asperiores cupiditate iure nesciunt eligendi repudiandae delectus molestias adipisci quo labore quos deleniti ab voluptate hic exercitationem, aspernatur quae rem voluptatibus. Itaque unde, doloremque illum quibusdam optio a, voluptatibus recusandae enim minima numquam saepe nobis.</p>
                            <p className='steve'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi voluptates dolor, nisi autem, illo aperiam, aliquam incidunt voluptatem voluptate quis. Aliquam repellat nostrum saepe omnis quidem dolor numquam eligendi. Iure, corporis! Nostrum nisi <br /> <br />
                                - Steve Job's
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default About;