import { Box, Button, ButtonGroup, FormControl, Paper, TextField, Typography } from '@mui/material';

function ProductForm() {
    return (
        <Paper sx={{ margin: '2rem 0', padding: '1rem' }}>
            <Typography variant="h5">Add/ Update Product</Typography>
            <Box sx={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
                <FormControl>
                    <TextField id="name" label="Name" variant="outlined" value={''} onChange={() => {}} />
                </FormControl>
                <FormControl>
                    <TextField id="description" label="Description" variant="outlined" value={''} onChange={() => {}} />
                </FormControl>
                <FormControl>
                    <TextField id="price" label="Price" variant="outlined" value={''} onChange={() => {}} />
                </FormControl>
                <FormControl>
                    <TextField id="quantity" label="Quantity" variant="outlined" value={''} onChange={() => {}} />
                </FormControl>
            </Box>
            <ButtonGroup >
                <Button variant='contained'>Submit</Button>
                <Button>Clear</Button>
            </ButtonGroup>
        </Paper>
    );
}

export default ProductForm;
