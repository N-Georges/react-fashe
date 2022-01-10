import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, Card, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// eslint-disable-next-line
import Data from '../Data'
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
const colorNav = grey[600]

const sizes = [
  {
    value: 'extra-small',
    label: 'xs',
  },
  {
    value: 'small',
    label: 's',
  },
  {
    value: 'medium',
    label: 'm',
  },
  {
    value: 'large',
    label: 'xl',
  },
];
const colors = [
  {
    value: 'red',
    label: 'red',
  },
  {
    value: 'blue',
    label: 'blue',
  },
  {
    value: 'grey',
    label: 'grey',
  },
  {
    value: 'yellow',
    label: 'yellow',
  },
];


const ProductDescription = ({ picture, subTitle, price, tag, description, onBuyArticle }) => {
  const [size, setSize] = useState('small');
  const [color, setColor] = useState('red');
  const [count, setCount] = useState(1)
 
  

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  
  const addQuantity = () => {
    setCount(count+1)
  }
  const removeQuantity = () => {
    if (count <= 1) {
      setCount(1)
    }else(
      setCount(count-1)

    )
    console.log(count);
  }
  return (
    <div>

      {/* <Box sx={{ width: '100%', my:5 }}> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={6} flexWrap={'wrap'}>
          <Card
            sx={{ width: '100%', height: '100vh', boxShadow: 3, cursor: 'pointer', position: 'relative' }}
            style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition:'center' }}
          >

          </Card>
        </Grid>
        <Grid item xs={6} sx={{}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              letterSpacing={1}
            >
              {subTitle}
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="div"
              letterSpacing={1}
            >
              ${price}
            </Typography>
          </Box>
          <Box className='contact-form' sx={{ m: 5}}>
            <TextField
              sx={{ my: 2 }}
              id="outlined-select-currency"
              select
              label="Size"
              value={size}
              onChange={handleChangeSize}
            >
              {sizes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ my: 2 }}
              id="outlined-select-currency"
              select
              label="Color"
              value={color}
              onChange={handleChangeColor}
            >
              {colors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Box className='' sx={{display:'flex'}}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button onClick={removeQuantity}><RemoveIcon/></Button>
                <Button>{count}</Button>
                <Button onClick={addQuantity}><AddIcon/></Button>
              </ButtonGroup>
              <Button
                variant="contained"
                sx={{ width: '60px', px: 7, ml:2 }}
                onClick={ onBuyArticle }
              >
                <AddShoppingCartOutlinedIcon/>
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="p"
              noWrap
              component="div"
              color={colorNav}
              sx={{ mt: 5, fontSize: '15px', display: { xs: 'none', sm: 'block' } }}
              >
              Categories: {tag}
            </Typography>
          </Box>
          <Box sx={{mt:6, borderTop:'1.5px solid lightgray', borderBottom:'1.5px solid lightgray'}}>
            <Typography
              variant="h6"
              noWrap
              sx={{pt:2, fontSize: '20px', display: { xs: 'none', sm: 'block' }}}
            >
              Description
            </Typography>
            <Typography
              color={colorNav}
              sx={{pt:3, pb:5 }}
            >
              {description} 
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default ProductDescription;