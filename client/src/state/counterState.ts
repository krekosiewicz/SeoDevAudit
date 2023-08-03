// Import the atom utility from Recoil
import { atom } from 'recoil';

// Define an atom that represents a counter. It starts at 0.
export const counterState = atom({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default initial value
});
