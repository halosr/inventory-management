import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function ProductTable() {
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Pen</TableCell>
                            <TableCell>Elkos Alpha</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>300</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>
                                <ButtonGroup>
                                    <Button variant="contained" color="primary">
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="warning">
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default ProductTable;
