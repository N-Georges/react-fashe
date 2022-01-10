import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const CardProductHome = ({picture, subTitle, price, tag, onClickDetail}) => {
    const [likeCard, setLikeCard] = useState('none')
    const [btnCard, setBtnCard] = useState('none')
    const [tagCard, setTagCard] = useState('none')
// eslint-disable-next-line
    const navigate = useNavigate()

    const showCardHover = () => {
        setLikeCard()
        setBtnCard()
        setTagCard()
    }
    const hiddenCardHover = () => {
        setLikeCard('none')
        setBtnCard('none')
        setTagCard('none')
    }
    return (
        <>  
            <Box 
                sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                    },
                }}>
                <Card
                    className='card1 cards'
                    sx={{ width: 238, height: 248, boxShadow: 3, cursor:'pointer', position:'relative' }}
                    style={{backgroundImage: `url(${picture})`}}
                    onMouseEnter={() => showCardHover()}
                    onMouseLeave={()=> hiddenCardHover()}
                    // onClick={() => navigate(`/product/${subTitle}`)}
                >
                    {/* <Box className='btn-card-product'> */}
                        <Button sx={{display:tagCard, opacity:'0.8', height:'10px', width:'20px', fontSize:'10px', borderRadius:'50px', m:'12px', ml:'5px', p:'10px'}} variant="contained">{tag}</Button>
                    {/* </Box> */}
                    <IconButton sx={{display:likeCard, position:'absolute', right:'0'}} size="large" aria-label="show 4 new mails" >
                            <FavoriteBorderOutlinedIcon  />
                    </IconButton>
                    <Box className='btn-card-product' sx={{position:'absolute', bottom:'10px', left:'50%', transform: 'translateX(-50%)'}}>
                        <Button onClick={onClickDetail} sx={{display:btnCard, opacity:'0.8', px:5}} variant="contained"><AddIcon/></Button>
                    </Box>
                </Card>
                <div className='cardProductHome-content'>
                    <p>{subTitle}</p>
                    <span>${price}</span>
                </div>
            </Box>
        </>
    );
};

export default CardProductHome;