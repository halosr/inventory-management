import { Box, Button, Paper } from '@mui/material';

function Summary() {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <Paper>Total: 5</Paper>
            <Button variant="contained" sx={{ gridColumn: '4' }}>
                Refresh
            </Button>
        </Box>
    );
}

export default Summary;
