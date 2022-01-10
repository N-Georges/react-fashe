import { Button, ButtonGroup, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const PanierBody = ({ picture, subTitle, price }) => {
    const [count, setCount] = useState(1)

    const addQuantity = () => {
        setCount(count + 1)
    }

    const removeQuantity = () => {
        if (count <= 1) {
            setCount(1)
        } else (
            setCount(count - 1)

        )
        console.log(count);
    }
    return (
        <div>
            <Box sx={{ m: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Product</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell align="center">
                                    <Card
                                        sx={{ width: '200%', height: '100px', boxShadow: 3, cursor: 'pointer', position: 'relative' }}
                                        style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >

                                    </Card>
                                </TableCell>
                                <TableCell align="center">{subTitle}</TableCell>
                                <TableCell align="center">{price}</TableCell>
                                <TableCell align="center">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                                        <Button onClick={removeQuantity}><RemoveIcon /></Button>
                                        <Button>{count}</Button>
                                        <Button onClick={addQuantity}><AddIcon /></Button>
                                    </ButtonGroup>
                                </TableCell>
                                <TableCell align="center">1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default PanierBody;