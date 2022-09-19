//import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@mui/material';
import { Stack } from '@mui/system';


function App() {
  return (
    <Box textAlign='center'>
      <Stack display='block' spacing={2} direction='column'>
        HOST
        <Button variant='contained' color='secondary' size='small'>
          HOST Button
        </Button>
      </Stack>
    </Box>
  );
}

export default App;
