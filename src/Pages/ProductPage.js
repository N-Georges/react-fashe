import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
// eslint-disable-next-line
import Product from '../components/Product';
import Data from  '../Data'
import Box from '@mui/material/Box';
import { Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors'; 
// import filterProduct from '../components/filterProduct';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import CardProductHome from '../components/CardProductHome';
const colorNav =  grey[600] 






const ProductPage = () => {
    const DetailArticle =(e) => {
        navigate(`/product/${e.subTitle}`)
    }
    console.log(DetailArticle);
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Product')
    // eslint-disable-next-line
    const [name, setName] = useState('New Arrivals Women Collection')
    // eslint-disable-next-line
    const [data, setData] = useState([])
    const navigate = useNavigate()
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
                subTitle={name}
            />
            <Container sx={{display:'flex', mt:3}}>
                <Grid xs={3} sx={{ ml: 8 , mt:3}}>
                    <div>
                        <div className='cat'>
                            <Typography
                                className='navlink'
                                variant="h6"
                                noWrap
                                sx={{ fontWeight: 'bold', fontSize: '25px', display: { xs: 'none', sm: 'block' } }}
                            >
                                Categories
                            </Typography>
                            <div className='cat-list'>
                                <Typography
                                    className='navlink'
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color={colorNav}
                                    sx={{ fontSize: '17px', display: { xs: 'none', sm: 'block' } }}
                                >
                                    All
                                </Typography>
                                <Typography
                                    className='navlink'
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color={colorNav}
                                    sx={{ fontSize: '17px', display: { xs: 'none', sm: 'block' } }}
                                >
                                    Women
                                </Typography>
                                <Typography
                                    className='navlink'
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color={colorNav}
                                    sx={{ fontSize: '17px', display: { xs: 'none', sm: 'block' } }}
                                >
                                    Kids
                                </Typography>
                                <Typography
                                    className='navlink'
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color={colorNav}
                                    sx={{ fontSize: '17px', display: { xs: 'none', sm: 'block' } }}
                                >
                                    Men
                                </Typography>
                                <Typography
                                    className='navlink'
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color={colorNav}
                                    sx={{ fontSize: '17px', display: { xs: 'none', sm: 'block' }, mb: 4 }}
                                >
                                    Accesoire
                                </Typography>
                            </div>
                        </div>
                        <Typography
                            className='navlink'
                            variant="h6"
                            noWrap
                            sx={{ fontWeight: 'bold', fontSize: '25px', display: { xs: 'none', sm: 'block' }, mb: 2 }}
                        >
                            Filter
                        </Typography>
                        <TextField id="outlined-basic" label="Search Product" variant="outlined" size='small' sx={{ mb: 2 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon sx={{ cursor: 'pointer' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                </Grid>
                <Grid xs={9}>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 153,
                            height: 208,
                            marginBottom: 30
                        }
                    }}>

                        {Data.map((item, index) => {
                            return (
                                <CardProductHome
                                    onClickDetail={() => DetailArticle(item)}
                                    key={index}
                                    picture={item.picture}
                                    subTitle={item.subTitle}
                                    price={item.price}
                                    tag={item.tag}
                                />
                            )
                        })}
                    </Box>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductPage;