# date-time-now

Lightweight helper functions to format the current local date and time.

## Usage

```javascript
import { getDateNow, getTimeNow } from 'date-time-now';

console.log(getDateNow()); // e.g. "2026_11_22"
console.log(getDateNow('-')); // e.g. "2026-11-22"

console.log(getTimeNow()); // e.g. "00_48_10"
console.log(getTimeNow(':')); // e.g. "00:48:10"