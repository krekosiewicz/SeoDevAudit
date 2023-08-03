'use client'
// Import necessary items
import { Button, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { counterState } from '../../state/counterState';

export default function CounterPage() {
  // Use the counter state
  const [counter, setCounter] = useRecoilState(counterState);
  
  return (
    <div>
      <Typography variant="h1">{counter}</Typography>
      <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </Button>
    </div>
  );
}
